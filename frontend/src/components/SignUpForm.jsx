import useForm from "../hooks/useForm"

const SignUpForm = ({ onSubmit }) => {
    const { values, handleChange, resetForm} = useForm({
        name: '',
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
             type="name"
             name="name"
             value={values.name}
             onChange={handleChange}
             placeholder="name"
        />
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
        <button type="submit">SIGN UP</button>

    </form>
  )
}

export default SignUpForm