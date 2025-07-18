import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'

export const loginUser = async ({email, password}) => {
    try {
        const res = await axios.post(`${API_URL}/login`, {
        email,
        password,
        })
        
        return res.data;
        
    } catch (error) {

       throw error.response?.data || { message: 'login failed' };
    }

    
}

export const registerUser = async ({name, email, password}) => {

    try {
        
        const res = await axios.post(`${API_URL}/register`, {name, email, password,})

        return res.data
        
    } catch (error) {
        throw error.response?.data || { message: 'Registration failed' }; 
    }


    
}

