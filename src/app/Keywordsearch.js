"use client";
import React, { useState } from 'react';
import "./search.css";
import dummydata from './Keyworddummydata/dummydata';
import Keywordsearchdisplay from './Keywordsearchdisplay';

const Keywordsearch= () => {
    const [selectedOption, setSelectedOption] = useState('keyword');
    const [formData, setFormData] = useState({
        keyword: ''
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
            keyword: formData.keyword
        };

        const updatedStoredData = [...storedData, updatedData];
        setStoredData(updatedStoredData);

        // Clear the form fields after submission (optional)
        setFormData({
            keyword: ''
        });

        // Show search results
        setShowSearchResults(true);
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "600px", margin: "0 auto", borderRadius: "5px", padding: "20px" }}>
            <h2>Search</h2>

                <div>
                    <div className="btn-group btn-group-toggle d-flex flex-wrap" data-toggle="buttons">
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
                    </div>

                    <form className="mt-4" onSubmit={handleSubmit}>
                    {selectedOption === 'keyword' && (
          <div id="keywordSearch" className="search-section">
            <div className="form-group">
              <label htmlFor="keyword">Keyword</label>
              <input type="text" className="form-control" id="keyword" placeholder="Enter keyword" />
            </div>
            <button type="submit" className="btn btn-primary" style={{marginTop:"30px"}}>Search</button>
          </div>
        )}
                    </form>

                </div>
            
        </div>
    );
};

export default Keywordsearch;
