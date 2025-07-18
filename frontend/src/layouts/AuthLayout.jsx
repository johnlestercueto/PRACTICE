
import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <main style={{ padding: '20px' }}>
      <Outlet />
    </main>
  );
};

export default AuthLayout;
