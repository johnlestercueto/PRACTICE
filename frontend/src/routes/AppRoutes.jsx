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
import UnauthorizedPage from '../pages/UnauthorizedPage';
import AdminSetting from '../admin/pages/AdminSetting'
import UserLayout from '../layouts/UserLayout'
import AdminLayout from '../layouts/AdminLayout';

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/unauthorized" element={< UnauthorizedPage />} />


       {/* Protected User Routes */}
      <Route element={<PrivateRoute allowedRoles={['user']} />}>
      <Route element={<UserLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
      </Route>

      {/* Protected Admin Routes */}
      <Route element={<PrivateRoute allowedRoles={['admin']} />}>
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/setting" element={<AdminSetting />} />
      </Route>
      </Route>

    </Routes>
  );
};

export default AppRoutes;
