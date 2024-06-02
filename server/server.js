const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

// Tải các biến môi trường từ tệp .env
dotenv.config();

const app = express();

// Middleware để phân tích cú pháp JSON
app.use(express.json());

// Định tuyến
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

// Kết nối tới MongoDB bằng chuỗi kết nối từ .env
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Đã kết nối đến MongoDB');
    app.listen(PORT, () => {
        console.log(`Máy chủ đang chạy trên cổng ${PORT}`);
    });
}).catch((err) => {
    console.error(err);
});
