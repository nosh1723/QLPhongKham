const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const Branch = require('../models/Branch');
const DoctorService = require('../models/DoctorService');

// Lấy danh sách tất cả các bác sĩ cùng thông tin chi nhánh
router.get('/', async (req, res) => {
    try {
        const doctors = await Doctor.find()
            .populate({
                path: 'services',
                populate: {
                    path: 'service',
                    model: 'Service',
                    select: 'code name'
                }
            });

        // Lấy tất cả chi nhánh
        const branches = await Branch.find();

        const doctorsWithBranchDetails = doctors.map(doctor => {
            const branch = branches.find(b => b.code === doctor.branch_code);
            let branchDetails = null;
            if (branch) {
                branchDetails = {
                    id: branch._id,
                    code: branch.code,
                    name: branch.name
                };
            }

            return {
                ...doctor.toObject(),
                branch: branchDetails
            };
        });

        res.json(doctorsWithBranchDetails);
    } catch (error) {
        console.error('Lỗi khi lấy danh sách bác sĩ:', error);
        res.status(500).json({ message: 'Lỗi máy chủ' });
    }
});

// Lấy thông tin bác sĩ theo mã cùng thông tin chi nhánh
router.get('/:code', async (req, res) => {
    try {
        const doctor = await Doctor.findOne({ code: req.params.code })
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

        const branch = await Branch.findOne({ code: doctor.branch_code });
        let branchDetails = null;
        if (branch) {
            branchDetails = {
                id: branch._id,
                code: branch.code,
                name: branch.name
            };
        }

        const doctorWithBranchDetails = {
            ...doctor.toObject(),
            branch: branchDetails
        };

        res.json(doctorWithBranchDetails);
    } catch (error) {
        console.error('Lỗi khi lấy thông tin bác sĩ theo mã:', error);
        res.status(500).json({ message: 'Lỗi máy chủ' });
    }
});

module.exports = router;
