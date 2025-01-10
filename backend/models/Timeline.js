const mongoose = require("mongoose");

const TimelineSchema = new mongoose.Schema({
  event: { type: String, required: true },
  description: { type: String, required: true },
  year: { type: Number, required: true, unique: true },
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
TimelineSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Timeline", TimelineSchema);
