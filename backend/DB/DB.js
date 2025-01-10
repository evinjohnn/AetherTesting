const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const mongoUri =
      process.env.NODE_ENV === "production"
        ? process.env.MONGODB_ATLAS
        : process.env.MONGODB_LOCAL;

    if (!mongoUri) {
      throw new Error(
        "MongoDB URI is not defined in the environment variables."
      );
    }

    await mongoose.connect(mongoUri);

    console.log(
      `Connected to the ${
        process.env.NODE_ENV === "production" ? "Atlas" : "local"
      } database`
    );
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

module.exports = connectDB;
