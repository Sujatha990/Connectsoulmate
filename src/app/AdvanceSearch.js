"use client"
import React from 'react'
import "./search.css";
import { useState } from 'react';
import dummydata from './Advancedummydata/dummydata';
import Advanceserchdisplaypage from './Advanceserchdisplaypage';


const AdvanceSearch = () => {
  const [selectedOption, setSelectedOption] = useState('advanced');
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    height: '',
    maritalStatus: '',
    religion: '',
    motherTongue: '',
    caste: '',
    education: '',
    physicalStatus: '',
    employedIn: '',
    occupation: '',
    annualIncome: '',
    zodiacSign: '',
    nakshatra: '',
    gothra: '',
    habits: '',
    showProfile: ''
  });
  const [storedData, setStoredData] = useState(dummydata);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
      gender: formData.gender,
      age: formData.age,
      height: formData.height,
      maritalStatus: formData.maritalStatus,
      religion: formData.religion,
      motherTongue: formData.motherTongue,
      caste: formData.caste,
      education: formData.education,
      physicalStatus: formData.physicalStatus,
      employedIn: formData.employedIn,
      occupation: formData.occupation,
      annualIncome: formData.annualIncome,
      zodiacSign: formData.zodiacSign,
      nakshatra: formData.nakshatra,
      gothra: formData.gothra,
      habits: formData.habits,
      showProfile: formData.showProfile
    };

    const updatedStoredData = [...storedData, updatedData];
    setStoredData(updatedStoredData);

    // Clear the form fields after submission (optional)
    setFormData({
      gender: '',
      age: '',
      height: '',
      maritalStatus: '',
      religion: '',
      motherTongue: '',
      caste: '',
      education: '',
      physicalStatus: '',
      employedIn: '',
      occupation: '',
      annualIncome: '',
      zodiacSign: '',
      nakshatra: '',
      gothra: '',
      habits: '',
      showProfile: ''
    });

    // Show search results
    setShowSearchResults(true);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px", margin: "0 auto", borderRadius: "5px", padding: "20px" }}>
      <h2>Search</h2>
      {showSearchResults ? (
        <Advanceserchdisplaypage storedData={storedData} />
      ) : (
      
        <div>
          <div className="btn-group btn-group-toggle d-flex flex-wrap" data-toggle="buttons">
            
            <label className={`btn btn-primary ${selectedOption === 'advanced' ? 'active' : ''}`}>
              <input
                type="radio"
                name="searchOptions"
                id="advancedSearchOption"
                autoComplete="off"
                checked={selectedOption === 'advanced'}
                onChange={() => setSelectedOption('advanced')}
              /> Advanced Search
            </label>
          </div>

          <form className="mt-4" onSubmit={handleSubmit}>
            {selectedOption === 'advanced' && (
              <div id="advancedSearch" className="search-section">
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select className="form-control" id="gender" value={formData.gender} onChange={handleInputChange}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input type="number" className="form-control" id="age" value={formData.age} onChange={handleInputChange} placeholder="Enter age" />
                </div>
                <div className="form-group">
                  <label htmlFor="height">Height</label>
                  <input type="text" className="form-control" id="height" value={formData.height} onChange={handleInputChange} placeholder="Enter height range" />
                </div>
                <div className="form-group">
                  <label htmlFor="maritalStatus">Marital Status</label>
                  <select className="form-control" id="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange}>
                    <option value="any">Any</option>
                    <option value="never-married">Never Married</option>
                    <option value="widowed">Widowed</option>
                    <option value="divorced">Divorced</option>
                    <option value="awaiting-divorce">Awaiting Divorce</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="religion">Religion</label>
                  <select className="form-control" id="religion" value={formData.religion} onChange={handleInputChange}>
                    <option value="">Select Religion</option>
                    <option value="hinduism">Hinduism</option>
                    <option value="christianity">Christianity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="motherTongue">Mother Tongue</label>
                  <select className="form-control" id="motherTongue" value={formData.motherTongue} onChange={handleInputChange}>
                    <option value="">Select Mother Tongue</option>
                    <option value="telugu">Telugu</option>
                    <option value="kannada">Kannada</option>
                    <option value="tamil">Tamil</option>
                    <option value="malayalam">Malayalam</option>
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="others">Others</option>

                  </select>
                
               
                <div className="form-group">
                  <label htmlFor="casteInput">Caste</label>
                  <input type="text" className="form-control" id="casteInput" value={formData.caste} onChange={handleInputChange} placeholder="Enter caste" />
                </div>
                </div>
                <div className="form-group">
                  <label htmlFor="education">Education</label>
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
                <div className="form-group">
                  <label htmlFor="physicalStatus">Physical Status</label>
                  <select className="form-control" id="physicalStatus" value={formData.physicalStatus} onChange={handleInputChange}>
                    <option value="">Select physical status</option>
                    <option value="Normal">Normal</option>
                    <option value="Physically Challenged">Physically Challenged</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="employedIn">Employed In</label>
                  <select className="form-control" id="employedIn" value={formData.employedIn} onChange={handleInputChange}>
                    <option value="">Select employment sector</option>
                    <option value="Government">Government</option>
                    <option value="Private">Private</option>
                    <option value="Business">Business</option>
                    <option value="Self Employed">Self Employed</option>
                    <option value="Not Employed">Not Employed</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="occupation">Occupation</label>
                  <select className="form-control" id="occupation" value={formData.occupation} onChange={handleInputChange}>
                    <option value="">Select occupation</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Lawyer">Lawyer</option>
                    <option value="Business">Business</option>
                    <option value="Government Employee">Government Employee</option>
                    <option value="Private Employee">Private Employee</option>
                    <option value="Self Employed">Self Employed</option>
                    <option value="Student">Student</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="annualIncome">Annual Income</label>
                  <select className="form-control" id="annualIncome" value={formData.annualIncome} onChange={handleInputChange}>
                    <option value="">Select annual income</option>
                    <option value="Below 1 Lakh">Below 1 Lakh</option>
                    <option value="1-5 Lakhs">1-5 Lakhs</option>
                    <option value="5-10 Lakhs">5-10 Lakhs</option>
                    <option value="10-20 Lakhs">10-20 Lakhs</option>
                    <option value="20-50 Lakhs">20-50 Lakhs</option>
                    <option value="50 Lakhs-1 Crore">50 Lakhs-1 Crore</option>
                    <option value="Above 1 Crore">Above 1 Crore</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="zodiacSign">Zodiac Sign</label>
                  <select className="form-control" id="zodiacSign" value={formData.zodiacSign} onChange={handleInputChange}>
                    <option value="">Select zodiac sign</option>
                    <option value="Aries">Aries</option>
                    <option value="Taurus">Taurus</option>
                    <option value="Gemini">Gemini</option>
                    <option value="Cancer">Cancer</option>
                    <option value="Leo">Leo</option>
                    <option value="Virgo">Virgo</option>
                    <option value="Libra">Libra</option>
                    <option value="Scorpio">Scorpio</option>
                    <option value="Sagittarius">Sagittarius</option>
                    <option value="Capricorn">Capricorn</option>
                    <option value="Aquarius">Aquarius</option>
                    <option value="Pisces">Pisces</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="nakshatra">Nakshatra</label>
                  <input type="text" className="form-control" id="nakshatra" value={formData.nakshatra} onChange={handleInputChange} placeholder="Enter Nakshatra" />
                </div>
                <div className="form-group">
                  <label htmlFor="gothra">Gothra</label>
                  <input type="text" className="form-control" id="gothra" value={formData.gothra} onChange={handleInputChange} placeholder="Enter Gothra" />
                </div>
                <div className="form-group">
                  <label htmlFor="habits">Habits</label>
                  <select className="form-control" id="habits" value={formData.habits} onChange={handleInputChange}>
                    <option value="">Select habits</option>
                    <option value="Smoking">Smoking</option>
                    <option value="Non-Smoking">Non-Smoking</option>
                    <option value="Occasional Smoker">Occasional Smoker</option>
                    <option value="Regular Drinker">Regular Drinker</option>
                    <option value="Non-Drinker">Non-Drinker</option>
                    <option value="Social Drinker">Social Drinker</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Non-Vegetarian">Non-Vegetarian</option>
                    <option value="Eggetarian">Eggetarian</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="showProfile">Show Profile</label>
                  <select className="form-control" id="showProfile" value={formData.showProfile} onChange={handleInputChange}>
                    <option value="">Select profile visibility</option>
                    <option value="With Photo">With Photo</option>
                    <option value="With Horoscope">With Horoscope</option>
                    <option value="Online right now">Online right now</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginTop: "30px" }}>Search</button>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
};


export default AdvanceSearch;
