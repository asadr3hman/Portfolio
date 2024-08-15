const Accomplishment = require('../models/Accomplishment');

// Create a new accomplishment
exports.createAccomplishment = async (req, res) => {
    try {
        const newAccomplishment = new Accomplishment(req.body);
        const savedAccomplishment = await newAccomplishment.save();
        res.status(201).json(savedAccomplishment);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Get all accomplishments
exports.getAllAccomplishments = async (req, res) => {
    try {
        const accomplishments = await Accomplishment.find();
        res.status(200).json(accomplishments);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Get a single accomplishment by ID
exports.getAccomplishmentById = async (req, res) => {
    try {
        const accomplishment = await Accomplishment.findById(req.params.id);
        if (!accomplishment) {
            return res.status(404).json({ message: 'Accomplishment not found' });
        }
        res.status(200).json(accomplishment);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Update an accomplishment by ID
exports.updateAccomplishment = async (req, res) => {
    try {
        const updatedAccomplishment = await Accomplishment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAccomplishment) {
            return res.status(404).json({ message: 'Accomplishment not found' });
        }
        res.status(200).json(updatedAccomplishment);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Delete an accomplishment by ID
exports.deleteAccomplishment = async (req, res) => {
    try {
        const deletedAccomplishment = await Accomplishment.findByIdAndDelete(req.params.id);
        if (!deletedAccomplishment) {
            return res.status(404).json({ message: 'Accomplishment not found' });
        }
        res.status(200).json({ message: 'Accomplishment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
