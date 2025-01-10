// models/User.js
const mongoose = require("mongoose");

// Define the User schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  company: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
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
contactSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the User model
const Contact = mongoose.model("Contact ", contactSchema);

module.exports = Contact;
