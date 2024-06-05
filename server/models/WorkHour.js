const mongoose = require('mongoose');

const WorkHourSchema = new mongoose.Schema({
    
    title: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    typeShiftWork: { type: String, required: true },
});

module.exports = mongoose.model('WorkHour', WorkHourSchema);
