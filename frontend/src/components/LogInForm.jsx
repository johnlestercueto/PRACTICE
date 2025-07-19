import React from 'react'
import useForm from "../hooks/useForm"
import { Link } from 'react-router-dom';


const LogInForm = ({ onSubmit }) => {
    const { values, handleChange, resetForm} = useForm({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(values)
        resetForm();
    }
  return (
     <form onSubmit={handleSubmit} 
     
    style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '400px',
    margin: 'auto',
  }}>
        
        <input
             type="email"
             name="email"
             value={values.email}
             onChange={handleChange}
             placeholder="email"
        />
        <input
             type="password"
             name="password"
             value={values.password}
             onChange={handleChange}
             placeholder="password"
        />
        <button type="submit">LOG IN</button>
        <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>

    </form> 
  )
}

export default LogInForm