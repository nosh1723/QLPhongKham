const mongoose = require('mongoose');
const Appointment = require('../models/Appointment');
const Service = require('../models/Service');
const Doctor = require('../models/Doctor');
const Branch = require('../models/Branch');

// Đặt lịch hẹn
exports.bookAppointment = async (req, res) => {
    try {
        const { doctorId, branchId, serviceId, date, time } = req.body;

        // Chỉ xét phần ngày của 'date' để kiểm tra tính khả dụng
        const appointmentDate = new Date(date);
        appointmentDate.setHours(0, 0, 0, 0);  // Đặt giờ về 00:00:00.000

        // Kiểm tra tính khả dụng của lịch hẹn
        const isSlotAvailable = await checkAppointmentAvailability(doctorId, appointmentDate, time);

        if (!isSlotAvailable) {
            return res.status(400).json({ success: 0, message: 'Đã có lịch hẹn khác vào thời điểm này.' });
        }

        // Đảm bảo doctorId, branchId và serviceId là ObjectId hợp lệ
        let doctorObjectId, branchObjectId, serviceObjectId;
        try {
            doctorObjectId = new mongoose.Types.ObjectId(doctorId);
            branchObjectId = new mongoose.Types.ObjectId(branchId);
            serviceObjectId = new mongoose.Types.ObjectId(serviceId);
        } catch (error) {
            console.error('Định dạng ID không hợp lệ:', error);
            return res.status(400).json({ success: 0, message: 'ID không hợp lệ.' });
        }

        // Truy vấn thông tin bác sĩ
        const doctor = await Doctor.findById(doctorObjectId);
        if (!doctor) {
            return res.status(404).json({ success: 0, message: 'Không tìm thấy bác sĩ.' });
        }

        // Truy vấn thông tin chi nhánh
        const branch = await Branch.findById(branchObjectId);
        if (!branch) {
            return res.status(404).json({ success: 0, message: 'Không tìm thấy chi nhánh.' });
        }

        // Truy vấn thông tin dịch vụ
        const service = await Service.findOne({ _id: serviceObjectId });
        if (!service) {
            return res.status(404).json({ success: 0, message: 'Không tìm thấy dịch vụ.' });
        }

        // Sinh mã lịch hẹn (ví dụ)
        const appointmentCode = generateAppointmentCode(doctorId, branchId, serviceId, appointmentDate, time);

        // Tạo mới lịch hẹn và lưu vào cơ sở dữ liệu
        const appointment = new Appointment({
            doctorId: doctorObjectId,
            branchId: branchObjectId,
            serviceId: serviceObjectId,
            date: appointmentDate,
            time,
            price: service.price,
            appointmentCode // Gán appointmentCode đã sinh
        });

        await appointment.save();

        // Trả về thông tin lịch hẹn đã được đặt thành công
        res.status(201).json({
            success: 1,
            message: 'Lịch hẹn đã được đặt thành công.',
            appointment
        });
    } catch (error) {
        console.error('Lỗi khi đặt lịch hẹn:', error);
        res.status(500).json({ success: 0, message: 'Đã xảy ra lỗi khi đặt lịch hẹn.' });
    }
};

// Hàm kiểm tra tính khả dụng của lịch hẹn
async function checkAppointmentAvailability(doctorId, date, time) {
    const existingAppointment = await Appointment.findOne({ doctorId, date, time });
    return !existingAppointment;
}

// Hàm sinh mã lịch hẹn (ví dụ)
function generateAppointmentCode(doctorId, branchId, serviceId, appointmentDate, time) {
    // Logic ví dụ để sinh mã lịch hẹn duy nhất
    return `${doctorId}_${branchId}_${serviceId}_${appointmentDate.getTime()}_${time}`;
}

// Tìm lịch hẹn bằng _id
exports.findAppointmentById = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await Appointment.findById(id);

        if (!appointment) {
            return res.status(404).json({ success: 0, message: 'Lịch hẹn không tồn tại.' });
        }

        // Trả về thông tin lịch hẹn đã tìm thấy
        res.status(200).json({ success: 1, appointment });
    } catch (error) {
        console.error('Lỗi khi tìm kiếm lịch hẹn:', error);
        res.status(500).json({ success: 0, message: 'Đã xảy ra lỗi khi tìm kiếm lịch hẹn.' });
    }
};
