const { captainModel } = require('../models/captianModel'); 
const blacklistToken = require('../models/blacklistToken');

module.exports.createCaptain = async (fullname, email, hashedPassword, vehicle) => {
    try {
        const captain = await captainModel.create({
            fullname,
            email,
            password: hashedPassword,
            vehicle,
        });
        return captain;
    } catch (err) {
        throw new Error('Error creating captain: ' + err.message);
    }
};

module.exports.findCaptain = async (email) => {
    try {
        const captain = await captainModel.findOne({ email });
        return captain || null; // Return null if no captain is found
    } catch (err) {
        throw new Error('Error finding captain: ' + err.message);
    }
};

module.exports.isTokenBlacklisted = async (token) => {
    if (!token) {
        throw new Error("Token is required");
    }
    try {
        const result = await blacklistToken.findOne({ token });
        return result !== null; // Return true if token is blacklisted
    } catch (error) {
        console.error("Error checking blacklisted token:", error);
        throw new Error("Database error occurred");
    }
};
