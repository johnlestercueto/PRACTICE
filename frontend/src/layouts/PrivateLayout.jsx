// components/PrivateLayout.jsx
import { Outlet, Navigate } from 'react-router-dom';

const PrivateLayout = () => {
  const token = localStorage.getItem('token');
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateLayout;
