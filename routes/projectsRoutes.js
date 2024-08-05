const express = require('express');
const Prouter = express.Router();
const router = express.Router();
const projectsController = require('../controllers/projectsController');

Prouter.get('/', projectsController.getAllProjects);
router.post('/', projectsController.createProject);

// Other CRUD routes

module.exports = [Prouter,router];
