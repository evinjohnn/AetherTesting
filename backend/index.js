const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const cron = require("node-cron");
const responseMiddleware = require("./middleware/responseMiddleware");
const connectDB = require("./DB/DB");
const { authMiddleware } = require("./middleware/authmiddleware");

dotenv.config({
  path: `./config/.env.${process.env.NODE_ENV || "production"}`,
});

connectDB();

const AuthRoutes = require("./services/AuthRoutes");
const AdminRoutes = require("./services/AdminRoutes");
const ClientRoutes = require("./services/ClientRoutes");
const { cleanupUnusedFiles } = require("./utils/savelocally");
const Technology = require("./models/Technology");

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "views", "assets")));
app.use("/public", express.static(path.join(__dirname, "../backend/public")));

cron.schedule("0 0 * * * *", () => {
  console.log("Starting");
  cleanupUnusedFiles();
});

app.use(responseMiddleware);

app.use("/api/admin", AuthRoutes);

app.use("/api", ClientRoutes);

// Admin routes
app.use("/api/admin", authMiddleware, AdminRoutes);

app.post("/update-url", async (req, res) => {
  try {
    // Fetch all records from the database
    const data = await Technology.find();

    for (const single of data) {
      if (single.image.includes("https://aetherbot.ai")) {
        // Replace the base URL
        const updatedUrl = single.image.replace(
          "https://aetherbot.ai",
          "http://139.59.93.107:5004"
        );

        // Update the record in the database
        await Technology.updateOne(
          { _id: single._id },
          { $set: { image: updatedUrl } }
        );
      }
    }

    res.status(200).json({ message: "success" });
  } catch (error) {
    console.error("Error updating URLs:", error);
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
  });
}

// Error handler
const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
