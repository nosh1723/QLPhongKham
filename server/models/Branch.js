const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: {type: String, require: true },
    code: { type: String, unique: true, required: true }
});

const Branch = mongoose.model('Branch', branchSchema);

module.exports = Branch;
