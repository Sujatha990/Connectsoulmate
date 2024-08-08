import React from 'react';
import './Regularsearchdisplaypage.css';
import jsPDF from 'jspdf';

const Regularsearchdisplaypage = ({ storedData }) => {
  const handleDownload = (data) => {
    const doc = new jsPDF();

    // Convert the image to a Base64 string
    const image = new Image();
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

        // Add text to the PDF below the image
        doc.setFontSize(12);
        let textY = imgY + imgHeight + 10; // Position the text below the image
        doc.text(`Profile`, 10, textY);
        textY += 10; // Space between title and data
        doc.text(`Gender: ${data.gender}`, 10, textY);
        textY += 10;
        doc.text(`Age: ${data.age}`, 10, textY);
        textY += 10;
        doc.text(`Marital Status: ${data.maritalStatus}`, 10, textY);
        textY += 10;
        doc.text(`Religion: ${data.religion}`, 10, textY);
        textY += 10;
        doc.text(`Mother Tongue: ${data.motherTongue}`, 10, textY);
        textY += 10;
        doc.text(`Caste: ${data.caste}`, 10, textY);
        textY += 10;
        doc.text(`Education: ${data.education}`, 10, textY);
        textY += 10;
        doc.text(`Employed In: ${data.employedIn}`, 10, textY);

        // Save the PDF
        doc.save(`profile-${data.id || data.gender || data.age}.pdf`);
        resolve();
      };
      image.onerror = reject;
    });

    // Ensure that the image is loaded before saving the PDF
    imagePromise.catch((error) => {
      console.error('Error loading image:', error);
    });
  };

  console.log(storedData); // Debugging line to verify data

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      {storedData.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="results-list">
          {storedData.map((data, index) => (
            <div key={index} className="result-item">
              <img src={data.image} alt={`Profile ${index + 1}`} className="profile-photo" />
              <div className="profile-details">
                <h3>Profile {index + 1}</h3>
                <p><strong>Gender:</strong> {data.gender}</p>
                <p><strong>Age:</strong> {data.age}</p>
                <p><strong>Marital Status:</strong> {data.maritalStatus}</p>
                <p><strong>Religion:</strong> {data.religion}</p>
                <p><strong>motherTongue:</strong> {data.motherTongue}</p>
                <p><strong>Caste:</strong> {data.caste}</p>
                <p><strong>Education:</strong> {data.education}</p>
                <p><strong>Employed In:</strong> {data.employedIn}</p>
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

export default Regularsearchdisplaypage;
