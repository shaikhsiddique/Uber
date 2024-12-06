const {userModel, validateUser } = require('../models/userModel');
const blacklistToken = require('../models/blacklistToken');
const { hashPassword, comparePassword } = require('../utils/hash-password');
const { createToken } = require('../utils/jwt');
const { createUser,findUser } = require('../services/user.service');



module.exports.registerUser = async (req, res, next) => {
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const { fullname, email, password, socketId } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'Email is already registered' });
    }

    try {
        const hashedPassword = await hashPassword(password);
        const newUser = await createUser(fullname, email, hashedPassword); // Calling createUser method

        
        const token = await createToken({ id: newUser._id });
        res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 3600000 }); 
        return res.status(201).json({
            message: 'User registered successfully',
            user: {
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
            },
            token, 
        });
    } catch (err) {
        next(err);
    }
};


module.exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const user = await findUser(email);

        if (!user) { 
            return res.status(400).json({ message: 'User not found' });
        }
        const isMatch = await comparePassword(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }
        const token = await createToken({ id: user._id });
        res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 3600000 }); 
        return res.status(200).json({
            message: 'User logged in successfully',
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
            token,
        });
    } catch (err) {
        next(err);
    }
};

module.exports.logoutUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers['authorization']?.split(' ')[1]; 
    if (!token) {
        return res.status(400).json({ message: 'No token provided' });
    }

    try {
        await blacklistToken.create({ token });

        res.clearCookie('token');

        return res.status(200).json({ message: 'User logged out successfully' });
    } catch (err) {
        next(err);
    }
};

module.exports.getUserProfile = (req,res,next)=>{
    res.status(200).json(req.user)
}