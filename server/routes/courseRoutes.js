const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

//gets
router.route('/').get(courseController.getAllCourses);

//posts
router.route('/').post(courseController.createCourse);

module.exports = router;
