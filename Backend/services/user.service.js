const { userModel } = require('../models/userModel');
const blacklistToken = require('../models/blacklistToken');

module.exports.createUser = async (fullname, email, hashedPassword) => {
    try {
        const user = await userModel.create({
            fullname,
            email,
            password: hashedPassword,
        });
        return user;
    } catch (err) {
        throw new Error('Error creating user: ' + err.message);
    }
};
module.exports.findUser = async (email) => {
    try {
        const user = await userModel.findOne({ email });
        if (user) {
            return user;
        } else {
            return null;  
        }
    } catch (err) {
        throw new Error('Error finding user: ' + err.message);
    }
};

module.exports.isTokenBlacklisted = async (token) => {
    if (!token) {
        throw new Error("Token is required");
    }
    try {
        const result = await blacklistToken.findOne({ token });
        return result !== null;  
    } catch (error) {
        console.error("Error checking blacklisted token:", error);
        throw new Error("Database error occurred");
    }
};
