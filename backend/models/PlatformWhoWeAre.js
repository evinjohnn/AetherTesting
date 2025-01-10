const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true,
  },
  title: {
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
  title: {
    type: String,
  },
  card: {
    type: [CardSchema], // Array of CardSchema
    required: true,
  },
});

const PlatformWhoWeAre = mongoose.model("PlatformWhoWeAre", WhoWeAreSchema);

module.exports = PlatformWhoWeAre;
