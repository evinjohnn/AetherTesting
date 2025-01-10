const mongoose = require("mongoose");

const CaseStudiesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  section: {
    type: String,
  },
  sub_section: {
    type: String,
  },
  image: {
    type: String,
    required: false,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

CaseStudiesSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("CaseStudy", CaseStudiesSchema);
