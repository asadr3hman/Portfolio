const Testimonial = require('../models/Testimonial');

// Create a new testimonial
exports.createTestimonial = async (req, res) => {
    try {
        const newTestimonial = new Testimonial(req.body);
        const savedTestimonial = await newTestimonial.save();
        res.status(201).json(savedTestimonial);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Get all testimonials
exports.getAllTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.status(200).json(testimonials);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Get a single testimonial by ID
exports.getTestimonialById = async (req, res) => {
    try {
        const testimonial = await Testimonial.findById(req.params.id);
        if (!testimonial) {
            return res.status(404).json({ message: 'Testimonial not found' });
        }
        res.status(200).json(testimonial);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Update a testimonial by ID
exports.updateTestimonial = async (req, res) => {
    try {
        const updatedTestimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTestimonial) {
            return res.status(404).json({ message: 'Testimonial not found' });
        }
        res.status(200).json(updatedTestimonial);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Delete a testimonial by ID
exports.deleteTestimonial = async (req, res) => {
    try {
        const deletedTestimonial = await Testimonial.findByIdAndDelete(req.params.id);
        if (!deletedTestimonial) {
            return res.status(404).json({ message: 'Testimonial not found' });
        }
        res.status(200).json({ message: 'Testimonial deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
