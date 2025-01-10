// models/User.js
const mongoose = require("mongoose");

// Define the User schema
const problemSolutionSchema = new mongoose.Schema({
  problem: {
    type: String,
  },
  solution: {
    type: String,
  },
  image: {
    type: String,
    required: false,
  },
  section: {
    type: String,
  },
  sub_section: {
    type: String,
  },
  type: {
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
problemSolutionSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the User model
const ProblemSolution = mongoose.model(
  "problemSolution ",
  problemSolutionSchema
);

module.exports = ProblemSolution;
