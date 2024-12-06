const  { captainModel , validateCaptain } = require('../models/captianModel');
const { createCaptain, findCaptain } = require('../services/captian.service');
const { hashPassword, comparePassword } = require('../utils/hash-password');
const blacklistToken  = require('../models/blacklistToken');
const { createToken } = require('../utils/jwt');

module.exports.registerCaptian = async (req, res,next) => {
    try {
        const { error } = validateCaptain(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const { fullname, email, password, vehicle } = req.body;

        const existingCaptain = await findCaptain(email);
        if (existingCaptain) {
            return res.status(400).json({ message: "Captain with this email already exists." });
        }

        const hashedPassword = await hashPassword(password);

        const captain = await createCaptain(fullname, email, hashedPassword, vehicle);

        const token = await createToken({ id: captain._id, email: captain.email });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
        });

        return res.status(201).json({ message: "Captain registered successfully.", captain });
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

module.exports.loginCaptian = async (req, res,next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        const captain = await findCaptain(email);
        if (!captain) {
            return res.status(404).json({ message: "Captain not found." });
        }

        const isPasswordValid = await comparePassword(password, captain.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials." });
        }

        const token = await  createToken({ id: captain._id, email: captain.email });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
        });

        return res.status(200).json({ message: "Login successful.", captain,token });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};


module.exports.logoutCaptian = async (req, res, next) => {
    const token = req.cookies.token || req.headers['authorization']?.split(' ')[1]; 
    if (!token) {
        return res.status(400).json({ message: 'No token provided' });
    }

    try {
        await blacklistToken.create({ token });

        res.clearCookie('token');

        return res.status(200).json({ message: 'Captain logged out successfully' });
    } catch (err) {
        next(err);
    }
};

module.exports.getCaptianProfile = async (req,res,next)=>{
    res.status(200).json(req.captain);
}