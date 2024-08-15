const express = require('express');
const router = express.Router();
const {createAccomplishment,
    getAllAccomplishments,
    getAccomplishmentById,
    updateAccomplishment,
    deleteAccomplishment
} = require('../controllers/accomplishmentsController');

// Don't allow anyone to edit the document. only authorized user can
const authenticateUser = require('../middleware/authentication')


// Get all accomplishments
router.get('/', getAllAccomplishments);

// Get a single accomplishment by ID
router.get('/:id', getAccomplishmentById);

// Create a new accomplishment
router.post('/', authenticateUser, createAccomplishment);

// Update an accomplishment by ID
router.put('/:id',authenticateUser, updateAccomplishment);

// Delete an accomplishment by ID
router.delete('/:id',authenticateUser, deleteAccomplishment);

module.exports = router;
