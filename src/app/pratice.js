"use client"
import React from 'react'
import "./search2.css";
import { useState } from 'react';

function Search2() {
  const [selectedOption, setSelectedOption] = useState('regular');

  return (
    <div className="container mt-5">
      <h2>Search</h2>
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
        <label className={`btn btn-primary ${selectedOption === 'keyword' ? 'active' : ''}`}>
          <input
            type="radio"
            name="searchOptions"
            id="keywordSearchOption"
            autoComplete="off"
            checked={selectedOption === 'keyword'}
            onChange={() => setSelectedOption('keyword')}
          /> Keyword Search
        </label>
        <label className={`btn btn-primary ${selectedOption === 'id' ? 'active' : ''}`}>
          <input
            type="radio"
            name="searchOptions"
            id="searchByIdOption"
            autoComplete="off"
            checked={selectedOption === 'id'}
            onChange={() => setSelectedOption('id')}
          /> Search by ID
        </label>
        <label className={`btn btn-primary ${selectedOption === 'online' ? 'active' : ''}`}>
          <input
            type="radio"
            name="searchOptions"
            id="whoIsOnlineOption"
            autoComplete="off"
            checked={selectedOption === 'online'}
            onChange={() => setSelectedOption('online')}
          /> Who is Online
        </label>
      </div>

      <form className="mt-4">
        {selectedOption === 'regular' && (
          <div id="regularSearch" className="search-section">

            <div className="form-group">
              <label htmlFor="regularGender">Gender</label>
              <select className="form-control" id="regularGender">
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="regularAge">Age</label>
              <input type="number" className="form-control" id="regularAge" placeholder="Enter age" />
            </div>
            <div className="form-group">
              <label htmlFor="regularHeight">Height</label>
              <input type="text" className="form-control" id="regularHeight" placeholder="Enter height range" />
            </div>
            <div className="form-group">
              <label htmlFor="regularMaritalStatus">Marital Status</label>
              <select className="form-control" id="regularMaritalStatus">
                <option value="any">Any</option>
                <option value="never-married">Never Married</option>
                <option value="widowed">Widowed</option>
                <option value="divorced">Divorced</option>
                <option value="awaiting-divorce">Awaiting Divorce</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="regularReligion">Religion</label>
              <select className="form-control" id="regularReligion">
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
              <label htmlFor="regularMotherTongue">Mother Tongue</label>
              <select className="form-control" id="regularMotherTongue">
                <option value="">Select Mother Tongue</option>
                <option value="kannada">Kannada</option>
                <option value="telugu">Telugu</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="regularCaste">Caste</label>
              <select className="form-control" id="regularCaste">
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
                <option value="Brahmin">Brahmin</option>
                <option value="SC">Scheduled Caste (SC)</option>
                <option value="ST">Scheduled Tribe (ST)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="regularState">State</label>
              <select className="form-control" id="regularState">
                <option value="">Select state</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Telangana">Telangana</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="regularDistrictCity">District</label>
              <select className="form-control" id="regularDistrictCity">
                <option value="">Select district</option>
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
              <label htmlFor="regularEducation">Education</label>
              <select className="form-control" id="regularEducation">
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

            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        )}

        {selectedOption === 'advanced' && (
          <div id="advancedSearch" className="search-section">
            <div className="form-group">
              <label htmlFor="regularGender">Gender</label>
              <select className="form-control" id="regularGender">
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="regularAge">Age</label>
              <input type="number" className="form-control" id="regularAge" placeholder="Enter age" />
            </div>
            <div className="form-group">
              <label htmlFor="regularHeight">Height</label>
              <input type="text" className="form-control" id="regularHeight" placeholder="Enter height range" />
            </div>
            <div className="form-group">
              <label htmlFor="regularMaritalStatus">Marital Status</label>
              <select className="form-control" id="regularMaritalStatus">
                <option value="any">Any</option>
                <option value="never-married">Never Married</option>
                <option value="widowed">Widowed</option>
                <option value="divorced">Divorced</option>
                <option value="awaiting-divorce">Awaiting Divorce</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="regularReligion">Religion</label>
              <select className="form-control" id="regularReligion">
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
              <label htmlFor="regularMotherTongue">Mother Tongue</label>
              <select className="form-control" id="regularMotherTongue">
                <option value="">Select Mother Tongue</option>
                <option value="kannada">Kannada</option>
                <option value="telugu">Telugu</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="regularCaste">Caste</label>
              <select className="form-control" id="regularCaste">
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
                <option value="Brahmin">Brahmin</option>
                <option value="SC">Scheduled Caste (SC)</option>
                <option value="ST">Scheduled Tribe (ST)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="regularState">State</label>
              <select className="form-control" id="regularState">
                <option value="">Select state</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Telangana">Telangana</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="regularDistrictCity">District</label>
              <select className="form-control" id="regularDistrictCity">
                <option value="">Select district</option>
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
              <label htmlFor="regularEducation">Education</label>
              <select className="form-control" id="regularEducation">
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
              <select className="form-control" id="physicalStatus">
                <option value="">Select physical status</option>
                <option value="Normal">Normal</option>
                <option value="Physically Challenged">Physically Challenged</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="employedIn">Employed In</label>
              <select className="form-control" id="employedIn">
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
              <select className="form-control" id="occupation">
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
              <select className="form-control" id="annualIncome">
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
              <select className="form-control" id="zodiacSign">
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
              <select className="form-control" id="nakshatra">
                <option value="">Select nakshatra</option>
                <option value="Ashwini">Ashwini</option>
                <option value="Bharani">Bharani</option>
                <option value="Krittika">Krittika</option>
                <option value="Rohini">Rohini</option>
                <option value="Mrigashira">Mrigashira</option>
                <option value="Ardra">Ardra</option>
                <option value="Punarvasu">Punarvasu</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="gothra">Gothra</label>
              <select className="form-control" id="gothra">
                <option value="">Select gothra</option>
                <option value="Vashishta">Vashishta</option>
                <option value="Kashyapa">Kashyapa</option>
                <option value="Bharadwaj">Bharadwaj</option>
                <option value="Gautama">Gautama</option>
                <option value="Vishvamitra">Vishvamitra</option>
                <option value="Koundinya">Koundinya</option>
                <option value="Atreya">Atreya</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="habits">Habits</label>
              <select className="form-control" id="habits">
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
              <select className="form-control" id="showProfile">
                <option value="">Select profile visibility</option>
                <option value="With Photo">With Photo</option>
                <option value="With Horoscope">With Horoscope</option>
                <option value="Online right now">Online right now</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        )}

        {selectedOption === 'soulmate' && (
          <div id="soulmateSearch" className="search-section">
             <div className="form-group">
              <label htmlFor="regularGender">Gender</label>
              <select className="form-control" id="regularGender">
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="regularAge">Age</label>
              <input type="number" className="form-control" id="regularAge" placeholder="Enter age" />
            </div>
            <div className="form-group">
              <label htmlFor="regularHeight">Height</label>
              <input type="text" className="form-control" id="regularHeight" placeholder="Enter height range" />
            </div>
            <div className="form-group">
              <label htmlFor="regularMaritalStatus">Marital Status</label>
              <select className="form-control" id="regularMaritalStatus">
                <option value="any">Any</option>
                <option value="never-married">Never Married</option>
                <option value="widowed">Widowed</option>
                <option value="divorced">Divorced</option>
                <option value="awaiting-divorce">Awaiting Divorce</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="regularReligion">Religion</label>
              <select className="form-control" id="regularReligion">
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
              <label htmlFor="regularMotherTongue">Mother Tongue</label>
              <select className="form-control" id="regularMotherTongue">
                <option value="">Select Mother Tongue</option>
                <option value="kannada">Kannada</option>
                <option value="telugu">Telugu</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="regularCaste">Caste</label>
              <select className="form-control" id="regularCaste">
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
                <option value="Brahmin">Brahmin</option>
                <option value="SC">Scheduled Caste (SC)</option>
                <option value="ST">Scheduled Tribe (ST)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="regularState">State</label>
              <select className="form-control" id="regularState">
                <option value="">Select state</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Telangana">Telangana</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="regularDistrictCity">District</label>
              <select className="form-control" id="regularDistrictCity">
                <option value="">Select district</option>
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
              <label htmlFor="regularEducation">Education</label>
              <select className="form-control" id="regularEducation">
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

      
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        )}

        {selectedOption === 'keyword' && (
          <div id="keywordSearch" className="search-section">
            <div className="form-group">
              <label htmlFor="keyword">Keyword</label>
              <input type="text" className="form-control" id="keyword" placeholder="Enter keyword" />
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        )}

        {selectedOption === 'id' && (
          <div id="searchById" className="search-section">
            <div className="form-group">
              <label htmlFor="userId">User ID</label>
              <input type="text" className="form-control" id="userId" placeholder="Enter user ID" />
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        )}

        {selectedOption === 'online' && (
          <div id="whoIsOnline" className="search-section">
            <p>Showing all users who are currently online.</p>
            <button type="submit" className="btn btn-primary">Refresh</button>
          </div>
        )}
      </form>
    </div>
  );
};


















export default Search2;