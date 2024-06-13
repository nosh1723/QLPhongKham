const mongoose = require('mongoose');

// Schema cho lịch hẹn
const AppointmentSchema = new mongoose.Schema({
    appointmentCode: { type: String, required: true, unique: true }, // Mã lịch hẹn tự tăng
    doctorCode: { type: String, required: true }, // Mã bác sĩ
    branchCode: { type: String, required: true }, // Mã chi nhánh
    serviceCode: { type: String, required: true }, // Mã dịch vụ
    date: { type: Date, required: true }, // Ngày hẹn
    time: { type: Date, required: true }, // Giờ hẹn
    status: { type: String, enum: ['Booked', 'Cancelled'], default: 'Booked' }, // Trạng thái lịch hẹn
    createdAt: { type: Date, default: Date.now }, // Ngày tạo
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
