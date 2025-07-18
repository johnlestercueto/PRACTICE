
import React from 'react';
//import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
