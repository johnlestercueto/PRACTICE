import { createContext, useContext, useState, useEffect } from 'react';
import { loginUser, registerUser } from '../services/authServices';
import { jwtDecode } from 'jwt-decode'; // ✅ Tama ito


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // ✅ new state

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (token && userData) {
    try {
      setUser(JSON.parse(userData)); // load full user
      setIsAuthenticated(true);
    } catch (err) {
      console.error("Error loading user from storage");
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }
  setLoading(false);


  }, []);

  const login = async (formData) => {
    try {
      console.log('🔍 Sending to backend:', formData); // ADD THIS

    const data = await loginUser(formData);

    console.log('✅ Backend responded with:', data); // ADD THIS
      setUser(data.user);
      setIsAuthenticated(true);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user)); 
      return data;
    } catch (err) {
      return false;
    }
  };

  const register = async (formData) => {
    const data = await registerUser(formData);
    return data;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
