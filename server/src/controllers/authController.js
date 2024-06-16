require('dotenv').config();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const asyncHandle = require('express-async-handler');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Sử dụng `true` cho cổng 465, `false` cho các cổng khác
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    },
});

// Hàm gửi email xác thực
exports.handleSend = async (val, email) => {
    try {
        await transporter.sendMail({
            from: 'Support', // Địa chỉ người gửi
            to: `${email}`, // Địa chỉ người nhận
            subject: "Mã xác thực", // Tiêu đề email
            text: "Hello world?", // Nội dung dạng văn bản
            html: `
                <h1>Chào bạn</h1>
                <p>Bạn đang hoàn thành đăng ký, mã xác thực của bạn là <b>${val}</b></p>
            `, // Nội dung dạng HTML
        });
        return 200;
    } catch (error) {
        console.log('Failed to send');
        return 400;
    }
};

// Hàm xác thực email
exports.verification = async (req, res) => {
    try {
        const { email } = req.body;
        const verificationCode = Math.round(1000 + Math.random() * 9000);

        const status = await this.handleSend(verificationCode, email);

        if (status === 200) {
            res.status(200).json({
                message: "Send verification successfully",
                data: {
                    code: verificationCode + ""
                }
            });
        } else {
            res.status(400).json({
                message: "Bad request!"
            });
        }

    } catch (error) {
        console.log('verification failed');
        res.status(400).json({
            message: "Bad request!"
        });
    }
};

// Đăng ký người dùng mới
exports.register = asyncHandle(async (req, res) => {
    const { email, password, role } = req.body;
    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(401).json({ error: "email đã tồn tại!", status: 0 });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // Mã hóa mật khẩu
        const user = new User({ email, password: hashedPassword, role });
        await user.save();
        res.status(201).json({ email: user.email, message: 'Đăng ký người dùng thành công.', status: 1, role });
    } catch (err) {
        res.status(400).json({ error: err.message, status: 0 });
    }
});

// Đăng nhập người dùng
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(200).json({ message: 'Người dùng không tồn tại', status: 0 });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Thông tin đăng nhập không chính xác', status: 0 });

        const expiresIn = '7d'; //Nếu cần thay đổi thời gian hết hạn thì sửa đây 
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn }
        );

        user.token = token;
        await user.save();

        // Ngày token sẽ hết hạn ( Sau 1 tuần sẽ hết hạn)
        const tokenExpiryDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

        res.json({
            token,
            status: 1,
            user: {
                email: user.email,
                token: user.token,
                tokenExpiryDate: tokenExpiryDate.toISOString(), // Định dạng ISO của thời gian hết hạn
            }
        });
    } catch (err) {
        res.status(500).json({ error: err.message, status: 0 });
    }
};

// Lấy thông tin người dùng
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message, status: 0 });
    }
};
