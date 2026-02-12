const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
    let token;

    // Check if the request has a token in the headers
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get user from the token (but leave out the password)
            req.user = await User.findById(decoded.id).select('-password');

            next(); // Move to the next step (Bilal's logic)
        } catch (error) {
            res.status(401).json({ success: false, message: 'Not authorized' });
        }
    }

    if (!token) {
        res.status(401).json({ success: false, message: 'No token, access denied' });
    }
};