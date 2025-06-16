/**
 * Authentication Controller
 * Handles user registration and login functionality
 */

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

/**
 * Register a new user
 * @route POST /api/auth/register
 * @param {Object} req.body - Request body containing email and password
 * @returns {Object} 201 - User created successfully with JWT token
 * @returns {Object} 400 - User already exists
 * @returns {Object} 500 - Server error
 */
exports.registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const user = new User({ email, password });
    await user.save();

    // Create token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(201).json({ token, userId: user._id });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed' });
  }
};

/**
 * Login user
 * @route POST /api/auth/login
 * @param {Object} req.body - Request body containing email and password
 * @returns {Object} 200 - Login successful with JWT token
 * @returns {Object} 401 - Invalid credentials
 * @returns {Object} 500 - Server error
 */
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Create token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token, userId: user._id });
  } catch (err) {
    res.status(500).json({ message: 'Login failed' });
  }
};