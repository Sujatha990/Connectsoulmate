import React from 'react';
import "./Soulmateserchdisplay.css"

const Soulmateseachdisplay = ({ storedData }) => {
  return (
    <div className="search-results">
    <h2>Search Results</h2>
    {storedData.length === 0 ? (
      <p>No results found.</p>
    ) : (
      <div className="results-list">
        {storedData.map((data) => (
          <div key={data.id} className="result-item"> {/* Use a unique identifier if available */}
            <h3>Profile {data.id}</h3> {/* Display unique profile ID */}
            <div className="profile-details">
    
           <p><strong>Gender:</strong> {data.gender}</p>
            <p><strong>Age:</strong> {data.age}</p>
            <p><strong>Height:</strong> {data.height}</p>
           <p><strong>Marital Status:</strong> {data.maritalStatus}</p>
            <p><strong>Religion:</strong> {data.religion}</p>
            <p><strong>Mother Tongue:</strong> {data.motherTongue}</p>
            <p><strong>Caste:</strong> {data.caste}</p>
            <p><strong>State:</strong> {data.state}</p>
           <p><strong>District:</strong> {data.districtCity}</p>
            <p><strong>Education:</strong> {data.education}</p>
          </div>
          </div>
        ))}
      </div>
    )}
    </div>
  );
};

export default Soulmateseachdisplay;

