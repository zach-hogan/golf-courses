const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    shortenedName: { type: String, required: false },
    priceFor9: {type: Number, required: true },
    priceFor18 : {type: Number, required: true },
    cartPrice : {type: Number, required: false },
    image: {type: String, required: false },
    address: { type: String, required: false },
    userCreator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, {collection: 'golf_courses'});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
