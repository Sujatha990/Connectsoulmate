"use client";
import React, { useState } from 'react';
import "./register.css";
import { userExists } from './ValidationUtlis';
import dummydata from './Registerdummydata/dummydata';

const Register = () => {
  const [formData, setFormData] = useState({
    profile: '',
    firstName: '',
    surName: '',
    age: '',
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

  const [error, setError] = useState('');
  const [storedData, setStoredData] = useState(dummydata);
  const [showRegisterSuccess, setShowRegisterSuccess] = useState(false);
  const [showFormDetails, setShowFormDetails] = useState(false);

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

  const handleRegister = (event) => {
    event.preventDefault();

    if (userExists(formData.email)) {
      setError('Email already exists. Please try a different email.');
    } else if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
    } else {
      const updatedStoredData = [...storedData, formData];
      setStoredData(updatedStoredData);
      setError('');
      setShowRegisterSuccess(true);
    }
  };

  const handleViewFormDetails = () => {
    setShowFormDetails(true);
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
                    <h1 className="mb-5 text-uppercase display-4">Register</h1>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleRegister}>
                      <div className="form-group mb-3">
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
                      {/* Other form fields */}
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
                      {/* Additional fields... */}
                      <div className="d-flex align-items-center">
                        <button type="submit" className="btn btn-warning btn-lg me-3">
                          Register
                        </button>
                      </div>
                    </form>
                    {showRegisterSuccess && (
                      <div className="alert alert-success mt-3">
                        Registration Successful!
                        <button className="btn btn-info ms-3" onClick={handleViewFormDetails}>
                          View Details
                        </button>
                      </div>
                    )}
                    {showFormDetails && (
                      <div className="form-details mt-3">
                        <h2>Form Details</h2>
                        <pre>{JSON.stringify(formData, null, 2)}</pre>
                        <button onClick={() => setShowFormDetails(false)} className="btn btn-secondary mt-2">
                          Close
                        </button>
                      </div>
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

export default Register;
