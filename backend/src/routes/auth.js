const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authControllers');
const verifyToken = require('../middleware/authMiddleware'); // Single import

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route
router.get('/profile', verifyToken, (req, res) => {
  res.json({ message: "Welcome to your profile", user: req.user });
});

module.exports = router; // Don't forget to export!