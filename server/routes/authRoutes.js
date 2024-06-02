const express = require('express');
const { register, login, getProfile } = require('../controllers/authController');
const { generateOTP, verifyOTP } = require('../controllers/otpController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, getProfile);

// Định tuyến OTP
router.post('/generate-otp', generateOTP);
router.post('/verify-otp', verifyOTP);

module.exports = router;
