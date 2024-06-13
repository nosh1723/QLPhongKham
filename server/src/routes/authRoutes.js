const express = require('express');
const { register, login, getProfile, checkPhoneNumber } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, getProfile);
router.post('/check-phone', checkPhoneNumber);

module.exports = router;
