// NavBar.jsx
"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const NavBar = ({ isLoggedIn, username }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    alert('Logout clicked');
    // Implement logout functionality here
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          <i className="fas fa-heart text-danger me-1"></i> ConnectSoulmate
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/register" className="nav-link">
                <i className="fas fa-user-plus me-1"></i> Register
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/help" className="nav-link">
                <i className="fas fa-question-circle me-1"></i> Help
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/search" className="nav-link">
                <i className="fas fa-search me-1"></i> Search
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/search2" className="nav-link">
                <i className="fas fa-search me-1"></i> Search2
              </Link>
            </li>
            {isLoggedIn ? (
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" onClick={toggleDropdown}>
                  <i className="fas fa-user me-1"></i> {username}
                </a>
                <ul className={`dropdown-menu dropdown-menu-end ${showDropdown ? 'show' : ''}`}>
                  <li>
                    <p className="dropdown-item mb-0">
                      <i className="fas fa-user me-1"></i> Logged in as: {username}
                    </p>
                  </li>
                  <li>
                    <Link href="/home" className="dropdown-item" onClick={handleLogout}>
                      <i className="fas fa-sign-out-alt me-1"></i> Logout
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <Link href="/login1" className="nav-link">
                  <i className="fas fa-sign-in-alt me-1"></i> Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
