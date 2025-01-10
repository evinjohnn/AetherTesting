// models/User.js
const mongoose = require("mongoose");

// Define the User schema
const sectionSchema = new mongoose.Schema({
  section: {
    type: String,
  },
  subsection: {
    type: String,
  },

  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
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
sectionSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the User model
const Banner = mongoose.model("Section ", sectionSchema);

module.exports = Banner;
