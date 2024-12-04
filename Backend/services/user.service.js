const { userModel } = require('../models/userModel');

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
