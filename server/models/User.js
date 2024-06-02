const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Định nghĩa schema người dùng
const UserSchema = new mongoose.Schema({
    phoneNumber: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin', 'doctor'], required: true },
    otpSecret: { type: String }
});

// Mã hóa mật khẩu trước khi lưu
UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
