import React from 'react'
import BackButton from '../components/BackButton'
import { useAuth } from '../contexts/AuthContext';


const SettingPage = () => {
  const { user, logout } = useAuth();
  return (
    <>
     <h2>Dashboard</h2>
      <p>Welcome, <strong>{user.name}</strong>!</p>
      
      <button onClick={logout}>Logout</button>
      
    <div>this is user setting page</div>
    <BackButton />

    
    </>
  )
}

export default SettingPage