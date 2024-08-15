const express = require('express');
const router = express.Router();
const {createEducation,
    getAllEducation,
    getEducationById,
    updateEducation,
    deleteEducation
} = require('../controllers/educationController');

// Don't allow anyone to edit the document. only authorized user can
const authenticateUser = require('../middleware/authentication')

// Get all education entries
router.get('/', getAllEducation);

// Get a single education entry by ID
router.get('/:id', getEducationById);

// Create a new education entry
router.post('/', authenticateUser, createEducation);

// Update an education entry by ID
router.put('/:id', authenticateUser, updateEducation);

// Delete an education entry by ID
router.delete('/:id', authenticateUser, deleteEducation);

module.exports = router;
