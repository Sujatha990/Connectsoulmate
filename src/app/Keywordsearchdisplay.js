import React from 'react';
import "./Keyworddisplay.css";

const Keywordsearchdisplay = ({ storedData }) => {
  return (
    <div className="profile-container">
      {storedData.map((data, index) => (
        <div key={index} className="profile-card">
          <div className="profile-header">Profile {index + 1}</div>
          <div className="profile-detail">
            <strong>Keyword:</strong> <span>{data.keyword}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Keywordsearchdisplay;
