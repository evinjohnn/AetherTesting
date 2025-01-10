const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  education: { type: String, required: true },
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
TeamSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Team", TeamSchema);
