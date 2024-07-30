"use client"
import React, { useState } from 'react';
import "./search.css";
import dummydata from './Searchbyiddummydata/dummydata';
import Searchbyiddisplay from './Searchbyiddisplay'


const Searchbyid = () => {
  const [selectedOption, setSelectedOption] = useState('id');
  const [formData, setFormData] = useState({
    id: ''
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
      id: storedData.length + 1,
      name: formData.name
  };

  if (Array.isArray(storedData)) {
      const updatedStoredData = [...storedData, updatedData];
      setStoredData(updatedStoredData);
  } else {
      console.error('storedData is not an array');
  }


    // Clear the form fields after submission (optional)
    setFormData({
      id: ''
    });

    // Show search results
    setShowSearchResults(true);
  };
  return (
    <div className="container mt-5" style={{ maxWidth: "600px", margin: "0 auto", borderRadius: "5px", padding: "20px" }}>
      <h2>Search</h2>
      {showSearchResults ? (
                <Searchbyiddisplay storedData={storedData} /> // Corrected component name
            ) : (


      <div>
        <div className="btn-group btn-group-toggle d-flex flex-wrap" data-toggle="buttons">
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
        </div>

        <form className="mt-4" onSubmit={handleSubmit}>

          {selectedOption === 'id' && (
            <div id="searchById" className="search-section">
              <div className="form-group">
                <label htmlFor="userId">User ID</label>
                <input type="text" className="form-control" id="userId" placeholder="Enter user ID" />
              </div>
              <button type="submit" className="btn btn-primary" style={{ marginTop: "30px" }}>Search</button>
            </div>
          )}
        </form>

      </div>
            )}
    </div>

  )
}

export default Searchbyid
