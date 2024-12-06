const mongoose = require('mongoose');
const Joi = require('joi');

const captainSchema = mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "Firstname must be at least 3 letters"],
        },
        lastname: {
            type: String,
            required: true,
            minlength: [3, "Lastname must be at least 3 letters"],
        },
    },
    email: {
        type: String,
        unique: true,
        required: true,
        minlength: [5, "Email must be of minimum 5 letters"],
    },
    password: {
        type: String,
        required: true,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: "active",
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, "Color must be at least 3 letters"],
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, "Plate must be at least 3 letters"],
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "Capacity must be at least 1"],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto'],
        },
    },
    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        },
    },
});

function validateCaptain(data) {
    const schema = Joi.object({
        fullname: Joi.object({
            firstname: Joi.string().min(3).required(),
            lastname: Joi.string().min(3).required(),
        }).required(),
        email: Joi.string().email().min(5).required(),
        password: Joi.string().required(),
        socketId: Joi.string().optional(),
        status: Joi.string().valid('active', 'inactive').optional(),
        vehicle: Joi.object({
            color: Joi.string().min(3).required(),
            plate: Joi.string().min(3).required(),
            capacity: Joi.number().min(1).required(),
            vehicleType: Joi.string().valid('car', 'motorcycle', 'auto').required(),
        }).required(),
        location: Joi.object({
            lat: Joi.number().optional(),
            lng: Joi.number().optional(),
        }).optional(),
    });

    return schema.validate(data);
}

const captainModel = mongoose.model('Captain', captainSchema);

module.exports = { captainModel , validateCaptain };
