const userRepository = require('../repositories/UserRepository')
const bcrypt = require('bcrypt')

class AuthService {

    async register(data) {

        // Check kung existing na ang user
        const existing = await userRepository.findByEmail(data.email)
        if(existing) throw new Error('Email is already exists')

        // Hash ang password
        const hashedPassword = await bcrypt.hash(data.password, 10);

        // Create 
        const user = await userRepository.create({
            name: data.name,
            email: data.email,
            password: hashedPassword,

        })

        //Return successful register response
        return user;

    }

    async login(data) {

        //  Hanapin ang user sa database
        const user = await userRepository.findByEmail(data.email)
        if(!user) throw new Error('user not found')
        
        // I-verify ang password
        const isMatch = await bcrypt.compare(data.password, user.password)
        if(!isMatch) throw new Error('invalid credentials')
        
        //Return successful login response
        return user;
    }
}

module.exports = new AuthService();