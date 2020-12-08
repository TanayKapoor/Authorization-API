const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).required()
});

const router = require('express').Router();
const User = require('../model/User');

router.post('/register',async (req, res) => {

    // Validate
    const {error} = schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);


    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;