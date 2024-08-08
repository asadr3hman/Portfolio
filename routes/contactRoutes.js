const express = require('express');
const router = express.Router();
const { 
    createContact,
    getAllContacts,
    getContactById,
    updateContact,
    deleteContact
} = require('../controllers/contactController');

// Don't allow anyone to edit the document. only authorized user can
const authenticateUser = require('../middleware/authentication')

// Get all contacts
router.get('/', getAllContacts);

// Get a single contact by ID
router.get('/:id', getContactById);


// Create a new contact
router.post('/', authenticateUser, createContact);

// Update a contact by ID
router.put('/:id', authenticateUser, updateContact);

// Delete a contact by ID
router.delete('/:id', authenticateUser, deleteContact);

module.exports = router;
