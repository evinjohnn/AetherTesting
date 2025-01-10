const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const WhoWeAreSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  card: {
    type: [CardSchema], // Array of CardSchema
    required: true,
  },
});

const WhoWeAre = mongoose.model("WhoWeAre", WhoWeAreSchema);

module.exports = WhoWeAre;
