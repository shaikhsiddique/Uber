const { validateUser } = require('../models/userModel');
const { hashPassword } = require('../utils/hash-password');
const { createToken } = require('../utils/jwt');
const { createUser } = require('../services/user.service');
const {userModel} = require('../models/userModel')



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
