const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  filePath: {
    type: String,
    required: true,
  },
  fileUrl: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true, // Indicates if the file is actively in use
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
fileSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const File = mongoose.model("File", fileSchema);

module.exports = File;
