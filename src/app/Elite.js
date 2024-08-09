import React from 'react';
import Image from 'next/image';
import Help from './Help';
import './Elite.css'; // Import the CSS file

const Elite = () => {
  return (
    <div className="centered-content">
      <div className="container">
        <div className="image-top-padding">
          <Image
            src="/Images/el.jpg" // Ensure the path is correct relative to the public directory
            alt="Elite Matrimonial Services Image"
            width={600} // Adjust width as needed
            height={400} // Adjust height as needed
            className="responsive-image" // Use class for responsive image
          />
        </div>
        <div className="about-us-description content-top-padding">
          <h2 className="section-title">Elite Matrimonial Services</h2>
          <p className="section-text">
            At Connectsoulmate, we understand the unique needs of elite circles – business magnates, diplomats,
            celebrities, and other accomplished individuals who seek a partner that matches their stature and
            values. With an unwavering commitment to excellence, we curate matches that go beyond
            compatibility, taking into account shared aspirations, lifestyles, and ambitions. Our extensive network
            and expertise uniquely position us to serve the distinguished clientele, both within and connected to
            India. Join us in finding your perfect match among the elite.
          </p>
          <h2 className="contact-heading">For More Details Contact Us</h2>
          <Help />
        </div>
      </div>
    </div>
  );
};

export default Elite;
