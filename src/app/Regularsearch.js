"use client"
import React from 'react'
import "./search.css";
import { useState } from 'react';
import dummydata from './Regulardummydata/dummydata';
import Regularsearchdisplaypage from './Regularsearchdisplaypage';

const Regularsearch = () => {
  const [selectedOption, setSelectedOption] = useState('regular');
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    maritalStatus: '',
    religion: '',
    caste: '',
    state: '',
    education: ''
  });
  const [storedData, setStoredData] = useState(dummydata);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { rangeInput } = formData;
    const [minValue, maxValue] = rangeInput.split(',').map(value => parseInt(value.trim(), 10));
    console.log('Min Value:', minValue);
    console.log('Max Value:', maxValue);

    const updatedData = {
      gender: formData.gender,
      age: formData.age,
      maritalStatus: formData.maritalStatus,
      religion: formData.religion,
      caste: formData.caste,
      state: formData.state,
      education: formData.education
    };

    const updatedStoredData = [...storedData, updatedData];
    setStoredData(updatedStoredData);

    // Clear the form fields after submission (optional)
    setFormData({
      gender: '',
      age: '',
      maritalStatus: '',
      religion: '',
      caste: '',
      state: '',
      education: ''
    });

    // Show search results
    setShowSearchResults(true);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px", margin: "0 auto", borderRadius: "5px", padding: "20px" }}>
      <h2>Search</h2>


      <div>
        <div className="btn-group btn-group-toggle d-flex flex-wrap" data-toggle="buttons">
          <label className={`btn btn-primary ${selectedOption === 'regular' ? 'active' : ''}`}>
            <input
              type="radio"
              name="searchOptions"
              id="regularSearchOption"
              autoComplete="off"
              checked={selectedOption === 'regular'}
              onChange={() => setSelectedOption('regular')}
            /> Regular Search
          </label>
        </div>

        <form className="mt-4" onSubmit={handleSubmit}>
          {selectedOption === 'regular' && (
            <div id="regularSearch" className="search-section">

              <div className="form-group">
                <label htmlFor="regularGender">Gender</label>
                <select className="form-control" id="gender" value={formData.gender} onChange={handleInputChange}>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="rangeInput"> Age with Min and Max Values (comma separated)</label>
                <input
                  type="text"
                  className="form-control"
                  id="rangeInput"
                  value={formData.rangeInput}
                  onChange={handleInputChange}
                  placeholder="enter the Age in between values, e.g., 10, 100"
                  required // Ensures the field is required
                />
              </div>
              <div className="form-group">
                <label htmlFor="regularMaritalStatus">Marital Status</label>
                <select className="form-control" id="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange}>
                  <option value="any">Any</option>
                  <option value="never-married">Never Married</option>
                  <option value="widowed">Widowed</option>
                  <option value="divorced">Divorced</option>
                  <option value="awaiting-divorce">Awaiting Divorce</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="regularReligion">Religion</label>
                <select className="form-control" id="religion" value={formData.religion} onChange={handleInputChange}>
                  <option value="">Select Religion</option>
                  <option value="hinduism">Hinduism</option>
                  <option value="christianity">Christianity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="regularCaste">Caste</label>
                <select className="form-control" id="caste" value={formData.caste} onChange={handleInputChange}>
                  <option value="">Select caste</option>
                  <option value="Vokkaliga">Vokkaliga</option>
                  <option value="Lingayat">Lingayat</option>
                  <option value="Kuruba">Kuruba</option>
                  <option value="Ediga">Ediga</option>
                  <option value="Brahmin">Brahmin</option>
                  <option value="SC">Scheduled Caste (SC)</option>
                  <option value="ST">Scheduled Tribe (ST)</option>
                  <option value="Kamma">Kamma</option>
                  <option value="Reddy">Reddy</option>
                  <option value="Kapu">Kapu</option>
                  <option value="Balija">Balija</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="regularState">State</label>
                <select className="form-control" id="state" value={formData.state} onChange={handleInputChange}>
                  <option value="">Select state</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Telangana">Telangana</option>
                  <option value="others">other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="regularEducation">Education</label>
                <select className="form-control" id="education" value={formData.education} onChange={handleInputChange}>
                  <option value="">Select education</option>
                  <option value="Primary">Primary</option>
                  <option value="Secondary">Secondary</option>
                  <option value="Higher Secondary">Higher Secondary</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Postgraduate">Postgraduate</option>
                  <option value="Doctorate">Doctorate</option>
                  <option value="BE/B.Tech from VTU">BE/B.Tech from VTU (Karnataka)</option>
                  <option value="MBBS from RGUHS">MBBS from RGUHS (Karnataka)</option>
                  <option value="MBA from Bangalore University">MBA from Bangalore University</option>
                  <option value="B.Tech from JNTU">B.Tech from JNTU (Andhra Pradesh)</option>
                  <option value="MBBS from NTRUHS">MBBS from NTRUHS (Andhra Pradesh)</option>
                  <option value="MBA from Andhra University">MBA from Andhra University</option>
                  <option value="B.Tech from JNTUH">B.Tech from JNTUH (Telangana)</option>
                  <option value="MBBS from KNRUHS">MBBS from KNRUHS (Telangana)</option>
                  <option value="MBA from Osmania University">MBA from Osmania University</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary" style={{ marginTop: "30px" }}>Search</button>
            </div>
          )}
        </form>
      </div>

    </div>
  );
};

export default Regularsearch;
