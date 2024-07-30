// NavBar.jsx
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure you import Bootstrap CSS

const NavBar3 = ({ isLoggedIn, username }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(prevState => !prevState);
    };

    const handleLogout = () => {
        alert('Logout clicked');
        // You should ideally handle logout logic here
    };

    const handleViewDetails = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.js");
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary text-white p-3 pt-3 pb-3">
                <div className="container-fluid">
                    <Link href="/" className="navbar-brand text-white" style={{ fontSize: "30px" }}>
                        <i className="fas fa-heart text-danger"></i> ConnectSoulmate
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{paddingRight:"150px"}}>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ fontSize: "20px" }}>
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

                            {isLoggedIn ? (
                                <li className="nav-item">
                                    <div className="nav-link text-white" onClick={toggleDropdown} style={{ cursor: 'pointer'}}>
                                        <div className="user-icon">
                                            {username.charAt(0).toUpperCase()}
                                        </div>
                                        {showDropdown && (
                                            <div className="dropdown-menu show">
                                                <p className="dropdown-item mb-0">
                                                    <i className="fas fa-user"></i>
                                                    Logged in as: {username}
                                                </p>
                                                <Link href="/home" className="dropdown-item btn btn-link" onClick={handleLogout}>
                                                    <i className="fas fa-sign-out-alt"></i>
                                                    Logout
                                                </Link>
                                                <button className="dropdown-item btn btn-link" onClick={handleViewDetails}>
                                                    <i className="fas fa-eye"></i>
                                                    View Details
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link href="/login1" className="nav-link text-white">
                                        <i className="fas fa-sign-in-alt"></i> Login
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Modal for Viewing User Details */}
            <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">User Details</h5>
                            <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Username: {username}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar3;
