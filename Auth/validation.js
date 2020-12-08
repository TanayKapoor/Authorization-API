// Validation
const Joi = require('joi');

// Register Validation
const registerValidation = data => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().lowercase().required(),
        password: Joi.string().min(8).required()
    });
    return schema.validate(data);
};

// Login validation
const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string().email().lowercase().required(),
        password: Joi.string().min(8).required()
    });
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;