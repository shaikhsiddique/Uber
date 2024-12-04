const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema  = mongoose.Schema({
    fullname : {
        fristname :{
            type : String,
            required :true,
            minlength: [3,"Frist name must be at least 3 letters "],
        },
        lastname :{
            type : String,
            required :true,
            minlength: [3,"Last name must be at least 3 letters "],
        }
    },
    email:{
        type:String,
        unique :true,
        required:true,
        minlength :[5,"Email must be of minimum 5 letters"]
    },
    password:{
        type:String,
        required:true,
        select :false,
    },
    socketId: {
        type :String
    }
})


const validateUser = (data) => {
    const schema = Joi.object({
        fullname: Joi.object({
            fristname: Joi.string()
                .min(3)
                .required()
                .messages({
                    'string.base': 'First name must be a string',
                    'string.min': 'First name must be at least 3 characters',
                    'any.required': 'First name is required',
                }),
            lastname: Joi.string()
                .min(3)
                .required()
                .messages({
                    'string.base': 'Last name must be a string',
                    'string.min': 'Last name must be at least 3 characters',
                    'any.required': 'Last name is required',
                }),
        }),
        email: Joi.string()
            .email()
            .min(5)
            .required()
            .messages({
                'string.base': 'Email must be a string',
                'string.email': 'Email must be a valid email address',
                'string.min': 'Email must be of minimum 5 characters',
                'any.required': 'Email is required',
            }),
        password: Joi.string()
            .min(6)
            .required()
            .messages({
                'string.base': 'Password must be a string',
                'string.min': 'Password must be at least 6 characters',
                'any.required': 'Password is required',
            }),
        socketId: Joi.string().optional(),
    });

    return schema.validate(data);
};


const userModel = mongoose.model('user',userSchema);

module.exports = {userModel,validateUser}