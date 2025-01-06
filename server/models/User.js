const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema( {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
})

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

// Method to compare passwords
userSchema.methods.comparePassword = function (inputPassword) {
    return bcrypt.compare(inputPassword, this.password);
};

const User = mongoose.model('Course', userScheme);
module.exports = User;