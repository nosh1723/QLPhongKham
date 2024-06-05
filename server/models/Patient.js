const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    health_insurance_code: { type: String },
    health_insurance_start_date: { type: Date },
    health_insurance_end_date: { type: Date },
    payment_type: { type: String },
    birth_date: { type: Date, required: true },
    address: { type: String },
    ethnic: { type: String },
    phone_number: { type: String, required: true },
    branch_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Branch' },
});

module.exports = mongoose.model('Patient', PatientSchema);
