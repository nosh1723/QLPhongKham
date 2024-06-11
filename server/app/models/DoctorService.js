const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorServiceSchema = new Schema({
    doctor_code: { type: String, required: true },
    service: { type: Schema.Types.ObjectId, ref: 'Service', required: true }
});

module.exports = mongoose.model('DoctorService', DoctorServiceSchema);
