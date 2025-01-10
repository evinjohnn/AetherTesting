// models/User.js
const mongoose = require("mongoose");

// Define the User schema
const platformsubSchema = new mongoose.Schema({
  name: {
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
platformsubSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the User model
const PlatformSub = mongoose.model("platformsub ", platformsubSchema);

module.exports = PlatformSub;
