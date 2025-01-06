const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validateRole = require('../middlewares/validateRole');


//gets
router.route('/').get(userController.getAllUsers);
router.route('/admin-only').get(validateRole(['Admin']));
router.route('/golf-course-pro').get(validateRole(['Admin', 'Golf Course Pro']));


//posts
router.route('/sign-up').post(userController.createUser);
router.route('/log-in').post(userController.login);

module.exports = router;