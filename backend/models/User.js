// models/User.js
const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure that usernames are unique
    trim: true, // Remove whitespace from both ends
  },
  image: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure that emails are unique
    lowercase: true, // Convert email to lowercase
    trim: true, // Remove whitespace from both ends
  },
  password: {
    type: String,
    required: true,
    minlength: 5, // Minimum length for password
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
userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the User model
const User = mongoose.model("User ", userSchema);

module.exports = User;
