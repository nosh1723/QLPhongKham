const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
exports.register = async (req, res) => {
    const { phoneNumber, password, role } = req.body;

    if (phoneNumber.length < 7 || phoneNumber.length > 11) {
        return res.status(400).json({ message: 'Số điện thoại không hợp lệ.', status: 0 });
    }

    try {
        const existingUser = await User.findOne({ phoneNumber });
        if (existingUser) {
            return res.status(400).json({ message: 'Số điện thoại đã tồn tại.', status: 0 });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // Hash password
        const user = new User({ phoneNumber, password: hashedPassword, role });
        await user.save();
        res.status(201).json({ message: 'Đăng ký người dùng thành công.', status: 1 });
    } catch (err) {
        res.status(400).json({ error: err.message, status: 0 });
    }
};

// Đăng nhập người dùng
exports.login = async (req, res) => {
    const { phoneNumber, password } = req.body;

    try {
        const user = await User.findOne({ phoneNumber });
        if (!user) return res.status(404).json({ message: 'Người dùng không tồn tại', status: 0 });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Thông tin đăng nhập không hợp lệ', status: 0 });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, status: 1 });
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
