/*
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const Doctor = require('./models/Doctor');
const Service = require('./models/Service');
const DoctorService = require('./models/DoctorService');
const doctorServices = require('./data/doctor_services.json');

// Tải các biến môi trường từ tệp .env
dotenv.config();

// Kết nối tới MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    console.log('Đã kết nối đến MongoDB');

    try {
        // Lặp qua từng mục trong doctorServices.json
        for (const ds of doctorServices) {
            // Tìm bác sĩ sử dụng doctor_code
            const doctor = await Doctor.findOne({ code: ds.doctor_code });
            if (!doctor) {
                throw new Error(`Bác sĩ với mã ${ds.doctor_code} không tồn tại.`);
            }

            // Tìm dịch vụ sử dụng service_id
            const service = await Service.findById(ds.service_id);
            if (!service) {
                throw new Error(`Dịch vụ với ID ${ds.service_id} không tồn tại.`);
            }

            // Tạo một đối tượng DoctorService mới
            const doctorService = new DoctorService({
                doctor_id: doctor._id,
                doctor_code: ds.doctor_code,
                service_id: service._id,
            });

            // Lưu đối tượng DoctorService
            await doctorService.save();
        }

        console.log('Cập nhật doctor_services hoàn tất.');
    } catch (error) {
        console.error('Lỗi khi cập nhật doctor_services:', error);
        process.exit(1); // Kết thúc với trạng thái lỗi
    } finally {
        mongoose.disconnect();
    }
}).catch((err) => {
    console.error('Lỗi kết nối MongoDB:', err);
    process.exit(1); // Kết thúc với trạng thái lỗi
});
    
*/