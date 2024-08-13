import React from 'react';

const Regularsearchdisplaypage = ({ storedData }) => {
  return (
    <div className="mt-4">
      <h3>Stored Dummy Data</h3>
      <ul>
        {storedData.map((profile, index) => (
          <li key={index}>
           <strong>Profile:</strong> {profile.profile},
<strong>Name:</strong> {profile.firstName},
<strong>Surname:</strong> {profile.surName},
<strong>Phone Number:</strong> {profile.phoneNumber},
<strong>Email:</strong> {profile.email},
<strong>Password:</strong> {profile.password},
<strong>Confirm Password:</strong> {profile.confirmPassword},
<strong>Gender:</strong> {profile.gender},
<strong>State:</strong> {profile.state},
<strong>City:</strong> {profile.city},
<strong>Pincode:</strong> {profile.pincode},
<strong>Date of Birth:</strong> {profile.dateOfBirth},
<strong>Religion:</strong> {profile.religion},
<strong>Mother Tongue:</strong> {profile.motherTongue},
<strong>Caste:</strong> {profile.caste},
<strong>Gothram:</strong> {profile.gothram},
<strong>Dosh:</strong> {profile.dosh},
<strong>Marital Status:</strong> {profile.maritalStatus},
<strong>Height:</strong> {profile.height},
<strong>Weight:</strong> {profile.weight},
<strong>Complexion:</strong> {profile.complexion},
<strong>Lifestyle:</strong> {profile.lifestyle},
<strong>Hobbies:</strong> {profile.hobbies},
<strong>Expectations:</strong> {profile.expectations},
<strong>Preferences:</strong> {profile.preferences},
<strong>Family Details:</strong> {profile.familyDetails},
<strong>Family Status:</strong> {profile.familyStatus},
<strong>Family Type:</strong> {profile.familyType},
<strong>Family Values:</strong> {profile.familyValues},
<strong>Disability:</strong> {profile.disability},
<strong>Highest Education:</strong> {profile.highestEducation},
<strong>Employed In:</strong> {profile.employedIn},
<strong>Occupation:</strong> {profile.occupation},
<strong>Annual Income:</strong> {profile.annualIncome},
<strong>About Yourself:</strong> {profile.aboutYourself},
<strong>Photo:</strong> {profile.photo},

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Regularsearchdisplaypage;
