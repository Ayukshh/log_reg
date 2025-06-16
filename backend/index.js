/**
 * Main server file for the authentication backend
 * This file sets up the Express server, middleware, and routes
 */

// Basic server setup
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Create express app
const app = express();

// Basic middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Routes
const authRoutes = require('./src/routes/auth');
app.use('/api/auth', authRoutes);

// Basic test route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});