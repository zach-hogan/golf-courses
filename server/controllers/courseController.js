const Course = require('../models/Course');

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createCourse = async (req, res) => {
    try {
        const { name, price, image } = req.body;
        const newCourse = new Course({ name, price, image });
        await newCourse.save();
        res.json(newCourse);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
