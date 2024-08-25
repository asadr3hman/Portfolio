const Certification = require('../models/Certification');

// Create a new certification
exports.createCertification = async (req, res) => {
    try {
        const newCertification = new Certification(req.body);
        const savedCertification = await newCertification.save();
        res.status(201).json(savedCertification);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Get all certifications
exports.getAllCertifications = async (req, res) => {
    try {
        const certifications = await Certification.find();
        res.status(200).json(certifications);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Get a single certification by ID
exports.getCertificationById = async (req, res) => {
    try {
        const certification = await Certification.findById(req.params.id);
        if (!certification) {
            return res.status(404).json({ message: 'Certification not found' });
        }
        res.status(200).json(certification);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Update a certification by ID
exports.updateCertification = async (req, res) => {
    try {
        const updatedCertification = await Certification.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCertification) {
            return res.status(404).json({ message: 'Certification not found' });
        }
        res.status(200).json(updatedCertification);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Delete a certification by ID
exports.deleteCertification = async (req, res) => {
    try {
        const deletedCertification = await Certification.findByIdAndDelete(req.params.id);
        if (!deletedCertification) {
            return res.status(404).json({ message: 'Certification not found' });
        }
        res.status(200).json({ message: 'Certification deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
