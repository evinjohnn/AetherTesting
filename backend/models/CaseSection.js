const mongoose = require("mongoose");

const CaseSectionSchema = new mongoose.Schema({
  description: { type: String, required: true },
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
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

CaseSectionSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("CaseSection", CaseSectionSchema);
