require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { celebrate, Joi, errors, Segments } = require('celebrate');
const Product = require('./models/Product');
const fs = require('fs');
const https = require('https');
 
const app = express();
const PORT = process.env.PORT || 3001;
const API_BASE_URL = process.env.API_BASE_URL || 'https://venturecanadaleather.ca/api';
 
// Middleware
app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = [
      'https://venturecanadaleather.ca',
      'https://www.venturecanadaleather.ca',
      'http://localhost:3000',
      'http://localhost:3001'
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log(`Blocked by CORS: ${origin}`);
      callback(new Error('Not allowed by CORS!'));
    }
  },
  credentials: true
}));
 
app.use(bodyParser.json());
app.set('trust proxy', 1); // Trust Nginx Proxy
 
// Rate limiting to prevent abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 500, // Allow 500 requests per window
  message: "Too many requests, please try again later.",
});
app.use(limiter);
 
// MongoDB connection with improved error handling
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch((error) => {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1); // Stop server if DB connection fails
  });
 
// Product validation schema
const productValidationSchema = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().optional(),
    Customise: Joi.string().required(),
    category: Joi.string().required(),
    dimensions: Joi.object().keys({
      length: Joi.number().required(),
      width: Joi.number().required(),
      height: Joi.number().required(),
    }).required(),
    price: Joi.number().required(),
    imageUrl: Joi.string().uri().required(),
  }),
};
 
// Pagination middleware
const paginate = (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  req.pagination = { page, limit };
  next();
};
 
// Routes
app.get('/api/products', paginate, async (req, res) => {
  const { page, limit } = req.pagination;
  try {
    const products = await Product.find()
      .skip((page - 1) * limit)
      .limit(limit);
    const count = await Product.countDocuments();
    res.json({ products, totalPages: Math.ceil(count / limit), currentPage: page });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
 
app.post('/api/products', celebrate(productValidationSchema), async (req, res) => {
  const { name, description, Customise, category, dimensions, price, imageUrl } = req.body;
  try {
    const newProduct = new Product({ name, description, Customise, category, dimensions, price, imageUrl });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
 
app.get('/api/products/:category', async (req, res) => {
  const { category } = req.params;
  try {
    const products = await Product.find({ category });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});
 
app.get('/api/products/id/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching product', errorDetails: error });
  }
});
 
app.put('/api/products/id/:id', celebrate(productValidationSchema), async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
 
  try {
    const product = await Product.findByIdAndUpdate(id, updatedData, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product updated successfully', product });
  } catch (error) {
    res.status(500).json({ error: 'Error updating product', errorDetails: error });
  }
});
 
app.delete('/api/products/id/:id', async (req, res) => {
  const { id } = req.params;
 
  try {
    const result = await Product.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting product', errorDetails: error });
  }
});
 
// Global error handler for Celebrate validation errors
app.use(errors());
 
// Start HTTPS server
const sslOptions = {
  key: fs.readFileSync('./ssl/server.key'),
  cert: fs.readFileSync('./ssl/security.crt'),
};
 
https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});