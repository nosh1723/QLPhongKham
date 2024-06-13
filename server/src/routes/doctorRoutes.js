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
router.post('/info', async (req, res) => {
    try {
        const doctor = await Doctor.findOne({ _id: req.body.id })
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

        const doctorInfo = doctor.toObject()

        const doctorWithBranchDetails = {
            id: doctorInfo?._id,
            code: doctorInfo?.code,
            name: doctorInfo?.name,
            birthDate: doctorInfo?.birth_date,
            gender: doctorInfo?.gender,
            yearOfExperience: doctorInfo?.year_of_experience,
            experience: doctorInfo?.experience,
            description: doctorInfo?.description,
            avatar: doctorInfo?.avatar,
            services: doctorInfo?.services,
            branch: branchDetails
        };

        res.status(200).json(doctorWithBranchDetails);
    } catch (error) {
        console.error('Lỗi khi lấy thông tin bác sĩ theo mã:', error);
        res.status(500).json({ message: 'Lỗi máy chủ' });
    }
});

module.exports = router;
