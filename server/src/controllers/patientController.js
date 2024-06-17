const Patient = require('../models/Patient');

// Tạo mới bệnh nhân
exports.createPatient = async (req, res) => {
    try {
        const {
            name,
            code,
            gender,
            health_insurance_code,
            health_insurance_start_date,
            health_insurance_end_date,
            payment_type,
            birth_date,
            address,
            ethnic,
            email,
            phone_number,
            branch_id
        } = req.body;

        const newPatient = new Patient({
            name,
            code,
            gender,
            health_insurance_code,
            health_insurance_start_date,
            health_insurance_end_date,
            payment_type,
            birth_date,
            address,
            ethnic,
            email,
            phone_number,
            branch_id
        });

        await newPatient.save();
        res.status(201).json(newPatient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Lấy danh sách tất cả bệnh nhân
exports.getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Lấy thông tin bệnh nhân theo ID
exports.getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
            return res.status(404).json({ error: 'Không tìm thấy bệnh nhân' });
        }
        res.status(200).json(patient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Cập nhật thông tin bệnh nhân theo ID
exports.updatePatientById = async (req, res) => {
    try {
        const {
            name,
            code,
            gender,
            health_insurance_code,
            health_insurance_start_date,
            health_insurance_end_date,
            payment_type,
            birth_date,
            address,
            ethnic,
            email,
            phone_number,
            branch_id
        } = req.body;

        const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, {
            name,
            code,
            gender,
            health_insurance_code,
            health_insurance_start_date,
            health_insurance_end_date,
            payment_type,
            birth_date,
            address,
            ethnic,
            email,
            phone_number,
            branch_id
        }, { new: true });

        if (!updatedPatient) {
            return res.status(404).json({ error: 'Không tìm thấy bệnh nhân để cập nhật' });
        }

        res.status(200).json(updatedPatient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Xóa bệnh nhân theo ID
exports.deletePatientById = async (req, res) => {
    try {
        const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
        if (!deletedPatient) {
            return res.status(404).json({ error: 'Không tìm thấy bệnh nhân để xóa' });
        }
        res.status(200).json({ message: 'Đã xóa bệnh nhân thành công' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
