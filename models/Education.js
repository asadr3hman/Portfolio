const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    fieldOfStudy: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    grade: { type: String }
});

module.exports = mongoose.model('Education', EducationSchema);