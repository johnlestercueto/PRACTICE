// src/layouts/AdminLayout.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../components/AdminLayout.css'; // make sure to create this

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <div className="sidebar-title">Go Store Admin</div>
        <ul className="sidebar-links">
          <li><Link to="/admin">🏠 Dashboard</Link></li>
          <li><Link to="/admin/setting">⚙️ Settings</Link></li>
        </ul>
      </aside>

      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
