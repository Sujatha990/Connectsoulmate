"use client";
import React, { useState } from 'react';
import "./register.css";

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

    // Add other form fields here as needed
  });
  const [currentStep, setCurrentStep] = useState(1); // State to track current step

  const totalSteps = 7; 
  // Total number of steps in your form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
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

  return (
    <div>
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
                          <div className="form-group"style={{ marginBottom: '20px' }}>
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
                              required
                            >
                              <option value="">Select Caste</option>
                              <option value="Brahmin">Brahmin</option>
                              <option value="Kshatriya">Kshatriya</option>
                              <option value="Vaishya">Vaishya</option>
                              <option value="Shudra">Shudra</option>
                              <option value="Kayastha">Kayastha</option>
                              <option value="Baniya">Baniya</option>
                              <option value="Rajput">Rajput</option>
                              <option value="Jat">Jat</option>
                              <option value="Maratha">Maratha</option>
                              <option value="Others">Others</option>
                            </select>
                          </div>

                          <div className="form-group">
                            <label htmlFor="gothram">Gothram</label>
                            <select
                              className="form-control"
                              id="gothram"
                              name="gothram"
                              value={formData.gothram}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select Gothram</option>
                              <option value="Bharadwaja">Bharadwaja</option>
                              <option value="Kashyapa">Kashyapa</option>
                              <option value="Vashishta">Vashishta</option>
                              <option value="Gautama">Gautama</option>
                              <option value="Atri">Atri</option>
                              <option value="Vishwamitra">Vishwamitra</option>
                              <option value="Jamadagni">Jamadagni</option>
                              <option value="Angirasa">Angirasa</option>
                              <option value="Bhrigu">Bhrigu</option>
                              <option value="Others">Others</option>
                            </select>
                          </div>

                          <div className="form-group">
                            <label htmlFor="dosh">Dosh</label>
                            <select
                              className="form-control"
                              id="dosh"
                              name="dosh"
                              value={formData.dosh}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select Dosh</option>
                              <option value="Manglik">Manglik</option>
                              <option value="Kaal Sarp">Kaal Sarp</option>
                              <option value="Nadi">Nadi</option>
                              <option value="Pitra">Pitra</option>
                              <option value="Sade Sati">Sade Sati</option>
                              <option value="Mangal Dosha">Mangal Dosha</option>
                              <option value="Shani Dosha">Shani Dosha</option>
                              <option value="Rahu Dosha">Rahu Dosha</option>
                              <option value="Ketu Dosha">Ketu Dosha</option>
                              <option value="None">None</option>
                            </select>
                          </div>
                        </>
                      )}
                      {currentStep === 4 && (
                        <>
                          <h3 className="mb-5 text-uppercase"></h3>
                          <h2 className="text-center mb-4"> Personal details get your partner the right matches</h2>
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
                              <option value="single">Single</option>
                              <option value="married">Married</option>
                              <option value="divorced">Divorced</option>
                              <option value="widowed">Widowed</option>
                              <option value="separated">Separated</option>
                              <option value="annulled">Annulled</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="height">Height (cm)</label>
                            <input
                              type="number"
                              className="form-control"
                              id="height"
                              name="height"
                              value={formData.height}
                              onChange={handleChange}
                              placeholder="Enter your height in cm"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="familyStatus">Family

                              {/* Continued from Step 3 */}
                              Status</label>
                            <select
                              className="form-control"
                              id="familyStatus"
                              name="familyStatus"
                              value={formData.familyStatus}
                              onChange={handleChange}
                            >
                              <option value="">Select Family Status</option>
                              <option value="lowerClass">Lower Class</option>
                              <option value="middleClass">Middle Class</option>
                              <option value="upperMiddleClass">Upper Middle Class</option>
                              <option value="rich">Rich</option>
                              <option value="affluent">Affluent</option>
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
                              <option value="joint">Joint Family</option>
                              <option value="nuclear">Nuclear Family</option>
                              <option value="extended">Extended Family</option>
                              <option value="singleParent">Single Parent Family</option>
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
                              <option value="traditional">Traditional</option>
                              <option value="moderate">Moderate</option>
                              <option value="liberal">Liberal</option>
                              <option value="conservative">Conservative</option>
                            </select>
                          </div>

                          <div className="form-group">
                            <label htmlFor="disability">Any Disability</label>
                            <select
                              className="form-control"
                              id="disability"
                              name="disability"
                              value={formData.disability}
                              onChange={handleChange}
                            >
                              <option value="">Select Disability Status</option>
                              <option value="none">None</option>
                              <option value="visual">Visual Impairment</option>
                              <option value="hearing">Hearing Impairment</option>
                              <option value="physical">Physical Disability</option>
                              <option value="learning">Learning Disability</option>
                              <option value="mental">Mental Disability</option>
                              <option value="speech">Speech Impairment</option>
                              <option value="multiple">Multiple Disabilities</option>
                            </select>
                          </div>
                          </>
                      )}
                          {currentStep === 5 && (
                            <>
                              <h2 className="text-center mb-4">Professional details help your partner get relevant matches</h2>
                             
                              <div className="form-group">
                                <label htmlFor="highestEducation">Highest Education</label>
                                <select
                                  className="form-control"
                                  id="highestEducation"
                                  name="highestEducation"
                                  value={formData.highestEducation}
                                  onChange={handleChange}
                                >
                                  <option value="">Select your highest education</option>
                                  <option value="highSchool">High School</option>
                                  <option value="bachelor">Bachelor's Degree</option>
                                  <option value="master">Master's Degree</option>
                                  <option value="phd">PhD</option>
                                  <option value="other">Other</option>
                                </select>
                              </div>

                              <div className="form-group">
                                <label htmlFor="employedIn">Employed in</label>
                                <select
                                  className="form-control"
                                  id="employedIn"
                                  name="employedIn"
                                  value={formData.employedIn}
                                  onChange={handleChange}
                                >
                                  <option value="">Select your employment sector</option>
                                  <option value="government">Government</option>
                                  <option value="private">Private</option>
                                  <option value="selfEmployed">Self-Employed</option>
                                  <option value="unemployed">Unemployed</option>
                                  <option value="student">Student</option>
                                </select>
                              </div>

                              <div className="form-group">
                                <label htmlFor="occupation">Occupation</label>
                                <select
                                  className="form-control"
                                  id="occupation"
                                  name="occupation"
                                  value={formData.occupation}
                                  onChange={handleChange}
                                >
                                  <option value="">Select your occupation</option>
                                  <option value="engineer">Engineer</option>
                                  <option value="doctor">Doctor</option>
                                  <option value="teacher">Teacher</option>
                                  <option value="manager">Manager</option>
                                  <option value="other">Other</option>
                                </select>
                              </div>

                              <div className="form-group">
                                <label htmlFor="annualIncome">Annual Income</label>
                                <select
                                  className="form-control"
                                  id="annualIncome"
                                  name="annualIncome"
                                  value={formData.annualIncome}
                                  onChange={handleChange}
                                >
                                  <option value="">Select your annual income</option>
                                  <option value="<2L">Less than ₹2,00,000</option>
                                  <option value="2L-5L">₹2,00,000 - ₹5,00,000</option>
                                  <option value="5L-10L">₹5,00,000 - ₹10,00,000</option>
                                  <option value="10L-20L">₹10,00,000 - ₹20,00,000</option>
                                  <option value=">20L">More than ₹20,00,000</option>
                                </select>
                              </div>
                            </>
                          )}
                            {currentStep === 6 && (
                  <>
                    <h2 className="text-center mb-4">Let's write something interesting about yourself</h2>

                    <div className="form-group">
                      <label htmlFor="aboutYourself">About Yourself</label>
                      <textarea
                        className="form-control"
                        id="aboutYourself"
                        name="aboutYourself"
                        value={formData.aboutYourself}
                        onChange={handleChange}
                        placeholder="Tell us something about yourself"
                      />
                    </div>
                  </>
                )}
                  {currentStep === 7 && (
                  <>
                    <h2 className="text-center mb-4">Photo Upload</h2>

                    <div className="form-group">
                      <label htmlFor="photo">Upload Photo</label>
                      <input
                        type="file"
                        className="form-control-file"
                        id="photo"
                        name="photo"
                        onChange={handleChange}
                        accept="image/*" // Allow only image files
                      />
                    </div>
                  </>
                )}
                          <div className="d-flex justify-content-between align-items-center mt-4">
                            {currentStep > 1 && (
                              <button
                                type="button"
                                className="btn btn-warning btn-lg ms-2"
                                onClick={prevStep}
                              >
                                Previous
                              </button>
                            )}
                            {currentStep < totalSteps && (
                              <button
                                type="button"
                                className="btn btn-warning btn-lg ms-2"
                                onClick={nextStep}
                              >
                                Next
                              </button>
                            )}
                            {currentStep === totalSteps && (
                              <button
                                type="button"
                                className="btn btn-warning btn-lg ms-2"
                                onClick={handleSubmit} // Ensure handleSubmit is called on submit
                              >
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
    </div>
  );
};

export default Register;
