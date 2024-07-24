"use client";
import React, { useState } from 'react';
import "./register.css";
import Link from 'next/link';
import { userExists } from './ValidationUtlis';
import Registerdisplaydata from './Registerdisplaydata';
import dummydata from './Registerdummydata/dummydata';



const Register = () => {
  const [formData, setFormData] = useState({
    profile: '',
    firstName: '',
    age: '',
    address: '',
    city: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    state: '',
    dateOfBirth: '',
    religion: '',
    motherTongue: '',
    familyDetails: '',
    caste: '',
    gothram: '',
    dosh: '',
    maritalStatus: '',
    height: '',
    familyStatus: '',
    familyType: '',
    familyValues: '',
    disability: '',
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

  const totalSteps = 7;

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

  const handleRegister = (event) => {
    event.preventDefault();

    if (userExists(formData.email)) {
      setError('Email already exists. Please try a different email.');
    } else if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
    } else {
      alert('Registration successful');
      const updatedStoredData = [...storedData, formData];
      setStoredData(updatedStoredData);
      setShowRegisterSuccess(true);
      setFormData({
        profile: '',
        firstName: '',
        age: '',
        address: '',
        city: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        state: '',
        dateOfBirth: '',
        religion: '',
        motherTongue: '',
        familyDetails: '',
        caste: '',
        gothram: '',
        dosh: '',
        maritalStatus: '',
        height: '',
        familyStatus: '',
        familyType: '',
        familyValues: '',
        disability: '',
        highestEducation: '',
        employedIn: '',
        occupation: '',
        annualIncome: '',
        aboutYourself: '',
        photo: null,
      });
      setError('');
      setCurrentStep(2);
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (

    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src="Images/GMing.jpg"
                    alt="Sample"
                    className="img-fluid"
                    style={{ maxWidth: "100%", height: "800px", borderRadius: ".25rem" }}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    {currentStep === 1 && (
                      <>
                        <div className="flex-container">
                          <h3 className="mb-5 text-uppercase display-4" style={{ fontSize: "30px", color: "red", marginBottom: "10px" }}>
                            Register /
                          </h3>
                          <Link className="mb-5 text-uppercase display-4" style={{ textDecoration: "none", fontSize: "30px", color: "red" }} href="/uploaddocument">
                            Upload Document
                          </Link>
                        </div>
                        <h2 className="text-center mb-4">Find your perfect match</h2>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <form onSubmit={handleRegister}>
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
                            <label htmlFor="firstName">First Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              placeholder="Enter first name"
                              required
                            />
                          </div>

                          <div className="form-group mb-3">
                            <label htmlFor="age">Age</label>
                            <input
                              type="number"
                              className="form-control"
                              id="age"
                              name="age"
                              value={formData.age}
                              onChange={handleChange}
                              placeholder="Enter age"
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
                          </div>

                          <div className="form-group mb-3">
                            <label htmlFor="confirmPassword">Re-Enter Password</label>
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
                        <div className="form-group " style={{ marginBottom: '20px' }}>
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
                              <option value="">Select Religion</option>
                              <option value="Christianity">Christianity</option>
                              <option value="Islam">Islam</option>
                              <option value="Hinduism">Hinduism</option>
                              <option value="Buddhism">Buddhism</option>
                              <option value="Judaism">Judaism</option>
                              <option value="Other">Other</option>
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
                              <option value="english">English</option>
                              <option value="spanish">Spanish</option>
                              <option value="mandarin">Mandarin</option>
                              <option value="hindi">Hindi</option>
                              <option value="arabic">Arabic</option>
                              <option value="portuguese">Portuguese</option>
                              <option value="bengali">Bengali</option>
                              <option value="russian">Russian</option>
                              <option value="japanese">Japanese</option>
                              <option value="punjabi">Punjabi</option>
                            </select>
                            <div className="arrow-container">
                              <div className="arrow-wrapper">
                                <div className="arrow"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '20px' }}>
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
                        <h2 className="text-center mb-4">Religion/Caste details help us find better matches</h2>
                        <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                          <label htmlFor="caste">Caste</label>
                          <div className="position-relative">

                            <select
                              className="form-control form-control-arrow"
                              id="caste"
                              name="caste"
                              value={formData.caste}
                              onChange={handleChange}
                            >
                              <option value="">Select Caste</option>
                              <option value="Brahmin">Brahmin</option>
                              <option value="Kshatriya">Kshatriya</option>
                              <option value="Vaishya">Vaishya</option>
                              <option value="Shudra">Shudra</option>
                              <option value="Other">Other</option>
                            </select>
                            <div className="arrow-container">
                              <div className="arrow-wrapper">
                                <div className="arrow"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group" style={{ marginBottom: '20px' }}>
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
                          <label htmlFor="dosh">Dosh</label>
                          <div className="position-relative">

                            <select
                              className="form-control form-control-arrow"
                              id="dosh"
                              name="dosh"
                              value={formData.dosh}
                              onChange={handleChange}
                            >
                              <option value="">Select Dosh</option>
                              <option value="Manglik">Manglik</option>
                              <option value="Nadi">Nadi</option>
                              <option value="Kaal Sarp">Kaal Sarp</option>
                              <option value="Pitra">Pitra</option>
                              <option value="None">None</option>
                            </select>
                            <div className="arrow-container">
                              <div className="arrow-wrapper">
                                <div className="arrow"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    {currentStep === 4 && (
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
                              onChange={handleChange}
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
                        <div className="form-group" style={{ marginBottom: '20px' }}>
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
                          <label htmlFor="familyStatus">Family Status</label>
                          <div className="position-relative">

                            <select
                              className="form-control form-control-arrow"
                              id="familyStatus"
                              name="familyStatus"
                              value={formData.familyStatus}
                              onChange={handleChange}
                            >
                              <option value="">Select Family Status</option>
                              <option value="Middle Class">Middle Class</option>
                              <option value="Upper Middle Class">Upper Middle Class</option>
                              <option value="Rich">Rich</option>
                              <option value="Affluent">Affluent</option>
                            </select>
                            <div className="arrow-container">
                              <div className="arrow-wrapper">
                                <div className="arrow"></div>
                              </div>
                            </div>
                          </div>
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
                          <div className="form-group mb-3" style={{ marginBottom: '20px' }}>
                            <label htmlFor="familyValues">Family Values</label>
                            <div className="position-relative">

                            <select
                              className="form-control form-control-arrow"
                              id="familyValues"
                              name="familyValues"
                              value={formData.familyValues}
                              onChange={handleChange}
                            >
                              <option value="">Select Family Values</option>
                              <option value="Orthodox">Orthodox</option>
                              <option value="Traditional">Traditional</option>
                              <option value="Moderate">Moderate</option>
                              <option value="Liberal">Liberal</option>
                            </select>
                            <div className="arrow-container">
                              <div className="arrow-wrapper">
                                <div className="arrow"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group" style={{ marginBottom: '20px' }}>
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
                        </div>
                      </>
                    )}
                    {currentStep === 5 && (
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
                            >
                              <option value="">Select Highest Education</option>
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
                          >
                            <option value="">Select Employment</option>
                            <option value="Government">Government</option>
                            <option value="Private">Private</option>
                            <option value="Business">Business</option>
                            <option value="Self-employed">Self-employed</option>
                            <option value="Not working">Not working</option>
                          </select>
                          <div className="arrow-container">
      <div className="arrow-wrapper">
        <div className="arrow"></div>
      </div>
    </div>
  </div>
                        </div>
                        <div className="form-group" style={{ marginBottom: '20px' }}>
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
                        <div className="form-group" style={{ marginBottom: '20px' }}>
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
                        <div className="form-group" style={{ marginBottom: '20px' }}>
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
                    {currentStep === 6 && (
                      <>
                        <h3 className="mb-5 text-uppercase"></h3>
                        <h2 className="text-center mb-4">Upload Photo</h2>
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
                      </>
                    )}
                    {currentStep === 7 && (
                      <>
                        <h3 className="mb-5 text-uppercase"></h3>
                        <h2 className="text-center mb-4">Terms And Conditions</h2>
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
                            I accept the <Link href="Images/Terms&Condition.pdf" target="_blank" onClick={handleViewTerms}>Terms and Conditions</Link>
                          </label>
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
                        <button type="button" className="btn btn-warning btn-lg ms-2">
                          Submit
                        </button>
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

