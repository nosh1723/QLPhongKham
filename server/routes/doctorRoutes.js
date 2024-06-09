const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

// Lấy danh sách tất cả các bác sĩ
router.get('/', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server' });
    }
});

// Lấy thông tin một bác sĩ theo mã
router.get('/:code', async (req, res) => {
    try {
        const doctor = await Doctor.findOne({ code: req.params.code });
        if (!doctor) {
            return res.status(404).json({ message: 'Không tìm thấy bác sĩ' });
        }
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server' });
    }
});

module.exports = router;
