import React from 'react'

const Advanceserchdisplaypage = ({ storedData }) => {
  return (
    
       <div className="mt-4">
      <h3>Stored Dummy Data</h3>
      <ul>
        {storedData.map((data, index) => (
          <li key={index}>
            <strong>Gender:</strong> {data.gender},{' '}
            <strong>Age:</strong> {data.age},{' '}
            <strong>Height:</strong> {data.height},{' '}
            <strong>Marital Status:</strong> {data.maritalStatus},{' '}
            <strong>Religion:</strong> {data.religion},{' '}
            <strong>Mother Tongue:</strong> {data.motherTongue},{' '}
            <strong>Caste:</strong> {data.caste},{' '}
            <strong>State:</strong> {data.state},{' '}
            <strong>District:</strong> {data.districtCity},{' '}
            <strong>Education:</strong> {data.education},{' '}
            <strong>Physical Status:</strong> {data.physicalStatus},{' '}
            <strong>Employed In:</strong> {data.employedIn},{' '}
            <strong>Occupation:</strong> {data.occupation},{' '}
            <strong>Annual Income:</strong> {data.annualIncome},{' '}
            <strong>Zodiac Sign:</strong> {data.zodiacSign},{' '}
            <strong>Nakshatra:</strong> {data.nakshatra},{' '}
            <strong>Gothra:</strong> {data.gothra},{' '}
            <strong>Habits:</strong> {data.habits},{' '}
            <strong>Show Profile:</strong> {data.showProfile}
          </li>
        ))}
      </ul>
    </div>
  
  )
};

export default Advanceserchdisplaypage;
