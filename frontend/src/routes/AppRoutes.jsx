// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LogInPage';
import PrivateRoute from '../components/PrivateRoute';
import SignUpPage from '../pages/SignUpPage'
import SettingPage from '../pages/SettingPage';
import CartPage from '../pages/CartPage';
import NotFoundPage from '../pages/NotFoundPage';
import AdminDashboard from '../admin/pages/AdminDashboard';

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />

      {/* Protected Routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/cart" element={<CartPage />} />
        
        
      </Route>

    </Routes>
  );
};

export default AppRoutes;
