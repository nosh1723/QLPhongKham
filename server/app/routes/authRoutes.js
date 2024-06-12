const express = require('express');
const { register, login, getProfile } = require('../controllers/authController');
const { sendOTP, verifyOTP } = require('../controllers/otpController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, getProfile);

// OTP routes
router.post('/generate-otp', sendOTP); 
router.post('/verify-otp', verifyOTP);

module.exports = router;
