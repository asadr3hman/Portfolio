const Experience = require('../models/Experience');

// Create a new experience entry
exports.createExperience = async (req, res) => {
    try {
        const newExperience = new Experience(req.body);
        const savedExperience = await newExperience.save();
        res.status(201).json(savedExperience);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Get all experience entries
exports.getAllExperience = async (req, res) => {
    try {
        const experiences = await Experience.find();
        res.status(200).json(experiences);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Get a single experience entry by ID
exports.getExperienceById = async (req, res) => {
    try {
        const experience = await Experience.findById(req.params.id);
        if (!experience) {
            return res.status(404).json({ message: 'Experience entry not found' });
        }
        res.status(200).json(experience);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Update an experience entry by ID
exports.updateExperience = async (req, res) => {
    try {
        const updatedExperience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedExperience) {
            return res.status(404).json({ message: 'Experience entry not found' });
        }
        res.status(200).json(updatedExperience);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Delete an experience entry by ID
exports.deleteExperience = async (req, res) => {
    try {
        const deletedExperience = await Experience.findByIdAndDelete(req.params.id);
        if (!deletedExperience) {
            return res.status(404).json({ message: 'Experience entry not found' });
        }
        res.status(200).json({ message: 'Experience entry deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
