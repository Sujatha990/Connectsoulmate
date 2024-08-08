"use client"
import React from 'react'
import "./search.css";
import { useState ,useEffect} from 'react';
import Link from 'next/link';
import Regularsearch from './Regularsearch';
import AdvanceSearch from './AdvanceSearch';
import Keywordsearch from './Keywordsearch';

function Search() {
  const [selectedOption, setSelectedOption] = useState('regular');
  const [isAuthenticated, setIsAuthenticated] = useState(false);



  useEffect(() => {
    const checkAuthentication = () => {
      // Simulate fetching authentication status from localStorage or context
      const userAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(userAuthenticated);
    };

    checkAuthentication();
  }, []);

  const handleOptionChange = (option) => {
    if (isAuthenticated) {
        setSelectedOption(option);
      } else {
    // Alert message and redirection logic
    alert('Please login to continue.');
    // Redirect to the login page
    window.location.href = '/login2';
    // Optionally, you can set the selected option if you handle login status
      }
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here
    alert('Form submitted');
  };


  return (
    <div className="container mt-5" style={{
      maxwidth: "600px",
      margin: " 0 auto",
      borderrradius: "5px",
      padding: "20px"
    }}>
      <h2>Search</h2>
      <div className="btn-group btn-group-toggle d-flex flex-wrap" data-toggle="buttons">
        <Link href="/regularsearch" className={`btn btn-primary ${selectedOption === 'regular' ? 'active' : ''}`} onClick={() => handleOptionChange('regular')}>
          Regular Search
        </Link>
        <Link href="/advancesearch" className={`btn btn-primary ${selectedOption === 'advance' ? 'active' : ''}`} onClick={() => handleOptionChange('advance')}>
          Advanced Search
        </Link>

        <Link href="/keywordsearch" className={`btn btn-primary ${selectedOption === 'regular' ? 'active' : ''}`} onClick={() => handleOptionChange('keyword')}>
          keyword Search
        </Link>




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
              <label htmlFor="rangeInput"> Age with Min and Max Values (comma separated)</label>
              <input
                type="text"
                className="form-control"
                id="rangeInput"
                placeholder="enter the Age in between values, e.g., 10, 100"
                required // Ensures the field is required
              />
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
                <option value="christianity">Christianity</option>
                <option value="other">Other</option>
              </select>
            </div>


            <div className="form-group">
              <label htmlFor="casteInput">Caste</label>
              <input type="text" className="form-control" id="casteInput" placeholder="Enter caste" />
            </div>

            <div className="form-group">
              <label htmlFor="motherTongue">Mother Tongue</label>
              <input type="text" className="form-control" id="motherTongue" placeholder="Enter mother tongue" />
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

            <Link href="/regularsearch" className="btn btn-primary" style={{ marginTop: "30px" }}>Search</Link>
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
                <option value="christianity">Christianity</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="regularMotherTongue">Mother Tongue</label>
              <select className="form-control" id="regularMotherTongue">
                <option value="">Select Mother Tongue</option>
                <option value="telugu">Telugu</option>
                <option value="kannada">Kannada</option>
                <option value="tamil">Tamil</option>
                <option value="malayalam">Malayalam</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="others">Others</option>

              </select>
            </div>
            <div className="form-group">
              <label htmlFor="casteInput">Caste</label>
              <input type="text" className="form-control" id="casteInput" placeholder="Enter caste" />
            </div>

            <div className="form-group">
              <label htmlFor="motherTongue">Mother Tongue</label>
              <input type="text" className="form-control" id="motherTongue" placeholder="Enter mother tongue" />
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
            <Link href="/advancesearch" className="btn btn-primary" style={{ marginTop: "30px" }}>Search</Link>
          </div>
        )}



        {selectedOption === 'keyword' && (
          <div id="keywordSearch" className="search-section">
            <div className="form-group">
              <label htmlFor="keyword">Keyword</label>
              <input type="text" className="form-control" id="keyword" placeholder="Enter keyword" />
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: "30px" }}>Search</button>
          </div>
        )}


      </form>
    </div>
  );
};

export default Search;