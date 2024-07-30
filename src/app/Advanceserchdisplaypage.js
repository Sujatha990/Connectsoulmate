import React from 'react';
import Advanceserchdisplay from "./Advanceserchdisplay.css"


const Advanceserchdisplaypage = ({ storedData }) => {
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
          <p><strong>Gender:</strong>{data.gender}</p>
          <p><strong>Age:</strong>{data.age}</p>
          <p><strong>Height:</strong>{data.height}</p>
          <p><strong>Marital Status:</strong>{data.maritalStatus}</p>
          <p><strong>Religion:</strong>{data.religion}</p>
          <p><strong>Mother Tongue:</strong>{data.motherTongue}</p>
          <p><strong>Caste:</strong>{data.caste}</p>
          <p><strong>State:</strong>{data.state}</p>
          <p><strong>District:</strong>{data.districtCity}</p>
          <p><strong>Education:</strong>{data.education}</p>
          <p><strong>Physical Status:</strong>{data.physicalStatus}</p>
          <p><strong>Employed In:</strong>{data.employedIn}</p>
          <p><strong>Occupation:</strong>{data.occupation}</p>
          <p><strong>Annual Income:</strong>{data.annualIncome}</p>
          <p><strong>Zodiac Sign:</strong>{data.zodiacSign}</p>
          <p><strong>Nakshatra:</strong>{data.nakshatra}</p>
          <p><strong>Gothra:</strong>{data.gothra}</p>
          <p><strong>Habits:</strong>{data.habits}</p>
          <p><strong>Show Profile:</strong>{data.showProfile}</p>
        </div>
        </div>
      ))}
    </div>
  )}
  </div>
  );
};

export default Advanceserchdisplaypage;
