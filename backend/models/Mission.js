// models/User.js
const mongoose = require("mongoose");

// Define the User schema
const missionSchema = new mongoose.Schema({
  title: {
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
missionSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the User model
const Mission = mongoose.model("Mission ", missionSchema);

module.exports = Mission;
