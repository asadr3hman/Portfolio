const Project = require('../models/Project');

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.createProject = async (req, res) => {
    try {
        const projects = await Project.create({...req.body});
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: `Server Error${error}` });
    }
};

// Other CRUD operations
