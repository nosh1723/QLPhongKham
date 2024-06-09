const mongoose = require('mongoose');

const DoctorServiceSchema = new mongoose.Schema({
    //doctor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    doctor_code: { type: String, required: true, ref: 'Doctor' },
    service_name: { type: String, require: true, ref: 'Service' },
   //service_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Service' },
}, {
    timestamps: true
});

module.exports = mongoose.model('DoctorService', DoctorServiceSchema);
