// models/User.js
const mongoose = require("mongoose");

// Define the User schema
const ProductSchema = new mongoose.Schema({
  title: {
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
ProductSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the User model
const Products = mongoose.model("Products ", ProductSchema);

module.exports = Products;
