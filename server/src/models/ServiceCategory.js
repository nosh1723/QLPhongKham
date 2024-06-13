/*
const mongoose = require('mongoose');
const ServiceSchema = require('./Service'); 


const ServiceCategorySchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    services: [ServiceSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('ServiceCategory', ServiceCategorySchema);

*/