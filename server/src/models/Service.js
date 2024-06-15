const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category_code: { type: String, required: true, ref: 'ServiceCategory' }  // Mã danh mục dịch vụ
}, {
    timestamps: true
});

module.exports = mongoose.model('Service', ServiceSchema);