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

// Lấy thông tin một dịch vụ theo ID
router.get('/id/:id', async (req, res) => {
    try {
        const doctorService = await DoctorService.findById(req.params.id);
        if (!doctorService) {
            return res.status(404).json({ message: 'Không tìm thấy dịch vụ' });
        }
        res.json(doctorService);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server' });
    }
});

module.exports = router;
