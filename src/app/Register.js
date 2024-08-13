"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { userExists } from './ValidationUtlis';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import "./register.css";
import Link from 'next/link';

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
    religion: '',
    motherTongue: '',
    caste: '',
    gothram: '',
    familyDetails: '',
    maritalStatus: '',
    height: '',
    weight: '',
    complexion: '',
    lifestyle: '',
    hobbies: '',
    expectations: '',
    preferences: '',
    familyType: '',
    disability: '',
    highestEducation: '',
    employedIn: '',
    occupation: '',
    annualIncome: '',
    aboutYourself: '',
    photo: null,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [passwordError, setPasswordError] = useState('');
  const [matchError, setMatchError] = useState('');
  const [error, setError] = useState('');
  const [viewDetails, setViewDetails] = useState(false);
  const [hasViewedTerms, setHasViewedTerms] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);




  const totalSteps = 5;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
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

    localStorage.setItem('formData', JSON.stringify(formData));

    alert('Registration successful');

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
      religion: '',
      motherTongue: '',
      caste: '',
      gothram: '',
      familyDetails: '',
      maritalStatus: '',
      height: '',
      weight: '',
      complexion: '',
      lifestyle: '',
      hobbies: '',
      expectations: '',
      preferences: '',
      familyType: '',
      disability: '',
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
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
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
                    alt="Sample photo"
                    className="img-fluid"
                    style={{ borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem" }}
                    width={600}
                    height={1200}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-4 text-black">
                    {currentStep === 1 && (
                      <>
                        <h2 className="mb-4 text-uppercase" style={{ textAlign: "center" }}>Register</h2>
                        <h4 className="text-center mb-3" style={{ color: 'red' }}>The journey to discover your perfect match, right here and now!</h4>

                        {error && <div className="alert alert-danger">{error}</div>}
                        <form onSubmit={handleSubmit}>
                          <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="profile">Select Profile</label>
                            <select
                              id="profile"
                              name="profile"
                              className="form-select form-control-lg"
                              value={formData.profile || ""}  // Ensure default is an empty string
                              onChange={handleChange}
                              required
                              style={{
                                border: '1px solid #ced4da',
                                borderRadius: '0.25rem',
                                padding: '0.25rem',  /* Adjust padding to decrease height */
                                fontSize: '1rem',   /* Ensure font size is adequate */
                                lineHeight: '1.5'   /* Ensure line height is adequate */
                              }}
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
                          </div>


                          <div className="row mb-3">
                            <div className="col-md-6">
                              <div className="form-outline">
                                <label className="form-label" htmlFor="Name">Name</label>
                                <input
                                  type="text"
                                  id="Name"
                                  name="Name"
                                  className="form-control form-control-lg"
                                  value={formData.Name}
                                  onChange={handleChange}
                                  placeholder="Enter first name"
                                  required
                                  style={{
                                    border: '1px solid #ced4da',
                                    borderRadius: '0.25rem',
                                    padding: '0.5rem',  // Adjust padding to decrease height
                                    fontSize: '0.875rem', // Optional: smaller font size
                                    lineHeight: '1.25'   // Optional: adjust line height
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-outline">
                                <label className="form-label" htmlFor="surName">Sur Name</label>
                                <input
                                  type="text"
                                  id="surName"
                                  name="surName"
                                  className="form-control form-control-lg"
                                  value={formData.surName}
                                  onChange={handleChange}
                                  placeholder="Enter sur name"
                                  required
                                  style={{
                                    border: '1px solid #ced4da',
                                    borderRadius: '0.25rem',
                                    padding: '0.5rem',  // Adjust padding to decrease height
                                    fontSize: '0.875rem', // Optional: smaller font size
                                    lineHeight: '1.25'   // Optional: adjust line height
                                  }}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="dateOfBirth">Date of Birth</label>
                            <input
                              type="text"
                              id="dateOfBirth"
                              name="dateOfBirth"
                              className="form-control form-control-lg"
                              value={formData.dateOfBirth}
                              onChange={handleChange}
                              placeholder="Select date"
                              required
                              style={{
                                border: '1px solid #ced4da',
                                borderRadius: '0.25rem',
                                padding: '0.5rem',  // Adjust padding to decrease height
                                fontSize: '0.875rem', // Optional: smaller font size
                                lineHeight: '1.25'   // Optional: adjust line height
                              }}
                            />
                          </div>

                          <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="address">Address</label>
                            <input
                              type="text"
                              id="address"
                              name="address"
                              className="form-control form-control-lg"
                              value={formData.address}
                              onChange={handleChange}
                              placeholder="Enter address"
                              required
                              style={{
                                border: '1px solid #ced4da',
                                borderRadius: '0.25rem',
                                padding: '0.5rem',  // Adjust padding to decrease height
                                fontSize: '0.875rem', // Optional: smaller font size
                                lineHeight: '1.25'   // Optional: adjust line height
                              }} />
                          </div>

                          <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="city">City</label>
                            <input
                              type="text"
                              id="city"
                              name="city"
                              className="form-control form-control-lg"
                              value={formData.city}
                              onChange={handleChange}
                              placeholder="Enter city"
                              required
                              style={{
                                border: '1px solid #ced4da',
                                borderRadius: '0.25rem',
                                padding: '0.5rem',  // Adjust padding to decrease height
                                fontSize: '0.875rem', // Optional: smaller font size
                                lineHeight: '1.25'   // Optional: adjust line height
                              }} />
                          </div>

                          <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="pincode">Pincode</label>
                            <input
                              type="text"
                              id="pincode"
                              name="pincode"
                              className="form-control form-control-lg"
                              value={formData.pincode}
                              onChange={handleChange}
                              placeholder="Enter pincode"
                              pattern="\d{6}"
                              title="Pincode must be a 6-digit number"
                              required
                              style={{
                                border: '1px solid #ced4da',
                                borderRadius: '0.25rem',
                                padding: '0.5rem',  // Adjust padding to decrease height
                                fontSize: '0.875rem', // Optional: smaller font size
                                lineHeight: '1.25'   // Optional: adjust line height
                              }} />
                          </div>

                          <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                            <input
                              type="tel"
                              id="phoneNumber"
                              name="phoneNumber"
                              className="form-control form-control-lg"
                              value={formData.phoneNumber}
                              onChange={handleChange}
                              placeholder="Enter phone number"
                              required
                              style={{
                                border: '1px solid #ced4da',
                                borderRadius: '0.25rem',
                                padding: '0.5rem',  // Adjust padding to decrease height
                                fontSize: '0.875rem', // Optional: smaller font size
                                lineHeight: '1.25'   // Optional: adjust line height
                              }} />
                          </div>

                          <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="form-control form-control-lg"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter email"
                              required
                              style={{
                                border: '1px solid #ced4da',
                                borderRadius: '0.25rem',
                                padding: '0.5rem',  // Adjust padding to decrease height
                                fontSize: '0.875rem', // Optional: smaller font size
                                lineHeight: '1.25'   // Optional: adjust line height
                              }} />
                          </div>

                          <div className="row mb-3">
                            <div className="col-md-6">
                              <div className="form-outline">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input
                                  type="password"
                                  id="password"
                                  name="password"
                                  className="form-control form-control-lg"
                                  value={formData.password}
                                  onChange={handleChange}
                                  placeholder="Enter password"
                                  required
                                  style={{
                                    border: '1px solid #ced4da',
                                    borderRadius: '0.25rem',
                                    padding: '0.5rem',  // Adjust padding to decrease height
                                    fontSize: '0.875rem', // Optional: smaller font size
                                    lineHeight: '1.25'   // Optional: adjust line height
                                  }} />
                                {passwordError && <div className="text-danger mt-2">{passwordError}</div>}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-outline">
                                <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                  type="password"
                                  id="confirmPassword"
                                  name="confirmPassword"
                                  className="form-control form-control-lg"
                                  value={formData.confirmPassword}
                                  onChange={handleChange}
                                  placeholder="Re-enter password"
                                  required
                                  style={{
                                    border: '1px solid #ced4da',
                                    borderRadius: '0.25rem',
                                    padding: '0.5rem',  // Adjust padding to decrease height
                                    fontSize: '0.875rem', // Optional: smaller font size
                                    lineHeight: '1.25'   // Optional: adjust line height
                                  }} />
                                {matchError && <div className="text-danger mt-2">{matchError}</div>}
                              </div>
                            </div>
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
                        <h2 className="mb-4" style={{ textAlign: "center" }}>Please provide us with your basic details</h2>
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="religion">Select Religion</label>
                          <select
                            id="religion"
                            name="religion"
                            className="form-select form-control-lg"
                            value={formData.religion}
                            onChange={handleChange}
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}
                          >
                            <option value="" disabled>Select religion</option>
                            <option value="Christianity">Christianity</option>
                            <option value="Hinduism">Hinduism</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="gender">Gender</label>
                          <select
                            id="gender"
                            name="gender"
                            className="form-select form-control-lg"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}
                          >
                            <option value="" disabled>Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="motherTongue">Mother Tongue</label>
                          <select
                            id="motherTongue"
                            name="motherTongue"
                            className="form-select form-control-lg"
                            value={formData.motherTongue}
                            onChange={handleChange}
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}
                          >
                            <option value="" disabled>Select mother tongue</option>
                            <option value="Telugu">Telugu</option>
                            <option value="Kannada">Kannada</option>
                            <option value="Tamil">Tamil</option>
                            <option value="Malayalam">Malayalam</option>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="caste">Caste</label>
                          <input
                            type="text"
                            id="caste"
                            name="caste"
                            className="form-control form-control-lg"
                            value={formData.caste}
                            onChange={handleChange}
                            placeholder="Enter caste"
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}
                          />
                        </div>

                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="gothram">Gothram</label>
                          <input
                            type="text"
                            id="gothram"
                            name="gothram"
                            className="form-control form-control-lg"
                            value={formData.gothram}
                            onChange={handleChange}
                            placeholder="Enter gothram"
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}
                          />
                        </div>

                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="familyDetails">Family Details</label>
                          <textarea
                            id="familyDetails"
                            name="familyDetails"
                            className="form-control form-control-lg"
                            value={formData.familyDetails}
                            onChange={handleChange}
                            placeholder="Enter family details"
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}
                          />
                        </div>


                      </>
                    )}
                    {currentStep === 3 && (
                      <>
                     
                     <h2 className="mb-4" style={{ textAlign: "center" }}>Provide Detailed Personal Information to Complete Your Profile</h2>
                     <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="maritalStatus">Marital Status</label>
                          <select
                            id="maritalStatus"
                            name="maritalStatus"
                            className="form-select form-control-lg"
                            value={formData.maritalStatus}
                            onChange={handleChange}
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}
                          >
                            <option value="" disabled>Select marital status</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="widowed">Widowed</option>
                          </select>
                        </div>
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="height">Height</label>
                          <input
                            type="text"
                            id="height"
                            name="height"
                            className="form-control form-control-lg"
                            value={formData.height}
                            onChange={handleChange}
                            placeholder="Enter height"
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}
                          />
                        </div>

                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="weight">Weight</label>
                          <input
                            type="text"
                            id="weight"
                            name="weight"
                            className="form-control form-control-lg"
                            value={formData.weight}
                            onChange={handleChange}
                            placeholder="Enter weight"
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}
                          />
                        </div>

                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="complexion">Complexion</label>
                          <input
                            type="text"
                            id="complexion"
                            name="complexion"
                            className="form-control form-control-lg"
                            value={formData.complexion}
                            onChange={handleChange}
                            placeholder="Enter complexion"
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}
                          />
                        </div>

                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="lifestyle">Lifestyle</label>
                          <input
                            type="text"
                            id="lifestyle"
                            name="lifestyle"
                            className="form-control form-control-lg"
                            value={formData.lifestyle}
                            onChange={handleChange}
                            placeholder="Enter lifestyle"
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}
                          />
                        </div>

                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="hobbies">Hobbies</label>
                          <input
                            type="text"
                            id="hobbies"
                            name="hobbies"
                            className="form-control form-control-lg"
                            value={formData.hobbies}
                            onChange={handleChange}
                            placeholder="Enter hobbies"
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}
                          />
                        </div>

                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="expectations">Expectations</label>
                          <input
                            type="text"
                            id="expectations"
                            name="expectations"
                            className="form-control form-control-lg"
                            value={formData.expectations}
                            onChange={handleChange}
                            placeholder="Enter expectations"
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}
                          />
                        </div>

                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="preferences">Preferences</label>
                          <input
                            type="text"
                            id="preferences"
                            name="preferences"
                            className="form-control form-control-lg"
                            value={formData.preferences}
                            onChange={handleChange}
                            placeholder="Enter preferences"
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}
                          />
                        </div>

                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="familyType">Family Type</label>
                          <input
                            type="text"
                            id="familyType"
                            name="familyType"
                            className="form-control form-control-lg"
                            value={formData.familyType}
                            onChange={handleChange}
                            placeholder="Enter family type"
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}
                          />
                        </div>

                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="disability">Disability</label>
                          <input
                            type="text"
                            id="disability"
                            name="disability"
                            className="form-control form-control-lg"
                            value={formData.disability}
                            onChange={handleChange}
                            placeholder="Enter disability (if any)"
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}
                          />
                        </div>
                      </>
                    )}
                    {currentStep === 4 && (
                      <>
                        <h2 className="mb-4" style={{ textAlign: "center" }}>Education and Occupation details help us find better matches</h2>
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="highestEducation">Highest Education</label>
                          <select
                            id="highestEducation"
                            name="highestEducation"
                            className="form-select form-control-lg"
                            value={formData.highestEducation}
                            onChange={handleChange}
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}
                          >
                            <option value="" disabled>Select highest education</option>
                            <option value="High School">High School</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Bachelors">Bachelors</option>
                            <option value="Masters">Masters</option>
                            <option value="Doctorate">Doctorate</option>
                          </select>
                        </div>
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="employedIn">Employed In</label>
                          <select
                            id="employedIn"
                            name="employedIn"
                            className="form-select form-control-lg"
                            value={formData.employedIn}
                            onChange={handleChange}
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}
                          >
                            <option value="" disabled>Select employment status</option>
                            <option value="Government">Government</option>
                            <option value="Private">Private</option>
                            <option value="Business">Business</option>
                            <option value="Self-employed">Self-employed</option>
                            <option value="Not Working">Not Working</option>
                          </select>
                        </div>

                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="occupation">Occupation</label>
                          <input
                            type="text"
                            id="occupation"
                            name="occupation"
                            className="form-control form-control-lg"
                            value={formData.occupation}
                            onChange={handleChange}
                            placeholder="Enter occupation"
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}
                          />
                        </div>

                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="annualIncome">Annual Income</label>
                          <input
                            type="text"
                            id="annualIncome"
                            name="annualIncome"
                            className="form-control form-control-lg"
                            value={formData.annualIncome}
                            onChange={handleChange}
                            placeholder="Enter annual income"
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}
                          />
                        </div>

                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="aboutYourself">About Yourself</label>
                          <textarea
                            id="aboutYourself"
                            name="aboutYourself"
                            className="form-control form-control-lg"
                            value={formData.aboutYourself}
                            onChange={handleChange}
                            placeholder="Tell us about yourself"
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}
                          />
                        </div>

                      </>
                    )}
                    {currentStep === 5 && (
                      <>
                        <h2 className="mb-4" style={{ textAlign: "center" }}>Fill in the Required Fields Below to Complete Process</h2>

                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="photo">Profile Photo</label>
                          <input
                            type="file"
                            id="photo"
                            name="photo"
                            className="form-control form-control-lg"
                            onChange={handleFileChange}
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}


                          />
                        </div>
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="biodata">Upload Biodata</label>
                          <input
                            type="file"
                            id="biodata"
                            name="biodata"
                            className="form-control form-control-lg"
                            onChange={handleFileChange}
                            required
                            style={{
                              border: '1px solid #ced4da',
                              borderRadius: '0.25rem',
                              padding: '0.5rem',  // Adjust padding to decrease height
                              fontSize: '0.875rem', // Optional: smaller font size
                              lineHeight: '1.25'   // Optional: adjust line height
                            }}
                          />
                        </div>
                        <h3 className="mb-5" style={{color:"red"}}>Terms and Conditions</h3>
                        <div className="form-outline mb-3">
                          <input
                            type="checkbox"
                            id="termsCheckbox"
                            name="termsCheckbox"
                            onChange={handleAcceptTerms}
                            disabled={!hasViewedTerms}
                            checked={acceptedTerms}
                          />
                          <label htmlFor="termsCheckbox" className="form-check-label ms-2">
                            I accept the <Link href="/Images/Terms and Condition.pdf" target="_blank" onClick={handleViewTerms}>Terms and Conditions</Link><br />
                          </label>
                        </div>

                        <h3 className="mb-5" style={{color:"red"}}>Privacy Policy</h3>
                        <div className="form-outline mb-3">
                          <input
                            type="checkbox"
                            id="privacyPolicyCheckbox"
                            name="privacyPolicyCheckbox"
                            onChange={handleAcceptTerms}
                            disabled={!hasViewedTerms}
                            checked={acceptedTerms}
                          />
                          <label htmlFor="privacyPolicyCheckbox" className="form-check-label ms-2">
                            I accept the <Link href="/Images/Privacy Policy.pdf" target="_blank" onClick={handleViewTerms}>Privacy Policy</Link><br />
                          </label>
                        </div>

                      </>
                    )}

                    <div className="d-flex align-items-center justify-content-between mt-4">
                      {currentStep > 1 && (
                        <button type="button" className="btn btn-warning btn-lg me-3" onClick={prevStep}>
                          Previous
                        </button>
                      )}
                      {currentStep > 1 && currentStep < totalSteps && (
                        <button type="button" className="btn btn-warning btn-lg me-3" onClick={nextStep}>
                          Next
                        </button>
                      )}
                      {currentStep === totalSteps && (
                        <>
                          <Link href="/details">
                            <button type="button" className="btn btn-warning btn-lg me-3">
                              View Details
                            </button>
                          </Link>
                          <button type="submit" className="btn btn-warning btn-lg me-3">
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
    </section>
  );
};

export default Register;
