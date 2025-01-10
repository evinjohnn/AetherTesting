// models/User.js
const mongoose = require("mongoose");

// Define the User schema
const industrySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
    required: false,
  },
  description: {
    type: String,
  },
  route: {
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
industrySchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the User model
const industry = mongoose.model("industry ", industrySchema);

module.exports = industry;
