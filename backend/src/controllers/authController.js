const authServices = require('../services/authServices')
const { validationResult } = require("express-validator");

exports.registerUser = async (req, res) => {
    try {

        const user = await authServices.register(req.body)

        res.status(201).json({message: 'sign up succesfully', data: user})

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.loginUser = async (req, res) => {
    try {

        const user = await authServices.login(req.body)

        res.status(201).json({message: 'log in succesfully', data: user})
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}