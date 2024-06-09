const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Chuyển đổi định dạng số điện thoại
function formatPhoneNumber(phoneNumber) {
    if (phoneNumber.startsWith('0')) {
        return '+84' + phoneNumber.slice(1);
    }
    return phoneNumber;
}

exports.register = async (req, res) => {
    const { phoneNumber, password, role } = req.body;
    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

    if (phoneNumber.length < 7 || phoneNumber.length > 11) {
        return res.status(400).json({ message: 'Số điện thoại không hợp lệ.' });
    }

    try {
        const existingUser = await User.findOne({ phoneNumber: formattedPhoneNumber });
        if (existingUser) {
            return res.status(400).json({ message: 'Số điện thoại đã tồn tại.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password before saving
        const user = new User({ phoneNumber: formattedPhoneNumber, password: hashedPassword, role });
        await user.save();
        res.status(201).json({ message: 'Đăng ký người dùng thành công' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    const { phoneNumber, password } = req.body;
    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

    try {
        const user = await User.findOne({ phoneNumber: formattedPhoneNumber });
        if (!user) return res.status(404).json({ message: 'Người dùng không tồn tại' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Thông tin đăng nhập không hợp lệ' });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
