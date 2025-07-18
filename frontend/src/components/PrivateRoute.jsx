import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>; // or spinner, etc.
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
