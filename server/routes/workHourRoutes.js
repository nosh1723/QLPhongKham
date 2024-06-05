const express = require('express');
const router = express.Router();
const WorkHour = require('../models/WorkHour');

// Lấy danh sách tất cả các giờ làm việc
router.get('/', async (req, res) => {
    try {
        const workHours = await WorkHour.find();
        res.json(workHours);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server' });
    }
});

// Lấy thông tin một giờ làm việc theo tiêu đề và thời gian
router.get('/:title/:start_time/:end_time', async (req, res) => {
    try {
        const workHour = await WorkHour.findOne({
            title: req.params.title,
            start_time: req.params.start_time,
            end_time: req.params.end_time
        });
        if (!workHour) {
            return res.status(404).json({ message: 'Không tìm thấy giờ làm việc' });
        }
        res.json(workHour);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server' });
    }
});

module.exports = router;
