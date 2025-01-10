// models/User.js
const mongoose = require("mongoose");

// Define the User schema
const bannerSchema = new mongoose.Schema({
  section: {
    type: String,
  },
  image: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Set default to current date
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Set default to current date
  },
});

// Middleware to update the updatedAt field before saving
bannerSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the User model
const Banner = mongoose.model("Banner ", bannerSchema);

module.exports = Banner;
