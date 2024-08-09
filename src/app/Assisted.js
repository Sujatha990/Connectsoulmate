import React from 'react';
import Image from 'next/image';
import Help from './Help';
import './Assisted.css'; // Create and include this CSS file

const Assisted = () => {
  return (
    <div className="assisted-wrapper">
      <div className="image-container">
        <Image
          src="/Images/ass.jpg" // Ensure the path is correct relative to the public directory
          alt="Assisted Services Image"
          width={800} // Adjust width as needed
          height={500} // Adjust height as needed
          className="responsive-image"
        />
      </div>
      <div className="container about-us">
        <div className="row">
          <div className="col-md-12 about-us-description">
            <div className="text-content">
              <h2 className="section-title">Assisted Services</h2>
              <p className="section-text">
                This innovative approach has facilitated countless members in uncovering their ideal life partners.
                With a vast network of Relationship Managers spread across India, we ensure that the service is
                offered in your preferred language. Your journey will be guided by a dedicated Relationship Manager
                committed to aiding you in discovering your perfect match.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section">
        <h2 className="contact-heading">For More Details Contact Us</h2>
        <Help />
      </div>
    </div>
  );
};

export default Assisted;
