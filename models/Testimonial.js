const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
    name: { type: String, required: true },
    relationship: { type: String, required: true },
    content: { type: String, required: true },
    profilePicture: { type: String },
});

module.exports = mongoose.model('Testimonial', TestimonialSchema);
