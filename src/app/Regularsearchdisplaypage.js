import React from 'react';
import './Regularsearchdisplaypage.css'; // Ensure you have this CSS file for styling

const Regularsearchdisplaypage = ({ storedData }) => {
  return (
    <div className="search-results">
      <h2>Search Results</h2>
      {storedData.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="results-list">
          {storedData.map((data, index) => (
            <div key={index} className="result-item">
              <h3>Profile {index + 1}</h3>
              <div className="profile-details">
                <p><strong>Gender:</strong> {data.gender}</p>
                <p><strong>Age:</strong> {data.age}</p>
                <p><strong>Marital Status:</strong> {data.maritalStatus}</p>
                <p><strong>Religion:</strong> {data.religion}</p>
                <p><strong>Caste:</strong> {data.caste}</p>
                <p><strong>State:</strong> {data.state}</p>
                <p><strong>Education:</strong> {data.education}</p>
                <p><strong>Employed In:</strong> {data.employedIn}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Regularsearchdisplaypage;
