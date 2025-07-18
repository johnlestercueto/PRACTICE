// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LogInPage';
import PrivateRoute from '../components/PrivateRoute';
import SignUpPage from '../pages/SignUpPage'
import ProfilePage from '../pages/ProfilePage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      {/* Protected Routes */}
      <Route element={<PrivateRoute />}>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        
      </Route>

    </Routes>
  );
};

export default AppRoutes;
