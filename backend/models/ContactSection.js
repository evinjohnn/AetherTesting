const mongoose = require("mongoose");

const ContactOptions = new mongoose.Schema({
  link: {
    type: String,
  },

  title: {
    type: String,
  },
});

const ContactSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  options: {
    type: [ContactOptions],
    required: true,
  },
});

const ContactSection = mongoose.model("ContactSection", ContactSchema);

module.exports = {
  ContactSection,
};
