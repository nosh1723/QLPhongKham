const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Lấy danh sách tất cả các dịch vụ
router.get('/', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server' });
    }
});

// Lấy thông tin một dịch vụ theo mã
router.get('/:code', async (req, res) => {
    try {
        const service = await Service.findOne({ code: req.params.code });
        if (!service) {
            return res.status(404).json({ message: 'Không tìm thấy dịch vụ' });
        }
        res.json(service);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server' });
    }
});

module.exports = router;
