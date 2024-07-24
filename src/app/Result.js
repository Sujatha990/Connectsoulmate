import React from 'react'
import dummyData from './data/dummyData';


const Result = ({ submittedData }) => {
  return (
    
    
      <div>
        <ul>
          {dummyData.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      </div>
    
  )
}

export default Result
