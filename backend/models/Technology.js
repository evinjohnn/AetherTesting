const mongoose = require("mongoose");

const technologySchema = new mongoose.Schema(
  {
    image: {
      type: String, // Assuming `image` is a path or URL to the image
    },
    text: {
      type: String, // A description or title
      required: true,
    },
    points: {
      type: [String], // An array of strings for the points
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model("Technology", technologySchema);
