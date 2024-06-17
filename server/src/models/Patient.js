const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    gender: { 
        type: String, 
        enum: ['M', 'F'],
        required: true 
    },
    health_insurance_code: { type: String },
    health_insurance_start_date: { type: Date },
    health_insurance_end_date: { type: Date },
    payment_type: { 
        type: String, 
        enum: ['Tiền mặt', 'Chuyển khoản'],
    },
    birth_date: { type: Date, required: true },
    address: { type: String },
    ethnic: { type: String },
    email: { type: String, required: true },
    phone_number: { type: String, require: true },
    branch_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Branch' },
},
{
    timestamps: true
});

module.exports = mongoose.model('Patient', PatientSchema);
