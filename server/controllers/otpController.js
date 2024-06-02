const speakeasy = require('speakeasy');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Chuyển đổi định dạng số điện thoại
function formatPhoneNumber(phoneNumber) {
    if (phoneNumber.startsWith('0')) {
        return '+84' + phoneNumber.slice(1);
    }
    return phoneNumber;
}

// Tạo OTP và lưu trữ bí mật trong cơ sở dữ liệu người dùng
exports.generateOTP = async (req, res) => {
    const { phoneNumber } = req.body;
    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

    try {
        const user = await User.findOne({ phoneNumber: formattedPhoneNumber });

        if (!user) {
            return res.status(404).json({ message: 'Người dùng không tồn tại' });
        }

        const secret = speakeasy.generateSecret().base32;

        // Tạo OTP
        const otp = speakeasy.totp({
            secret: secret,
            encoding: 'base32'
        });

        // Lưu trữ bí mật trong cơ sở dữ liệu người dùng
        user.otpSecret = secret;
        await user.save();

        // Gửi OTP cho người dùng (giả định)
        console.log(`OTP cho ${formattedPhoneNumber} là: ${otp}`);

        res.json({ message: 'OTP đã được tạo và gửi tới số điện thoại của bạn' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Xác minh OTP do người dùng cung cấp
exports.verifyOTP = async (req, res) => {
    const { phoneNumber, otp } = req.body;
    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

    try {
        const user = await User.findOne({ phoneNumber: formattedPhoneNumber });

        if (!user) {
            return res.status(404).json({ message: 'Người dùng không tồn tại' });
        }

        const verified = speakeasy.totp.verify({
            secret: user.otpSecret,
            encoding: 'base32',
            token: otp,
            window: 1
        });

        if (!verified) {
            return res.status(400).json({ message: 'OTP không hợp lệ hoặc đã hết hạn' });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: 'Xác minh OTP thành công', token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
