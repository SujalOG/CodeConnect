const Project = require('../models/project.model.js');
const { body, validationResult } = require('express-validator');

exports.saveProject = async (req, res) => {
    // Validate input
    await body('userId').isString().notEmpty().run(req);
    await body('name').isString().notEmpty().run(req);
    await body('files').isArray().notEmpty().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, name, files } = req.body;
    const newProject = new Project({ userId, name, files });

    try {
        const savedProject = await newProject.save();
        return res.status(201).json({
            message: 'Project saved successfully.',
            project: savedProject // Return the created project
        });
    } catch (err) {
        console.log('Project saving error: ', err);
        return res.status(500).json({
            error: 'Project saving error!'
        });
    }
}

exports.getAllProjects = async (req, res) => {
    const userId = req.params.userId;

    // Validate userId
    if (!userId) {
        return res.status(400).json({ error: 'User ID is required.' });
    }

    try {
        const allProjectsForUser = await Project.find({ userId });
        return res.status(200).json(allProjectsForUser);
    } catch (err) {
        console.log('FETCHING ALL PROJECTS FOR A USER ERROR: ', err);
        return res.status(500).json({
            error: 'Error fetching projects!'
        });
    }
}


exports.deleteProject = async (req, res) => {
    const projectId = req.params.projectId;
    const project = await Project.findById(projectId);
    if (!project) {
        return res.status(404).json({
            error: "This project doesn't exists."
        });
    }
    await Project.findByIdAndDelete(projectId)
        .then(() => {
            return res.status(200).json({
                message: "Project is deleted."
            });
        }).catch((err) => {
            console.log('DLETING A PROJECT OF USER ERROR: ', err);
            return res.status(500).json({
                error: 'Error deleting project!'
            });
        })
}