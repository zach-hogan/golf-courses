const User = require('../models/User'); // Import your User model

// Middleware to check if the user's role matches any of the required roles
const validateRole = (roles) => {
    return async (req, res, next) => {
        try {
            const userId = req.session.userId; // Assuming the user's ID is stored in the session

            if (!userId) {
                return res.status(401).json({ message: 'Unauthorized: Please log in.' });
            }

            // Fetch the user's role from the database
            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found.' });
            }

            if (!roles.includes(user.role)) {
                return res.status(403).json({ message: 'Access denied: Insufficient permissions.' });
            }

            // User has the required role, proceed
            next();
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error.' });
        }
    };
};

module.exports = validateRole;
