import React from 'react'

import { useAuth } from '../contexts/AuthContext';
import AdminLayout from '../layouts/AdminLayout';


const SettingPage = () => {
  const { user, logout } = useAuth();
  return (
    <>
    
     <h2>Dashboard</h2>
      <p>Welcome, <strong>{user.name}</strong>!</p>
      
      <button onClick={logout}>Logout</button>
      
    <div>this is admin setting page</div>
    

    
    </>
  )
}

export default SettingPage