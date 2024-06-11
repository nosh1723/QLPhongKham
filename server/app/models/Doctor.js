const mongoose = require('mongoose');
const Branch = require('./Branch');
const DoctorService = require('./DoctorService');
const Service = require('./Service');

const DoctorSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Tên bác sĩ
    birth_date: { type: Date, required: true }, // Ngày sinh
    gender: { type: String, required: true }, // Giới tính
    year_of_experience: { type: Number, required: true }, // Số năm kinh nghiệm
    experience: { type: String, required: true }, // Kinh nghiệm
    code: { type: String, required: true, unique: true }, // Mã bác sĩ
    description: { type: String }, // Mô tả
    avatar: { type: String }, // Ảnh đại diện
    branch: { type: mongoose.Schema.Types.ObjectId, ref: 'Branch' }, // Tham chiếu đến Branch
    branch_name: { type: String, require: true, ref: 'Branch' } // Tên chi nhánh
});

// Trường ảo cho dịch vụ
DoctorSchema.virtual('services', {
    ref: 'DoctorService',
    localField: 'code',
    foreignField: 'doctor_code',
    justOne: false, // Cho phép nhiều dịch vụ
    populate: {
        path: 'service',
        model: 'Service',
        select: 'code name' // Chọn mã và tên của dịch vụ
    }
});

DoctorSchema.set('toObject', { virtuals: true });
DoctorSchema.set('toJSON', { virtuals: true });

// Trước khi lưu, populate tên chi nhánh
DoctorSchema.pre('save', async function (next) {
    try {
        if (this.branch) {
            const branch = await Branch.findById(this.branch);
            if (branch) {
                this.branch_name = branch.name;
            }
        }
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('Doctor', DoctorSchema);
