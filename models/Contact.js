const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    email: { type: String, required: true },
    phone: { type: String },
    address: { type: String }
});

module.exports = mongoose.model('Contact', ContactSchema);
