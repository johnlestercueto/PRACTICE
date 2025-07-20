import React from 'react';
import '../components/PublicLayout.css';
import { Link, Outlet } from 'react-router-dom'; // ✅ import Outlet

const PublicLayout = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">Go Store</div>

        <div className="navbar-search">
          <input type="text" placeholder="Search product..." />
        </div>

        <div className="navbar-buttons">
          <Link to="/cart" className="icon-button" title="Cart">🛒</Link>
          <Link to="/setting" className="icon-button" title="Settings">⚙️</Link>
        </div>
      </nav>

      {/* ✅ Ito ang magre-render ng HomePage, CartPage, SettingPage, etc. */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;
