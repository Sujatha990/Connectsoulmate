import React from 'react';
import "./Whoisonlinedisplaypage.css";

const Whoisonlinedisplay = ({ storedData }) => {
  return (
    <div className="profile-container">
      {storedData.length > 0 ? (
        storedData.map((data) => (
          <div key={data.id} className="profile-card">
            <div className="profile-header">Profile</div>
            <div className="profile-detail">
              <strong>Name:</strong> <span>{data.name}</span><br />
              <strong>Status:</strong> <span>{data.status}</span>
            </div>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Whoisonlinedisplay;
