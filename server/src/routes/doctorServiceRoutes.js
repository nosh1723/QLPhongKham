const express = require('express');
const router = express.Router();
const DoctorService = require('../models/DoctorService');

// Lấy danh sách tất cả các dịch vụ của bác sĩ
router.get('/', async (req, res) => {
    try {
        const doctorServices = await DoctorService.find();
        res.json(doctorServices);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server' });
    }
});

// Lấy danh sách dịch vụ của một bác sĩ dựa trên mã bác sĩ
router.get('/doctor/:code', async (req, res) => {
    try {
        const doctorServices = await DoctorService.find({ doctor_code: req.params.code });
        res.json(doctorServices);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server' });
    }
});

// Lấy danh sách bác sĩ cung cấp một dịch vụ dựa trên tên dịch vụ
router.get('/service/:name', async (req, res) => {
    try {
        const doctorServices = await DoctorService.find({ service_name: req.params.name });
        res.json(doctorServices);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server' });
    }
});

module.exports = router;
