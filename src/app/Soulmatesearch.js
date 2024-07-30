"use client";
import React, { useState } from 'react';
import "./search.css";
import dummydata from './Soulmatedummydata/dummydata';
import Soulmateseachdisplay from './Soulmateseachdisplay';

const Soulmatesearch = () => {
    const [selectedOption, setSelectedOption] = useState('soulmate');
    const [formData, setFormData] = useState({
        gender: '',
        age: '',
        height: '',
        maritalStatus: '',
        religion: '',
        motherTongue: '',
        caste: '',
        state: '',
        districtCity: '',
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

        const updatedData = {
            gender: formData.gender,
            age: formData.age,
            height: formData.height,
            maritalStatus: formData.maritalStatus,
            religion: formData.religion,
            motherTongue: formData.motherTongue,
            caste: formData.caste,
            state: formData.state,
            districtCity: formData.districtCity,
            education: formData.education
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
            state: '',
            districtCity: '',
            education: ''
        });

        // Show search results
        setShowSearchResults(true);
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "600px", margin: "0 auto", borderRadius: "5px", padding: "20px" }}>
            <h2>Search</h2>

            {showSearchResults ? (
                <Soulmateseachdisplay storedData={storedData} />
            ) : (
                <div>
                    <div className="btn-group btn-group-toggle d-flex flex-wrap" data-toggle="buttons">
                        <label className={`btn btn-primary ${selectedOption === 'soulmate' ? 'active' : ''}`}>
                            <input
                                type="radio"
                                name="searchOptions"
                                id="soulmateSearchOption"
                                autoComplete="off"
                                checked={selectedOption === 'soulmate'}
                                onChange={() => setSelectedOption('soulmate')}
                            /> Soulmate Search
                        </label>
                    </div>

                    <form className="mt-4" onSubmit={handleSubmit}>
                        {selectedOption === 'soulmate' && (
                            <div id="soulmateSearch" className="search-section">
                                <div className="form-group">
                                    <label htmlFor="gender">Gender</label>
                                    <select className="form-control" id="gender" value={formData.gender} onChange={handleInputChange}>
                                        <option value="">Select Gender</option>
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
                                        <option value="islam">Islam</option>
                                        <option value="christianity">Christianity</option>
                                        <option value="sikhism">Sikhism</option>
                                        <option value="buddhism">Buddhism</option>
                                        <option value="jainism">Jainism</option>
                                        <option value="zoroastrianism">Zoroastrianism</option>
                                        <option value="judaism">Judaism</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="motherTongue">Mother Tongue</label>
                                    <select className="form-control" id="motherTongue" value={formData.motherTongue} onChange={handleInputChange}>
                                        <option value="">Select Mother Tongue</option>
                                        <option value="kannada">Kannada</option>
                                        <option value="telugu">Telugu</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="caste">Caste</label>
                                    <select className="form-control" id="caste" value={formData.caste} onChange={handleInputChange}>
                                        <option value="">Select Caste</option>
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
                                    <label htmlFor="state">State</label>
                                    <select className="form-control" id="state" value={formData.state} onChange={handleInputChange}>
                                        <option value="">Select State</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Telangana">Telangana</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="districtCity">District</label>
                                    <select className="form-control" id="districtCity" value={formData.districtCity} onChange={handleInputChange}>
                                        <option value="">Select District</option>
                                        <option value="Bengaluru">Bengaluru</option>
                                        <option value="Mysuru">Mysuru</option>
                                        <option value="Mangaluru">Mangaluru</option>
                                        <option value="Hubballi">Hubballi</option>
                                        <option value="Belagavi">Belagavi</option>
                                        <option value="Shivamogga">Shivamogga</option>
                                        <option value="Visakhapatnam">Visakhapatnam</option>
                                        <option value="Vijayawada">Vijayawada</option>
                                        <option value="Guntur">Guntur</option>
                                        <option value="Nellore">Nellore</option>
                                        <option value="Kurnool">Kurnool</option>
                                        <option value="Tirupati">Tirupati</option>
                                        <option value="Hyderabad">Hyderabad</option>
                                        <option value="Warangal">Warangal</option>
                                        <option value="Nizamabad">Nizamabad</option>
                                        <option value="Khammam">Khammam</option>
                                        <option value="Karimnagar">Karimnagar</option>
                                        <option value="Nalgonda">Nalgonda</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="education">Education</label>
                                    <select className="form-control" id="education" value={formData.education} onChange={handleInputChange}>
                                        <option value="">Select Education</option>
                                        <option value="Primary">Primary</option>
                                        <option value="Secondary">Secondary</option>
                                        <option value="Higher Secondary">Higher Secondary</option>
                                        <option value="Diploma">Diploma</option>
                                        <option value="Undergraduate">Undergraduate</option>
                                        <option value="Postgraduate">Postgraduate</option>
                                        <option value="Doctorate">Doctorate</option>
                                    </select>
                                </div>
                        
                        

                        <button type="submit" className="btn btn-primary mt-3">Search</button>
                        </div>
                        )}
                    </form>

                </div>
            )}
        </div>
    );
};

export default Soulmatesearch;
