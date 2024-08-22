const express = require('express');
const router = express.Router();
const {createTestimonial,
    getAllTestimonials,
    getTestimonialById,
    updateTestimonial,
    deleteTestimonial
} = require('../controllers/testimonialsController');

// Don't allow anyone to edit the document. only authorized user can
const authenticateUser = require('../middleware/authentication')

// Get all testimonials
router.get('/', getAllTestimonials);

// Get a single testimonial by ID
router.get('/:id', getTestimonialById);

// Create a new testimonial
router.post('/', authenticateUser, createTestimonial);

// Update a testimonial by ID
router.put('/:id', authenticateUser, updateTestimonial);

// Delete a testimonial by ID
router.delete('/:id', authenticateUser, deleteTestimonial);

module.exports = router;
