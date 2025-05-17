const mongoose = require('mongoose');

// Define the dimensions schema
const dimensionsSchema = new mongoose.Schema({
  length: { type: Number, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
});

// Define the main product schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  Customise: { type: String, required: true },
  category: { type: String, required: true },
  dimensions: { type: dimensionsSchema, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  priority: { type: Number, default: 0 }, // New field for sorting priority
  updatedAt: { type: Date, default: Date.now }, // Automatically set to current date on creation
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
