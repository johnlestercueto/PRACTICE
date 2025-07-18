import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import LogInForm from '../components/LogInForm';


const LogInPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate()

    const handleLogIn = async (formData) => {
        try {
            await login(formData)
             alert('Login successful!');
             navigate('/');
    } catch (error) {
            alert(error.message || 'Login failed.');
            }
    }
  return (
    <LogInForm onSubmit={handleLogIn} />
  
  )
}

export default LogInPage