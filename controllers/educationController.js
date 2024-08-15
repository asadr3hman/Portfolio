const Education = require('../models/Education');

// Create a new education entry
exports.createEducation = async (req, res) => {
    try {
        const newEducation = new Education(req.body);
        const savedEducation = await newEducation.save();
        res.status(201).json(savedEducation);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Get all education entries
exports.getAllEducation = async (req, res) => {
    try {
        const educationEntries = await Education.find();
        res.status(200).json(educationEntries);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Get a single education entry by ID
exports.getEducationById = async (req, res) => {
    try {
        const educationEntry = await Education.findById(req.params.id);
        if (!educationEntry) {
            return res.status(404).json({ message: 'Education entry not found' });
        }
        res.status(200).json(educationEntry);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Update an education entry by ID
exports.updateEducation = async (req, res) => {
    try {
        const updatedEducation = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEducation) {
            return res.status(404).json({ message: 'Education entry not found' });
        }
        res.status(200).json(updatedEducation);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Delete an education entry by ID
exports.deleteEducation = async (req, res) => {
    try {
        const deletedEducation = await Education.findByIdAndDelete(req.params.id);
        if (!deletedEducation) {
            return res.status(404).json({ message: 'Education entry not found' });
        }
        res.status(200).json({ message: 'Education entry deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
