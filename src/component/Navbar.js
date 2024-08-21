// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MyApp</div>
      <ul className="navbar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/upload">Upload</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
