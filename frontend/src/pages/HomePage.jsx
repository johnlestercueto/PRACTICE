import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const HomePage = () => {
    const { user, logout } = useAuth();
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Dashboard</h2>
      <p>Welcome, <strong>{user.name}</strong>!</p>
      
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default HomePage