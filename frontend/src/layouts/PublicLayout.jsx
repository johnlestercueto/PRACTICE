import React from 'react'
import '../components/PublicLayout.css';
import { Link } from 'react-router-dom'

const PublicLayout = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Go Store</div>

      <div className="navbar-search">
        <input type="text" placeholder="Search product..." />
      </div>

      <div className="navbar-buttons">
        <Link to="/Cart" className="icon-button" title="Cart">🛒</Link>
        <Link to="/setting" className="icon-button" title="Settings">⚙️</Link>
        
      </div>
    </nav>
  )
}

export default PublicLayout