const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    //id: {type: String,require: true, unique: true},
    name: { type: String, required: true },
    birth_date: { type: Date, required: true },
    gender: { type: String, required: true },
    year_of_experience: { type: Number, required: true },
    experience: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    description: { type: String },
    avatar: { type: String },
    branch_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Branch', },
});

module.exports = mongoose.model('Doctor', DoctorSchema);
