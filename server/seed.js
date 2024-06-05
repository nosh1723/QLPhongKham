const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Doctor = require('./models/Doctor');
const Service = require('./models/Service');
const Schedule = require('./models/Schedule');
const WorkHour = require('./models/Workhour');
const users = require('./data/users.json');
const doctors = require('./data/doctors.json');
const services = require('./data/services.json');
const schedules = require('./data/schedules.json');
const workHours = require('./data/work_hours.json');
const branch = require('./data/branches.json');

// Tải các biến môi trường từ tệp .env
dotenv.config();

// Kết nối tới MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    console.log('Đã kết nối đến MongoDB');

    // Thêm người dùng
    for (const user of users) {
        const existingUser = await User.findOne({ phone_number: user.phone_number });
        if (!existingUser) {
            await User.create(user);
        } else {
            await User.updateOne({ phone_number: user.phone_number }, user);
        }
    }

    // Thêm bác sĩ
    for (const doctor of doctors) {
        const existingDoctor = await Doctor.findOne({ code: doctor.code });
        if (!existingDoctor) {
            await Doctor.create(doctor);
        } else {
            await Doctor.updateOne({ code: doctor.code }, doctor);
        }
    }

    // Thêm dịch vụ
    for (const service of services) {
        const existingService = await Service.findOne({ code: service.code });
        if (!existingService) {
            await Service.create(service);
        } else {
            await Service.updateOne({ code: service.code }, service);
        }
    }

    // Thêm lịch làm việc
    for (const schedule of schedules) {
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
          console.error(error);
        }
      }

    console.log('Dữ liệu mẫu đã được thêm/cập nhật');
    process.exit();
}).catch((err) => {
    console.error(err);
    process.exit(1);
});
