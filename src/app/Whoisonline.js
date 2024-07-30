"use client";
import React, { useState } from 'react';
import "./search.css";
import dummydata from './Keyworddummydata/dummydata';
import Whoisonlinedisplay from './Whoisonlinedisplay';

const Whoisonline = () => {
    const [selectedOption, setSelectedOption] = useState('online');
    const [formData, setFormData] = useState({
        name: ''
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
            name: formData.name,
            status: 'online'  // Assuming new entries are online
        };
      
        setStoredData([...storedData, updatedData]);

        setFormData({ name: '' });
        setShowSearchResults(true);
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "600px", margin: "0 auto", borderRadius: "5px", padding: "20px" }}>
            <h2>Search</h2>
            {showSearchResults ? (
                <Whoisonlinedisplay storedData={storedData} />
            ) : (
                <div>
                    <div className="btn-group btn-group-toggle d-flex flex-wrap" data-toggle="buttons">
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

                    <form className="mt-4" onSubmit={handleSubmit}>
                        {selectedOption === 'online' && (
                            <div id="whoIsOnline" className="search-section">
                                <p>Showing all users who are currently online.</p>
                                <button type="submit" className="btn btn-primary" style={{ marginTop: "30px" }}>Refresh</button>
                            </div>
                        )}
                    </form>
                </div>
            )}
        </div>
    );
};

export default Whoisonline;
