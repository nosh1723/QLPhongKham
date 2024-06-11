const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const Service = require('../models/Service');
const Branch = require('../models/Branch');

// Lấy danh sách tất cả các bác sĩ
router.get('/', async (req, res) => {
    try {
        const doctors = await Doctor.find()
            .populate('branch', 'name') // Populate only the name field of the branch
            .populate({
                path: 'services',
                populate: {
                    path: 'service',
                    model: 'Service',
                    select: 'code name'
                }
            });

        // Transform the doctors array to add branch_name for each doctor
        const doctorsWithBranchName = doctors.map(doctor => {
            let branchName = '';
            if (doctor.branch) {
                branchName = doctor.branch.name;
            }
            return {
                ...doctor.toObject(),
                branch_name: branchName
            };
        });

        res.json(doctorsWithBranchName);
    } catch (error) {
        console.error('Lỗi khi lấy danh sách bác sĩ:', error); 
        res.status(500).json({ message: 'Lỗi server' });
    }
});

// Lấy thông tin một bác sĩ theo mã
router.get('/:code', async (req, res) => {
    try {
        const doctor = await Doctor.findOne({ code: req.params.code })
            .populate('branch', 'name') // Populate only the name field of the branch
            .populate({
                path: 'services',
                populate: {
                    path: 'service',
                    model: 'Service',
                    select: 'code name'
                }
            });

        if (!doctor) {
            return res.status(404).json({ message: 'Không tìm thấy bác sĩ' });
        }

        let branchName = '';
        if (doctor.branch) {
            branchName = doctor.branch.name;
        }

        const doctorWithBranchName = {
            ...doctor.toObject(),
            branch_name: branchName
        };

        res.json(doctorWithBranchName);
    } catch (error) {
        console.error('Lỗi khi lấy bác sĩ theo mã:', error); 
        res.status(500).json({ message: 'Lỗi server' });
    }
});

module.exports = router;
