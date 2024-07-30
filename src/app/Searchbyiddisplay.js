import React from 'react';
import "./Searchbydisplay.css";

const Keywordsearchdisplay = ({ storedData }) => {
  return (
    <div className="profile-container">
      {storedData.map((data, index) => (
        <div key={index} className="profile-card">
          <div className="profile-header">Profile {index + 1}</div>
          <div className="profile-detail">
            <strong>name:</strong> <span>{data.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Keywordsearchdisplay;
