const express = require('express');
const router = express.Router();
const {createExperience,
    getAllExperience,
    getExperienceById,
    updateExperience,
    deleteExperience
} = require('../controllers/experienceController');

// Don't allow anyone to edit the document. only authorized user can
const authenticateUser = require('../middleware/authentication')

// Get all experience entries
router.get('/', getAllExperience);

// Get a single experience entry by ID
router.get('/:id', getExperienceById);

// Create a new experience entry
router.post('/', authenticateUser, createExperience);

// Update an experience entry by ID
router.put('/:id', authenticateUser, updateExperience);

// Delete an experience entry by ID
router.delete('/:id', authenticateUser, deleteExperience);

module.exports = router;
