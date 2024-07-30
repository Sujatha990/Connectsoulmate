// NavBar.jsx
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import "./navbar.css";
import Home from './page';

const NavBar = ({ isLoggedIn, username }) => {
    const [isHovering, setIsHovering] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = () => {
        // Show alert
        alert('Logout clicked');
    };
        useEffect(() => {
            require("bootstrap/dist/js/bootstrap.js");
        }, []);

        return (
            <nav className="navbar navbar-expand-lg bg-primary text-white p-3 pt-3 pb-3">
                <div className="container-fluid">
                    <Link href="/" className="navbar-brand text-white" style={{ fontSize: "30px" }}>
                        <i className="fas fa-heart text-danger"></i> ConnectSoulmate
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 " style={{ fontSize: "20px" }}>
                            <li className="nav-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                {isLoggedIn ? (
                                    <div className="nav-link text-white" onClick={toggleDropdown}>
                                        {/* Display first letter of username */}
                                        <div className="user-icon">
                                        {username.charAt(0).toUpperCase()}
                                        </div>
                                        {showDropdown && (
                                            <div className="dropdown-menu show" style={{ position: "absolute", right: "0" }}>
                                                <p className="dropdown-item mb-0">
                                                <i className="fas fa-user"></i>
                                                Logged in as: {username}</p>
                                                <Link href="/home" className="dropdown-item btn btn-link" onClick={handleLogout}>
                                                <i className="fas fa-sign-out-alt"></i>
                                                Logout
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                   
                                ) : (
                                    <Link href="/login1" className="nav-link text-white">
                                        <i className="fas fa-sign-in-alt"></i> Login
                                    </Link>
                                )}
                            </li>
                            <li className="nav-item">
                                <Link href="/register" className="nav-link text-white">
                                    <i className="fas fa-user-plus"></i> Register
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/help" className="nav-link text-white">
                                    <i className="fas fa-question-circle"></i> Help
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/search" className="nav-link text-white">
                                    <i className="fas fa-search"></i> Search
                                </Link>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

    export default NavBar;
