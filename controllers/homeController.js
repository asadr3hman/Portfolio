const User = require('../models/User');
const Project = require('../models/Project');
const Skill = require('../models/Skill');
const Contact = require('../models/Contact');
const Accomplishment = require('../models/Accomplishment');
const Education = require('../models/Education');
const Experience = require('../models/Experience');
const Testimonial = require('../models/Testimonial');
const Certification = require('../models/Certification');
// const Language = require('../models/Language');
// const Blog = require('../models/Blog');

exports.getHomeData = async (req, res) => {
    try {
        // Fetch user basic info
        const user = await User.findOne();
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Fetch other data
        const recentProjects = await Project.find().sort({ createdAt: -1 }).limit(5);
        const skills = await Skill.find();
        const contact = await Contact.findOne();
        const accomplishments = await Accomplishment.find();
        const education = await Education.find();
        const experience = await Experience.find();
        const testimonials = await Testimonial.find();
        const certifications = await Certification.find();

        // Create a response object with aggregated data
        const response = {
            user,
            recentProjects,
            skills,
            contact,
            accomplishments,
            education,
            experience,
            testimonials,
            certifications
        };

        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
