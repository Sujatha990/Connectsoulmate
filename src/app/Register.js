"use client";
import React, { useState } from 'react';
import "./register.css";
import Link from 'next/link';
import { userExists } from './ValidationUtlis';
import Registerdisplaydata from './Registerdisplaydata';
import dummydata from './Registerdummydata/dummydata';
import Image from 'next/image';

const Register = () => {
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
        gender: '',
        state: '',
        dateOfBirth: '',
        religion: '',
        gender:'',
        motherTongue: '',
        caste:'',
        gothram:'',
        familyDetails: '',
        caste: '',
        gothram: '',
        familyDetails: '',
        maritalStatus: '',
        height: '',
        weight:'',
        complexion: '',
        lifestyle:'',
        hobbies:'',
        expectations:'',
        preferences:'',
        familyType:'',
        disability:'',
        highestEducation: '',
        employedIn: '',
        occupation: '',
        annualIncome: '',
        aboutYourself: '',
        photo: null,
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
        localStorage.setItem('formData', JSON.stringify(formData));


        // Proceed with form submission (e.g., send data to server)
        alert('Registration successful');

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
            gender: '',
            state: '',
            dateOfBirth: '',
            religion: '',
            gender:'',
            motherTongue: '',
            caste:'',
            gothram:'',
            familyDetails: '',
            caste: '',
            gothram: '',
            familyDetails: '',
            maritalStatus: '',
            height: '',
            weight:'',
            complexion: '',
            lifestyle:'',
            hobbies:'',
            expectations:'',
            preferences:'',
            familyType:'',
            disability:'',
            highestEducation: '',
            employedIn: '',
            occupation: '',
            annualIncome: '',
            aboutYourself: '',
            photo: null,
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
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card card-registration my-4">
                            <div className="row g-0">
                                <div className="col-xl-6 d-none d-xl-block">
                                    <Image
                                        src="/Images/reg.jpg"
                                        alt="Sample"
                                        className="img-fluid"
                                        width={800}
                                        height={800}
                                        style={{ maxWidth: "100%", height: "800px", borderRadius: ".25rem" }}
                                    />
                                </div>
                                <div className="col-xl-6">
                                    <div className="card-body p-md-5 text-black">
                                        {currentStep === 1 && (
                                            <>
                                                <div className="flex-container">
                                                    <h1 className="mb-5 text-uppercase display-4">
                                                        Register
                                                    </h1>
                                                </div>
                                                <h4 className="text-center mb-4" style={{ color: 'red' }}>The journey to discover your perfect match, right here and now!</h4>

                                                {error && <div className="alert alert-danger">{error}</div>}
                                                <form onSubmit={handleSubmit}>
                                                    <div className="form-group mb-3 ">
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



                                        {currentStep === 2 && (
                                            <>
                                                <h3 className="mb-5 text-uppercase"></h3>
                                                <h2 className="text-center mb-4">Please provide us with your basic details</h2>
                                                <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="religion">Religion</label>
                                                    <div className="position-relative">

                                                        <select
                                                            className="form-control form-control-arrow"
                                                            id="religion"
                                                            name="religion"
                                                            value={formData.religion}
                                                            onChange={handleChange}
                                                            required
                                                        >
                                                            <option value="" disabled>Select Religion</option>
                                                            <option value="christianity">Christianity</option>
                                                            <option value="hinduism">Hinduism</option>
                                                            <option value="other">Other</option>
                                                        </select>
                                                        <div className="arrow-container">
                                                            <div className="arrow-wrapper">
                                                                <div className="arrow"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="gender">Gender</label>
                                                    <div className="position-relative">
                                                        <select
                                                            className="form-control form-control-arrow"
                                                            id="gender"
                                                            name="gender"
                                                            value={formData.gender}
                                                            onChange={handleChange}
                                                            required
                                                        >
                                                            <option value="" disabled>Select Gender</option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                            <option value="other">Other</option>
                                                            <option value="prefer not to say">Prefer not to say</option>
                                                        </select>
                                                        <div className="arrow-container">
                                                            <div className="arrow-wrapper">
                                                                <div className="arrow"></div>
                                                            </div>
                                                        </div>
                                                    
                                                    </div>
                                                </div>
                                                <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="motherTongue">Mother Tongue</label>
                                                    <div className="position-relative">

                                                        <select
                                                            className="form-control form-control-arrow"
                                                            id="motherTongue"
                                                            name="motherTongue"
                                                            value={formData.motherTongue}
                                                            onChange={handleChange}
                                                            required
                                                        >
                                                            <option value="" disabled>Select mother tongue</option>
                                                            <option value="telugu">Telugu</option>
                                                            <option value="kannada">Kannada</option>
                                                            <option value="tamil">Tamil</option>
                                                            <option value="malayalam">Malayalam</option>
                                                            <option value="english">English</option>
                                                            <option value="hindi">Hindi</option>
                                                            <option value="others">Others</option>

                                                        </select>
                                                        <div className="arrow-container">
                                                            <div className="arrow-wrapper">
                                                                <div className="arrow"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="caste">Caste</label>
                                                    <div className="position-relative">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="caste"
                                                            name="caste"
                                                            value={formData.caste}
                                                            onChange={handleChange}
                                                            placeholder="Enter Caste"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="gothram">Gothram</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="gothram"
                                                        name="gothram"
                                                        value={formData.gothram}
                                                        onChange={handleChange}
                                                        placeholder="Enter gothram"
                                                    />
                                                </div>

                                                <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="familyDetails">Family Details</label>
                                                    <textarea
                                                        className="form-control"
                                                        id="familyDetails"
                                                        name="familyDetails"
                                                        value={formData.familyDetails}
                                                        onChange={handleChange}
                                                        placeholder="Enter family details"
                                                    ></textarea>
                                                </div>
                                                
                                            </>
                                        )}
                                       
                                        {currentStep === 3 && (
                                            <>
                                                <h3 className="mb-5 text-uppercase"></h3>
                                                <h2 className="text-center mb-4">Personal Information</h2>
                                                <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="maritalStatus">Marital Status</label>
                                                    <div className="position-relative">

                                                        <select
                                                            className="form-control form-control-arrow"
                                                            id="maritalStatus"
                                                            name="maritalStatus"
                                                            value={formData.maritalStatus}
                                                            onChange={handleChange} required
                                                        >
                                                            <option value="">Select Marital Status</option>
                                                            <option value="Single">Single</option>
                                                            <option value="Married">Married</option>
                                                            <option value="Divorced">Divorced</option>
                                                            <option value="Widowed">Widowed</option>
                                                        </select>
                                                        <div className="arrow-container">
                                                            <div className="arrow-wrapper">
                                                                <div className="arrow"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="height">Height</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="height"
                                                        name="height"
                                                        value={formData.height}
                                                        onChange={handleChange}
                                                        placeholder="Enter height"
                                                    />
                                                </div>
                                                <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="weight">Weight</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="weight"
                                                        name="weight"
                                                        value={formData.weight}
                                                        onChange={handleChange}
                                                        placeholder="Enter weight"
                                                    />
                                                </div>
                                                <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="complexion">Complexion</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="complexion"
                                                        name="complexion"
                                                        value={formData.complexion}
                                                        onChange={handleChange}
                                                        placeholder="Enter complexion"
                                                    />
                                                </div>
                                                <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="lifestyle">Lifestyle</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="lifestyle"
                                                        name="lifestyle"
                                                        value={formData.lifestyle}
                                                        onChange={handleChange}
                                                        placeholder="Enter lifestyle"
                                                    />
                                                </div>

                                                <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="hobbies">Hobbies</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="hobbies"
                                                        name="hobbies"
                                                        value={formData.hobbies}
                                                        onChange={handleChange}
                                                        placeholder="Enter hobbies"
                                                    />
                                                </div>
                                                <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="expectations">Expectations</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="expectations"
                                                        name="expectations"
                                                        value={formData.expectations}
                                                        onChange={handleChange}
                                                        placeholder="Enter expectations"
                                                    />
                                                </div>

                                                <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="preferences">Preferences</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="preferences"
                                                        name="preferences"
                                                        value={formData.preferences}
                                                        onChange={handleChange}
                                                        placeholder="Enter preferences"
                                                    />
                                                </div>

                                                <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="familyType">Family Type</label>
                                                    <div className="position-relative">

                                                        <select
                                                            className="form-control form-control-arrow"
                                                            id="familyType"
                                                            name="familyType"
                                                            value={formData.familyType}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="">Select Family Type</option>
                                                            <option value="Joint">Joint</option>
                                                            <option value="Nuclear">Nuclear</option>
                                                        </select>
                                                    </div>

                                                </div>
                                                <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="disability">Disability (if any)</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="disability"
                                                        name="disability"
                                                        value={formData.disability}
                                                        onChange={handleChange}
                                                        placeholder="Enter disability details"
                                                    />
                                                </div>
                                            </>
                                        )}
                                        {currentStep === 4 && (
                                            <>
                                                <h3 className="mb-5 text-uppercase"></h3>
                                                <h2 className="text-center mb-4">Education and Occupation details help us find better matches</h2>
                                                <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="highestEducation">Highest Education</label>
                                                    <div className="position-relative">

                                                        <select
                                                            className="form-control form-control-arrow"
                                                            id="highestEducation"
                                                            name="highestEducation"
                                                            value={formData.highestEducation}
                                                            onChange={handleChange}
                                                            required
                                                        >
                                                            <option value="" disabled>Select Highest Education</option>
                                                            <option value="High School">High School</option>
                                                            <option value="Diploma">Diploma</option>
                                                            <option value="Bachelors">Bachelors</option>
                                                            <option value="Masters">Masters</option>
                                                            <option value="Doctorate">Doctorate</option>
                                                        </select>
                                                        <div className="arrow-container">
                                                            <div className="arrow-wrapper">
                                                                <div className="arrow"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="employedIn">Employed In</label>
                                                    <div className="position-relative">

                                                        <select
                                                            className="form-control form-control-arrow"
                                                            id="employedIn"
                                                            name="employedIn"
                                                            value={formData.employedIn}
                                                            onChange={handleChange}
                                                            required
                                                        >
                                                            <option value="" disabled>Select Employment</option>
                                                            <option value="government">Government</option>
                                                            <option value="private">Private</option>
                                                            <option value="business">Business</option>
                                                            <option value="self-employed">Self-employed</option>
                                                            <option value="not working">Not working</option>
                                                        </select>
                                                        <div className="arrow-container">
                                                            <div className="arrow-wrapper">
                                                                <div className="arrow"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="occupation">Occupation</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="occupation"
                                                        name="occupation"
                                                        value={formData.occupation}
                                                        onChange={handleChange}
                                                        placeholder="Enter occupation"
                                                    />
                                                </div>
                                                <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="annualIncome">Annual Income</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="annualIncome"
                                                        name="annualIncome"
                                                        value={formData.annualIncome}
                                                        onChange={handleChange}
                                                        placeholder="Enter annual income"
                                                    />
                                                </div>
                                                <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="aboutYourself">About Yourself</label>
                                                    <textarea
                                                        className="form-control"
                                                        id="aboutYourself"
                                                        name="aboutYourself"
                                                        value={formData.aboutYourself}
                                                        onChange={handleChange}
                                                        placeholder="Enter about yourself"
                                                    ></textarea>
                                                </div>
                                            </>
                                        )}
                                        {currentStep === 5 && (
                                            <>
                                           
                                                <div className="form-group" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="photo">Upload Photo</label>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        id="photo"
                                                        name="photo"
                                                        onChange={handleFileChange}
                                                        required
                                                    />
                                                </div>
                                                
                                                
                                                <div className="form-group" style={{ marginBottom: '20px' }}>
                                                    <label htmlFor="photo">Upload Biodata</label>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        id="photo"
                                                        name="photo"
                                                        onChange={handleFileChange}
                                                        required
                                                    />
                                                </div>
                                                <h3 className="mb-5 text-uppercase"></h3>
                                                <div className="form-group" style={{ marginBottom: '20px' }}>
                                                    <input
                                                        type="checkbox"
                                                        id="termsCheckbox"
                                                        name="termsCheckbox"
                                                        onChange={handleAcceptTerms}
                                                        disabled={!hasViewedTerms}
                                                        checked={acceptedTerms}
                                                    />
                                                    <label htmlFor="termsCheckbox" className="ms-2">
                                                        I accept the <Link href="Images/Terms and Condition.pdf" target="_blank" onClick={handleViewTerms}>Terms and Conditions</Link><br />
                                                    </label>
                                                </div>
                                                    <h3 className="mb-5 text-uppercase"></h3>
                                                <div className="form-group" style={{ marginBottom: '20px' }}>
                                                    <input
                                                        type="checkbox"
                                                        id="termsCheckbox"
                                                        name="termsCheckbox"
                                                        onChange={handleAcceptTerms}
                                                        disabled={!hasViewedTerms}
                                                        checked={acceptedTerms}
                                                    />
                                                    <label htmlFor="termsCheckbox" className="ms-2">
                                                        I accept the <Link href="Images/Privacy Policy.pdf" target="_blank" onClick={handleViewTerms}>Privacy Policy</Link><br />
                                                    </label><br /><br/>
                                                    
                                                </div>
                                            
                                            </>
                                        )}
                                        
                                                <div className="d-flex justify-content-between align-items-center mt-4">
                                            {currentStep > 1 && (
                                                <button type="button" className="btn btn-warning btn-lg ms-2" onClick={prevStep}>
                                                    Previous
                                                </button>
                                            )}
                                            {currentStep > 1 && currentStep < totalSteps && (
                                                <button type="button" className="btn btn-warning btn-lg ms-2" onClick={nextStep}>
                                                    Next
                                                </button>
                                            )}
                                            {currentStep === totalSteps && (
                                                <>
                                                    <Link href="/details">
                                                        <button type="button" className="btn btn-warning btn-lg ms-2">
                                                            View Details
                                                        </button>
                                                    </Link>
                                                    <button type="button" className="btn btn-warning btn-lg ms-2">
                                                        Submit
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                            
                                    

                                        

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Register;

