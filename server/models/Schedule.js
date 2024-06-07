const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    
    //doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    doctor_code: { type: String, required: true, ref: 'Doctor' },
    date: { type: Date, required: true },
    time: { type: Date, required: true },
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
