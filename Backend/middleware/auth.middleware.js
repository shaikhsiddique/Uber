const { userModel } = require('../models/userModel');
const {captainModel} = require('../models/captianModel')
const { compareToken } = require('../utils/jwt');
const {isTokenBlacklisted } = require('../services/user.service');

module.exports.authUser = async (req, res, next) => {
    try {
        let token = null;

        if (req.cookies && req.cookies.token) {
            token = req.cookies.token;
        } else if (req.headers.authorization) {
            const parts = req.headers.authorization.split(' ');
            if (parts.length === 2 && parts[0] === 'Bearer') {
                token = parts[1];
            }
        }

        if (!token) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }
        if (!decoded) {
            return res.status(401).json({ message: 'Invalid or expired token.' });
        }

        if (await isTokenBlacklisted(token)) {
            return res.status(401).json({ message: 'Access denied. Token is blacklisted.' });
        }

        const user = await userModel.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: 'User not found. Authorization denied.' });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error.' });
   }
};
module.exports.authCaptain = async (req, res, next) => {
    try {
        let token = null;

        if (req.cookies && req.cookies.token) {
            token = req.cookies.token;
        } else if (req.headers.authorization) {
            const parts = req.headers.authorization.split(' ');
            if (parts.length === 2 && parts[0] === 'Bearer') {
                token = parts[1];
            }
        }

        if (!token) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }

        const decoded = await compareToken(token);
        if (!decoded) {
            return res.status(401).json({ message: 'Invalid or expired token.' });
        }

        if (await isTokenBlacklisted(token)) {
            return res.status(401).json({ message: 'Access denied. Token is blacklisted.' });
        }

        const captain = await captainModel.findById(decoded.id);
        if (!captain) {
            return res.status(401).json({ message: 'Captain not found. Authorization denied.' });
        }

        req.captain = captain;
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(500).json({ message: 'Internal server error.' });

    };
};