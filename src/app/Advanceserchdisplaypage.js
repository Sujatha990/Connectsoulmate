import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import './Advanceserchdisplay.css';
import jsPDF from 'jspdf';

const Advanceserchdisplaypage = ({ storedData }) => {
  const handleDownload = (data) => {
    const doc = new jsPDF();

    // Convert the image to a Base64 string
    const image = new Image();
    image.crossOrigin = 'Anonymous'; // Handle CORS if image is from another domain
    image.src = data.image;

    // Create a Promise to ensure the image is loaded before adding it to the PDF
    const imagePromise = new Promise((resolve, reject) => {
      image.onload = () => {
        // Convert the image to Base64
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);
        const imgData = canvas.toDataURL('image/jpeg');

        // Image dimensions and position
        const imgWidth = 50; // Adjust width as needed
        const imgHeight = (image.height * imgWidth) / image.width; // Maintain aspect ratio
        const imgX = 10; // X position
        const imgY = 10; // Y position

        // Add the image to the PDF
        doc.addImage(imgData, 'JPEG', imgX, imgY, imgWidth, imgHeight);

        // Set font size and initialize y-position for text
        doc.setFontSize(12);
        let textY = imgY + imgHeight + 10; // Position the text below the image

        // Profile details array
        const profileDetails = [
          'Profile',
          `Gender: ${data.gender}`,
          `Age: ${data.age}`,
          `Height: ${data.height}`,
          `Marital Status: ${data.maritalStatus}`,
          `Religion: ${data.religion}`,
          `Mother Tongue: ${data.motherTongue}`,
          `Caste: ${data.caste}`,
          `Education: ${data.education}`,
          `Physical Status: ${data.physicalStatus}`,
          `Employed In: ${data.employedIn}`,
          `Occupation: ${data.occupation}`,
          `Annual Income: ${data.annualIncome}`,
          `Zodiac Sign: ${data.zodiacSign}`,
          `Nakshatra: ${data.nakshatra}`,
          `Gothra: ${data.gothra}`,
          `Habits: ${data.habits}`,
          `Show Profile: ${data.showProfile}`
        ];

        // Add the profile details to the PDF
        profileDetails.forEach((detail) => {
          doc.text(detail, 10, textY);
          textY += 10; // Increment y-position for each line
        });

        // Save the PDF
        doc.save(`profile-${data.id || data.gender || data.age}.pdf`);
        resolve();
      };
      image.onerror = () => {
        console.error('Error loading image');
        reject();
      };
    });

    // Ensure that the image is loaded before saving the PDF
    imagePromise.catch((error) => {
      console.error('Error generating PDF:', error);
    });
  };

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      {storedData.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="results-list">
          {storedData.map((data, index) => (
            <div key={data.id} className="result-item">
                <div className="profile-photo-container">
              <Image 
                src={data.image} 
                alt={`Profile ${data.id}`} 
                className="profile-photo" 
                width={150} // Adjust the width as needed
                height={150} // Adjust the height as needed
              />
              </div>
              <div className="profile-details">
                <h3>Profile {index + 1}</h3>
                <p><strong>Gender:</strong> {data.gender}</p>
                <p><strong>Age:</strong> {data.age}</p>
                <p><strong>Height:</strong> {data.height}</p>
                <p><strong>Marital Status:</strong> {data.maritalStatus}</p>
                <p><strong>Religion:</strong> {data.religion}</p>
                <p><strong>Mother Tongue:</strong> {data.motherTongue}</p>
                <p><strong>Caste:</strong> {data.caste}</p>
                <p><strong>Education:</strong> {data.education}</p>
                <p><strong>Physical Status:</strong> {data.physicalStatus}</p>
                <p><strong>Employed In:</strong> {data.employedIn}</p>
                <p><strong>Occupation:</strong> {data.occupation}</p>
                <p><strong>Annual Income:</strong> {data.annualIncome}</p>
                <p><strong>Zodiac Sign:</strong> {data.zodiacSign}</p>
                <p><strong>Nakshatra:</strong> {data.nakshatra}</p>
                <p><strong>Gothra:</strong> {data.gothra}</p>
                <p><strong>Habits:</strong> {data.habits}</p>
                <p><strong>Show Profile:</strong> {data.showProfile}</p>
                <button onClick={() => handleDownload(data)} className="download-button">
                  Download Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Advanceserchdisplaypage;
