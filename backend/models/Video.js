const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  video: { type: String, required: true },
  section: {
    type: String,
  },
  sub_section: {
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
VideoSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Video", VideoSchema);
