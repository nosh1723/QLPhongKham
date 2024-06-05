const express = require('express');
const router = express.Router();
const Schedule = require('../models/Schedule');

// Lấy danh sách tất cả các lịch làm việc
router.get('/', async (req, res) => {
    try {
        const schedules = await Schedule.find();
        res.json(schedules);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server' });
    }
});

// Lấy thông tin một lịch làm việc theo mã bác sĩ và ngày
router.get('/:doctor_code/:date', async (req, res) => {
    try {
        const schedule = await Schedule.findOne({
            doctor_code: req.params.doctor_code,
            date: req.params.date
        });
        if (!schedule) {
            return res.status(404).json({ message: 'Không tìm thấy lịch làm việc' });
        }
        res.json(schedule);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server' });
    }
});

module.exports = router;
