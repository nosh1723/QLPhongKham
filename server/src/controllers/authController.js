require('dotenv').config()
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer')
const asyncHandle = require('express-async-handler')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    },
});

exports.handleSend = async (val, email) => {
    try {
        await transporter.sendMail({
            from: 'Support', // sender address
            to: `${email}`, // list of receivers
            subject: "Mã xác thực", // Subject line
            text: "Hello world?", // plain text body
            html: `
                <h1>Chào bạn</h1>
                <p>Bạn đang Hoàn thành đăng ký, Mã xác thực của bạn là <b>${val}</b></p>
            `, // html body
          });
        return 200
    } catch (error) {
        console.log('Failed to send');
    }
}

exports.verification = async(req, res) => {
    try {
        const {email} = req.body
        const verificationCode = Math.round(1000 + Math.random() * 9000)

        const status = await this.handleSend(verificationCode, email)

        if(status) {
            res.status(200).json({
                message: "Send verification successfully",
                data: {
                    code: verificationCode + ""
                }
            })
        }else {
            res.status(400).json({
                message: "Bad request!"
            })
        }

    } catch (error) {
        console.log('verification failed');
        res.status(400).json({
            message: "Bad request!"
        })
    }
}

// Kiểm tra tính hợp lệ của số điện thoại
exports.checkPhoneNumber = async (req, res) => {
    const { phoneNumber } = req.body;

    if (phoneNumber.length < 7 || phoneNumber.length > 11) {
        return res.status(400).json({ message: 'Số điện thoại không hợp lệ.', status: 0 });
    }

    try {
        const existingUser = await User.findOne({ phoneNumber });
        if (existingUser) {
            return res.status(400).json({ message: 'Số điện thoại đã tồn tại.', status: 0 });
        }
        res.status(200).json({ message: 'Số điện thoại hợp lệ.', status: 1 });
    } catch (err) {
        res.status(500).json({ error: err.message, status: 0 });
    }
};


// Đăng ký người dùng mới
exports.register = asyncHandle(async (req, res) => {
    const { email, password, role } = req.body;
    try {
        const existingUser = await User.findOne({email})

        if(existingUser) {
            return res.status(401).json({ error: "email is exist!", status: 0 });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // Hash password
        const user = new User({ email, password: hashedPassword, role });
        await user.save();
        res.status(201).json({ email: user.email, message: 'Đăng ký người dùng thành công.', status: 1, role });
    } catch (err) {
        res.status(400).json({ error: err.message, status: 0 });
    }
})

// Đăng nhập người dùng
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(200).json({ message: 'Người dùng không tồn tại', status: 0 });

        const isMatch = await bcrypt.compare(password, user.password);
        // console.log('isMatch: ',isMatch, 'password: ', password);
        // if (!isMatch) return res.status(200).json({ message: 'Thông tin đăng nhập không hợp lệ', status: 0 });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '4d' });
        res.status(200).json({ 
            token, 
            status: 1, 
            user: {
                email: user.email
            },
            message: "Đăng nhập thành công!"
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
