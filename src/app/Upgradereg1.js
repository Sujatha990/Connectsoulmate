"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { userExists } from './ValidationUtlis';
import Registerdisplaydata from './Registerdisplaydata';
import dummydata from './Registerdummydata/dummydata';
import Image from 'next/image';
import './Upgradereg.css'; // Import CSS file

const Upgradereg1 = () => {
    const [formData, setFormData] = useState({
        profile: '',
        Name: '',
        surName: '',
        dateOfBirth: '',
        address: '',
        city: '',
        pincode: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [hasViewedTerms, setHasViewedTerms] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [error, setError] = useState('');
    const [storedData, setStoredData] = useState(dummydata);
    const [showRegisterSuccess, setShowRegisterSuccess] = useState(false);
    const [viewDetails, setViewDetails] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [matchError, setMatchError] = useState('');

    const totalSteps = 5;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({
            ...formData,
            [name]: files[0]
        });
    };

    const handleAcceptTerms = (e) => {
        setAcceptedTerms(e.target.checked);
    };

    const handleViewTerms = () => {
        setHasViewedTerms(true);
    };

    const validatePassword = (password) => {
        const minLength = 12;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { password, confirmPassword } = formData;

        if (!validatePassword(password)) {
            setPasswordError('Password must be at least 12 characters long and include uppercase letters, lowercase letters, numbers, and special characters.');
            setMatchError('');
            return;
        }

        if (password !== confirmPassword) {
            setMatchError('Passwords do not match.');
            setPasswordError('');
            return;
        }

        if (userExists(formData.email)) {
            setError('Email already exists. Please try a different email.');
            return;
        }

        // Save form data to local storage
        localStorage.setItem('isRegistered', 'true');
        localStorage.setItem('formData', JSON.stringify(formData));

        // Proceed with form submission (e.g., send data to server)
        alert('Registration successful');
        window.location.href = '/upgrade'; // Redirect to the upgrade page

        setShowRegisterSuccess(true);
        setFormData({
            profile: '',
            Name: '',
            surName: '',
            dateOfBirth: '',
            address: '',
            city: '',
            pincode: '',
            phoneNumber: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
        setError('');
        setPasswordError('');
        setMatchError('');
        setCurrentStep(2);
    };

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const toggleViewDetails = () => {
        setViewDetails(!viewDetails);
    };

    // Convert formData to query string
    const queryString = new URLSearchParams(formData).toString();

    return (
        <section className="h-100 bg-dark">
            <div className="custom-container py-5 h-100"> {/* Apply custom class here */}
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-10 col-lg-8">
                        <div className="card card-registration my-4">
                            <div className="row g-0">
                                <div className="col-xl-6 d-none d-xl-block">
                                    <Image
                                        src="/Images/reg.jpg"
                                        alt="Sample"
                                        className="img-fluid custom-image"
                                        width={800}
                                        height={1000} // Adjusted height
                                    />
                                </div>
                                <div className="col-xl-6">
                                    <div className="card-body p-md-5 text-black">
                                        {currentStep === 1 && (
                                            <>
                                                <div className="flex-container">
                                                    <h1 className="mb-5 text-uppercase display-4 " style={{textAlign:"center"}}>
                                                        Register
                                                    </h1>
                                                </div>
                                                <h4 className="text-center mb-4" style={{ color: 'red' }}>The journey to discover your perfect match, right here and now!</h4>

                                                {error && <div className="alert alert-danger">{error}</div>}
                                                <form onSubmit={handleSubmit}>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="profile">Select Profile</label>
                                                        <div className="position-relative">
                                                            <select
                                                                className="form-control form-control-arrow"
                                                                id="profile"
                                                                name="profile"
                                                                value={formData.profile}
                                                                onChange={handleChange}
                                                                required
                                                            >
                                                                <option value="" disabled>Select profile</option>
                                                                <option value="myself">Myself</option>
                                                                <option value="daughter">Daughter</option>
                                                                <option value="son">Son</option>
                                                                <option value="sister">Sister</option>
                                                                <option value="brother">Brother</option>
                                                                <option value="relative">Relative</option>
                                                                <option value="friend">Friend</option>
                                                            </select>
                                                            <div className="arrow-container">
                                                                <div className="arrow-wrapper">
                                                                    <div className="arrow"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form-group mb-3">
                                                        <label htmlFor="Name">Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="Name"
                                                            name="Name"
                                                            value={formData.Name}
                                                            onChange={handleChange}
                                                            placeholder="Enter first name"
                                                            required
                                                        />
                                                    </div>

                                                    <div className="form-group mb-3">
                                                        <label htmlFor="surName">Sur Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="surName"
                                                            name="surName"
                                                            value={formData.surName}
                                                            onChange={handleChange}
                                                            placeholder="Enter sur name"
                                                            required
                                                        />
                                                    </div>

                                                    <div className="form-group mb-3">
                                                        <label htmlFor="dateOfBirth">Date of Birth</label>
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            id="dateOfBirth"
                                                            name="dateOfBirth"
                                                            value={formData.dateOfBirth}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>

                                                    <div className="form-group mb-3">
                                                        <label htmlFor="address">Address</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="address"
                                                            name="address"
                                                            value={formData.address}
                                                            onChange={handleChange}
                                                            placeholder="Enter address"
                                                            required
                                                        />
                                                    </div>

                                                    <div className="form-group mb-3">
                                                        <label htmlFor="city">City</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="city"
                                                            name="city"
                                                            value={formData.city}
                                                            onChange={handleChange}
                                                            placeholder="Enter city"
                                                            required
                                                        />
                                                    </div>

                                                    <div className="form-group mb-3">
                                                        <label htmlFor="pincode">Pincode</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="pincode"
                                                            name="pincode"
                                                            value={formData.pincode}
                                                            onChange={handleChange}
                                                            placeholder="Enter pincode"
                                                            pattern="\d{6}"
                                                            title="Pincode must be a 6-digit number"
                                                            required
                                                        />
                                                    </div>

                                                    <div className="form-group mb-3">
                                                        <label htmlFor="phoneNumber">Phone Number</label>
                                                        <input
                                                            type="tel"
                                                            className="form-control"
                                                            id="phoneNumber"
                                                            name="phoneNumber"
                                                            value={formData.phoneNumber}
                                                            onChange={handleChange}
                                                            placeholder="Enter phone number"
                                                            required
                                                        />
                                                    </div>

                                                    <div className="form-group mb-3">
                                                        <label htmlFor="email">Email</label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            placeholder="Enter email"
                                                            required
                                                        />
                                                    </div>

                                                    <div className="form-group mb-3">
                                                        <label htmlFor="password">Password</label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            id="password"
                                                            name="password"
                                                            value={formData.password}
                                                            onChange={handleChange}
                                                            placeholder="Enter password"
                                                            required
                                                        />
                                                        {passwordError && <div className="text-danger mt-2">{passwordError}</div>}
                                                    </div>

                                                    <div className="form-group mb-3">
                                                        <label htmlFor="confirmPassword">Re-enter Password</label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            id="confirmPassword"
                                                            name="confirmPassword"
                                                            value={formData.confirmPassword}
                                                            onChange={handleChange}
                                                            placeholder="Re-enter password"
                                                            required
                                                        />
                                                        {matchError && <div className="text-danger mt-2">{matchError}</div>}
                                                    </div>

                                                    <div className="d-flex align-items-center">
                                                        <button type="submit" className="btn btn-warning btn-lg me-3">
                                                            Register
                                                        </button>
                                                    </div>
                                                </form>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Upgradereg1;
