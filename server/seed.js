const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const users = require('./data/users.json');

// Tải các biến môi trường từ tệp .env
dotenv.config();

// Kết nối tới MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    console.log('Đã kết nối đến MongoDB');

    // Xóa tất cả người dùng hiện tại
    await User.deleteMany();

    // Thêm người dùng từ users.json
    await User.insertMany(users);

    console.log('Đã thêm dữ liệu mẫu');
    process.exit();
}).catch((err) => {
    console.error(err);
    process.exit(1);
});
