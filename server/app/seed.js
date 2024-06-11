const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Doctor = require('./models/Doctor');
const Service = require('./models/Service');
const Schedule = require('./models/Schedule');
const WorkHour = require('./models/WorkHour');
const DoctorService = require('./models/DoctorService');
const Branch = require('./models/Branch');
const users = require('./data/users.json');
const doctors = require('./data/doctors.json');
const services = require('./data/services.json');
const schedules = require('./data/schedules.json');
const workHours = require('./data/work_hours.json');
const doctorServices = require('./data/doctor_services.json');
const branches = require('./data/branches.json');

// Tải các biến môi trường từ tệp .env
dotenv.config();

// Kết nối tới MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    console.log('Đã kết nối đến MongoDB');

    // Thêm chi nhánh
    for (const branch of branches) {
        try {
            const existingBranch = await Branch.findOne({ code: branch.code });
            if (!existingBranch) {
                await Branch.create(branch);
            } else {
                await Branch.updateOne({ code: branch.code }, branch);
            }
        } catch (error) {
            console.error('Lỗi khi thêm hoặc cập nhật chi nhánh:', error);
        }
    }

    // Thêm bác sĩ
    for (const doctor of doctors) {
        try {
            const existingDoctor = await Doctor.findOne({ code: doctor.code });
            if (!existingDoctor) {
                await Doctor.create(doctor);
            } else {
                await Doctor.updateOne({ code: doctor.code }, doctor);
            }
        } catch (error) {
            console.error('Lỗi khi thêm hoặc cập nhật bác sĩ:', error);
        }
    }

    // Thêm người dùng
    for (const user of users) {
        try {
            const existingUser = await User.findOne({ phone_number: user.phone_number });
            if (!existingUser) {
                await User.create(user);
            } else {
                await User.updateOne({ phone_number: user.phone_number }, user);
            }
        } catch (error) {
            console.error('Lỗi khi thêm hoặc cập nhật người dùng:', error);
        }
    }

    // Thêm dịch vụ
    for (const service of services) {
        try {
            const existingService = await Service.findOne({ code: service.code });
            if (!existingService) {
                await Service.create(service);
            } else {
                await Service.updateOne({ code: service.code }, service);
            }
        } catch (error) {
            console.error('Lỗi khi thêm hoặc cập nhật dịch vụ:', error);
        }
    }

    // Thêm lịch làm việc
    for (const schedule of schedules) {
        try {
            const existingSchedule = await Schedule.findOne({
                doctor_code: schedule.doctor_code,
                date: schedule.date
            });
            if (!existingSchedule) {
                await Schedule.create(schedule);
            } else {
                await Schedule.updateOne({
                    doctor_code: schedule.doctor_code,
                    date: schedule.date
                }, schedule);
            }
        } catch (error) {
            console.error('Lỗi khi thêm hoặc cập nhật lịch làm việc:', error);
        }
    }

    // Thêm giờ làm việc
    for (const workHour of workHours) {
        try {
            const existingWorkHour = await WorkHour.findOne({
                title: workHour.title,
                startTime: workHour.startTime,
                endTime: workHour.endTime,
                typeShiftWork: workHour.typeShiftWork
            });

            if (!existingWorkHour) {
                await WorkHour.create(workHour);
            } else {
                await WorkHour.updateOne({
                    title: workHour.title,
                    startTime: workHour.startTime,
                    endTime: workHour.endTime,
                    typeShiftWork: workHour.typeShiftWork
                }, workHour);
            }
        } catch (error) {
            console.error('Lỗi khi thêm hoặc cập nhật giờ làm việc:', error);
        }
    }

    // Thêm dữ liệu DoctorService
    for (const ds of doctorServices) {
        try {
            const doctor = await Doctor.findOne({ code: ds.doctor_code });
            const service = await Service.findOne({ name: ds.service_name });

            // Kiểm tra xem bác sĩ và dịch vụ có tồn tại không
            if (!doctor) {
                console.error(`Bác sĩ với mã ${ds.doctor_code} không tồn tại.`);
                continue;
            }

            if (!service) {
                console.error(`Dịch vụ "${ds.service_name}" không tồn tại.`);
                continue;
            }

            // Tạo một đối tượng DoctorService mới và lưu vào cơ sở dữ liệu
            const doctorService = new DoctorService({
                doctor_code: ds.doctor_code,
                service_name: ds.service_name,
            });

            await doctorService.save();
        } catch (error) {
            console.error('Lỗi khi thêm dữ liệu DoctorService:', error);
        }
    }

    console.log('Dữ liệu mẫu đã được thêm/cập nhật thành công');
    process.exit();
}).catch((err) => {
    console.error('Lỗi kết nối MongoDB:', err);
    process.exit(1);
});
