const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String }
});

const ServiceCategorySchema = new Schema({
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    services: [ServiceSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('ServiceCategory', ServiceCategorySchema);
