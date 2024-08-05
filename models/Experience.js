const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    company: { type: String, required: true },
    position: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    responsibilities: { type: [String] }
});

module.exports = mongoose.model('Experience', ExperienceSchema);
