const Appointment = require('../models/Appointment');
const Counter = require('../models/Counter');

// Đặt lịch hẹn
exports.bookAppointment = async (req, res) => {
    try {
        const { doctorCode, branchCode, serviceCode, date, time } = req.body;

        // Kiểm tra xem thời điểm hẹn có sẵn không
        const isSlotAvailable = await checkAppointmentAvailability(doctorCode, date, time);

        if (!isSlotAvailable) {
            return res.status(400).json({ success: 0, message: 'Đã có lịch hẹn khác vào thời điểm này.' });
        }

        // Tạo mã lịch hẹn mới
        const appointmentCode = await generateNextAppointmentCode();

        // Lưu thông tin lịch hẹn vào database
        const appointment = new Appointment({
            appointmentCode,
            doctorCode,
            branchCode,
            serviceCode,
            date,
            time
        });

        await appointment.save();

        res.status(201).json({
            success: 1,
            message: 'Lịch hẹn đã được đặt thành công.',
            appointment: {
                ...appointment.toObject(),
                price: getServicePrice(serviceCode) // Thêm giá dịch vụ vào thông tin lịch hẹn
            }
        });
    } catch (error) {
        console.error('Lỗi khi đặt lịch hẹn:', error);
        res.status(500).json({ success: 0, message: 'Đã xảy ra lỗi khi đặt lịch hẹn.' });
    }
};

// Tìm kiếm lịch hẹn theo mã
exports.findAppointmentByCode = async (req, res) => {
    try {
        const appointmentCode = req.params.appointmentCode;

        // Tìm kiếm lịch hẹn trong database
        const appointment = await Appointment.findOne({ appointmentCode });

        if (!appointment) {
            return res.status(404).json({ success: 0, message: 'Không tìm thấy lịch hẹn.', appointment: null });
        }

        res.status(200).json({
            success: 1,
            message: 'Tìm thấy lịch hẹn.',
            appointment: {
                ...appointment.toObject(),
                price: getServicePrice(appointment.serviceCode) // Thêm giá dịch vụ vào thông tin lịch hẹn
            }
        });
    } catch (error) {
        console.error('Lỗi khi tìm kiếm lịch hẹn:', error);
        res.status(500).json({ success: 0, message: 'Đã xảy ra lỗi khi tìm kiếm lịch hẹn.' });
    }
};

// Kiểm tra xem thời điểm hẹn có sẵn không
async function checkAppointmentAvailability(doctorCode, date, time) {
    const existingAppointment = await Appointment.findOne({ doctorCode, date, time });
    return !existingAppointment;
}

// Sinh mã lịch hẹn tự động
async function generateNextAppointmentCode() {
    const counter = await Counter.findOneAndUpdate(
        { model: 'Appointment', field: 'appointmentCode' },
        { $inc: { count: 1 } },
        { new: true, upsert: true }
    );

    return `AP${counter.count}`;
}

// Lấy giá dịch vụ từ serviceCode
function getServicePrice(serviceCode) {
    // Giả sử dữ liệu giá dịch vụ lưu trong một cấu trúc nào đó, ví dụ:
    const servicePrices = {
        'DV001': 200000,
        'DV002': 300000,
        'DV003': 1000000,
        // Thêm các giá dịch vụ khác nếu cần
    };

    return servicePrices[serviceCode] || 0; // Trả về giá dịch vụ, nếu không tìm thấy trả về 0
}
