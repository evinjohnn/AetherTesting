// models/User.js
const mongoose = require("mongoose");

// Define the User schema
const clientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    required: false,
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
clientSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the User model
const client = mongoose.model("client ", clientSchema);

module.exports = client;
