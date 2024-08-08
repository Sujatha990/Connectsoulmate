import React from 'react';
import jsPDF from 'jspdf';
import './Keyworddisplay.css';

const Keywordsearchdisplay = ({ storedData }) => {
  const handleDownload = async (data) => {
    try {
      const doc = new jsPDF();

      // Function to convert an image URL to Base64
      const imageToBase64 = async (url) => {
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error('Network response was not ok.');
          const buffer = await response.arrayBuffer();
          const blob = new Blob([buffer], { type: 'image/jpeg' });
          const reader = new FileReader();
          return new Promise((resolve, reject) => {
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          });
        } catch (error) {
          console.error('Error fetching or converting image:', error);
          throw error;
        }
      };

      const imgData = await imageToBase64(data.image);
      console.log('Image data:', imgData); // Check image data

      // Adjust dimensions if needed
      const imgWidth = 50;
      const imgHeight = 50;
      const imgX = 10;
      const imgY = 10;

      doc.addImage(imgData, 'JPEG', imgX, imgY, imgWidth, imgHeight);
      console.log('Image added to PDF');

      doc.setFontSize(12);
      let textY = imgY + imgHeight + 10;
      doc.text('Profile', 10, textY);
      textY += 10;
      doc.text(`Keyword: ${data.keyword}`, 10, textY);

      doc.save(`profile-${data.id || data.keyword || data.gender}.pdf`);
      console.log('PDF saved');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="profile-container">
      {storedData.map((data, index) => (
        <div key={index} className="profile-card">
          <img src={data.image} alt={`Profile ${index + 1}`} className="profile-photo" />
          <div className="profile-header">Profile {index + 1}</div>
          <div className="profile-detail">
            <strong>Keyword:</strong> <span>{data.keyword}</span>
          </div>
          <button onClick={() => handleDownload(data)} className="download-button">
            Download Profile
          </button>
        </div>
      ))}
    </div>
  );
};

export default Keywordsearchdisplay;
