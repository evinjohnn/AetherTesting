const mongoose = require("mongoose");

// Define the Process schema
const processSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Add validation for required fields if needed
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  section: {
    type: String,
  },
  sub_section: {
    type: String,
  },
  image: {
    type: String,
    required: false, // This field is optional
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the current date
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Automatically set the current date
  },
});

// Middleware to update the `updatedAt` field before saving
processSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the Process model
const Process = mongoose.model("Process", processSchema);

module.exports = Process;
