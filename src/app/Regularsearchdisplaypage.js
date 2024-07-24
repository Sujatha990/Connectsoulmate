import React from 'react'


const Regularsearchdisplaypage = ({ storedData }) => {
  return (
    
      <div className="mt-4">
        <h3>Stored Dummy Data</h3>
        <ul>
          {storedData.map((data, index) => (
            <li key={index}>
              <strong>Gender:</strong> {data.gender}, <strong>Age:</strong> {data.age}, <strong>Height:</strong> {data.height}, <strong>Marital Status:</strong> {data.maritalStatus}, <strong>Religion:</strong> {data.religion}, <strong>Mother Tongue:</strong> {data.motherTongue}, <strong>Caste:</strong> {data.caste}, <strong>State:</strong> {data.state}, <strong>District:</strong> {data.districtCity}, <strong>Education:</strong> {data.education}
            </li>
          ))}
        </ul>
      </div>
    
  )
}

export default Regularsearchdisplaypage
