const mongoose = require('mongoose');

const DoctorServiceSchema = new mongoose.Schema({
    doctor_code: { type: String, required: true, ref: 'Doctor' },
    service: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Service' },
}, {
    timestamps: true
});

module.exports = mongoose.model('DoctorService', DoctorServiceSchema);
