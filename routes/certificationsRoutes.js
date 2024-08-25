const express = require('express');
const router = express.Router();
const {createCertification,
    getAllCertifications,
    getCertificationById,
    updateCertification,
    deleteCertification} = require('../controllers/certificationsController');


// Don't allow anyone to edit the document. only authorized user can
const authenticateUser = require('../middleware/authentication')

// Get all certifications
router.get('/', getAllCertifications);

// Get a single certification by ID
router.get('/:id', authenticateUser, getCertificationById);

// Create a new certification
router.post('/', authenticateUser, createCertification);

// Update a certification by ID
router.put('/:id', authenticateUser, updateCertification);

// Delete a certification by ID
router.delete('/:id', authenticateUser, deleteCertification);

module.exports = router;
