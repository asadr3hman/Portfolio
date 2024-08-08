const express = require('express');
const router = express.Router();
const {
    createSkill,
    getAllSkills,
    getSkillById,
    updateSkill,
    deleteSkill
} = require('../controllers/skillsController');

// Don't allow anyone to edit the document. only authorized user can
const authenticateUser = require('../middleware/authentication')

// Get all skills
router.get('/', getAllSkills);

// Get a single skill by ID
router.get('/:id', getSkillById);

// Create a new skill
router.post('/',authenticateUser, createSkill);

// Update a skill by ID
router.patch('/:id', authenticateUser, updateSkill);

// Delete a skill by ID
router.delete('/:id', authenticateUser, deleteSkill);

module.exports = router;
