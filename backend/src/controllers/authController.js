const authServices = require('../services/authServices')


exports.registerUser = async (req, res) => {
    try {

        const {user, token} = await authServices.register(req.body)

        res.status(201).json({
            message: 'sign up succesfully',
            token, 
            user

            })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.loginUser = async (req, res) => {
    try {

        const {user, token } = await authServices.login(req.body)

        res.status(201).json({
            message: 'log in succesfully',
            token,
            user
            
            })
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}