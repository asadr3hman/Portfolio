const express = require('express');
const router = express.Router();
const {
    getAllProjects,
    createProject,
    getProjectById,
    updateProject,
    deleteProject
} = require('../controllers/projectsController');

const authenticateUser = require('../middleware/authentication')

router.get('/', getAllProjects);
router.get('/:id',getProjectById)

router.post('/', authenticateUser, createProject);
router.patch('/:id',authenticateUser,updateProject)
router.delete('/:id',authenticateUser,deleteProject)

module.exports = [router];
