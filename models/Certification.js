const mongoose = require('mongoose');

const CertificationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    issuingOrganization: { type: String, required: true },
    issueDate: { type: Date, required: true },
    expirationDate: { type: Date },
    credentialId: { type: String },
    credentialUrl: { type: String }
});

module.exports = mongoose.model('Certification', CertificationSchema);
