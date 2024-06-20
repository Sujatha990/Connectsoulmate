"use client";
import React, { useState } from 'react';
import "./register.css";
import Link from 'next/link';

const Register = () => {
  const [formData, setFormData] = useState({
    profile: '',
    firstName: '',
    phoneNumber: '',
    gender: '',
    state: '',
    city: '',
    dateOfBirth: '',
    religion: '',
    motherTongue: '',
    email: '',
    password: '',
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
  
  const [currentStep, setCurrentStep] = useState(1); // State to track current step
  const [hasViewedTerms, setHasViewedTerms] = useState(false); // State to track if terms have been viewed
  const [acceptedTerms, setAcceptedTerms] = useState(false); // State to track if terms checkbox is checked
  
  const totalSteps = 7; // Total number of steps in your form

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

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // Example logic to handle form submission
    console.log('Form submitted', formData);
    // Reset form or navigate to success page, etc.
  };

  const handleViewTerms = () => {
    setHasViewedTerms(true);
  };

  const handleAcceptTerms = (e) => {
    setAcceptedTerms(e.target.checked);
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
                      alt="Sample photo"
                      className="img-fluid"
                      style={{ maxWidth: "100%", height: "800px", borderRadius: ".25rem" }}
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      {currentStep === 1 && (
                        <>
                          <h3 className="mb-5 text-uppercase " style={{textAlign:'center',fontSize:"50px",color:"red",marginBottom:"20px"}}>Register</h3>
                          <h2 className="text-center mb-4">Find your perfect match</h2>
                          <div className="form-group" style={{ marginBottom: '20px' }}>
                            <label htmlFor="profile">Select Profile</label>
                            <select
                              className="form-control"
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
                          </div>
                          <div className="form-group" style={{ marginBottom: '20px' }}>
                            <label htmlFor="firstName">Name</label>
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
                          <div className="form-group">
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
                          {/* Other input fields for step 1 */}
                        </>
                      )}
                      {currentStep === 2 && (
                        <>
                          <h3 className="mb-5 text-uppercase"></h3>
                          <h2 className="text-center mb-4">Please provide us with your basic details</h2>
                          <div className="form-group">
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
                          <div className="form-group">
                            <label htmlFor="religion">Religion</label>
                            <select
                              className="form-control"
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
                          </div>
                          <div className="form-group">
                            <label htmlFor="motherTongue">Mother Tongue</label>
                            <select
                              className="form-control"
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
                          </div>
                          <div className="form-group">
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
                          <div className="form-group">
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
                          <div className="form-group">
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
                          <div className="form-group">
                            <label htmlFor="caste">Caste</label>
                            <select
                              className="form-control"
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
                          </div>
                          <div className="form-group">
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
                          <div className="form-group">
                            <label htmlFor="dosh">Dosh</label>
                            <select
                              className="form-control"
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
                          </div>
                        </>
                      )}
                      {currentStep === 4 && (
                        <>
                          <h3 className="mb-5 text-uppercase"></h3>
                          <h2 className="text-center mb-4">Personal Information</h2>
                          <div className="form-group">
                            <label htmlFor="maritalStatus">Marital Status</label>
                            <select
                              className="form-control"
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
                          </div>
                          <div className="form-group">
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
                          <div className="form-group">
                            <label htmlFor="familyStatus">Family Status</label>
                            <select
                              className="form-control"
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
                          </div>
                          <div className="form-group">
                            <label htmlFor="familyType">Family Type</label>
                            <select
                              className="form-control"
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
                          <div className="form-group">
                            <label htmlFor="familyValues">Family Values</label>
                            <select
                              className="form-control"
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
                          </div>
                          <div className="form-group">
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
                      {currentStep === 5 && (
                        <>
                          <h3 className="mb-5 text-uppercase"></h3>
                          <h2 className="text-center mb-4">Education and Occupation details help us find better matches</h2>
                          <div className="form-group">
                            <label htmlFor="highestEducation">Highest Education</label>
                            <select
                              className="form-control"
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
                          </div>
                          <div className="form-group">
                            <label htmlFor="employedIn">Employed In</label>
                            <select
                              className="form-control"
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
                          </div>
                          <div className="form-group">
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
                          <div className="form-group">
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
                          <div className="form-group">
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
                          <div className="form-group">
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
                          <div className="form-group">
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
                        {currentStep < totalSteps && (
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
        </section>
      );
    };

    export default Register;

