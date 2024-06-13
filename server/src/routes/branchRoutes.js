const express = require('express');
const router = express.Router();
const Branch = require('../models/Branch');

// Lấy tất cả các chi nhánh
router.get('/', async (req, res) => {
    try {
        const branches = await Branch.find();
        res.json(branches);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
    }
});

// Lấy chi nhánh theo mã
router.get('/:code', async (req, res) => {
    try {
        const branch = await Branch.findOne({ code: req.params.code });
        if (!branch) {
            return res.status(404).json({ message: 'Không tìm thấy chi nhánh' });
        }
        res.json(branch);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
    }
});

module.exports = router;
