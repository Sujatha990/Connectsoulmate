"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { userExists } from './ValidationUtlis';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import "./Upgradereg.css";

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

  const [passwordError, setPasswordError] = useState('');
  const [matchError, setMatchError] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
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

    localStorage.setItem('isRegistered', 'true');
    localStorage.setItem('formData', JSON.stringify(formData));

    alert('Registration successful');
    window.location.href = '/upgrade';

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
  };

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
                    width={800}
                    height={1200}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-4 text-black">
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
                          }}                        />
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
                          }}                        />
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
                          }}                        />
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
                          }}                        />
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
                          }}                        />
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
                              }}                            />
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
                              }}                            />
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
