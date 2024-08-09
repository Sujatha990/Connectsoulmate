import React from 'react';
import Image from 'next/image';
import Help from './Help';
import './Divorcee.css'; // Make sure you create this CSS file

const Divorcee = () => {
  return (
    <div className="divorcee-wrapper">
      <div className="image-container">
        <Image
          src="/Images/d1.jpg" // Ensure the path is correct relative to the public directory
          alt="Divorcee Services Image"
          width={1200} // Adjust width as needed
          height={800} // Adjust height as needed
          className="responsive-image"
        />
      </div>
      <div className="container about-us">
        <div className="row">
          <div className="col-md-12 about-us-description">
            <div className="text-content">
              <h2 className="section-title">Divorcee Matrimony Services</h2>
              <p className="section-text">
                Divorce is a part of life&apos;s journey, and we understand the complexities and emotions that come with it.
                Our platform offers a supportive and understanding community for divorcees to connect, interact, and
                potentially find their perfect match. We believe that everyone deserves happiness and a chance to
                find love again.
              </p>
              <p className="section-text">
                We believe that love knows no boundaries and that it&apos;s never too late to find companionship again.
                Our platform is a bridge that connects individuals who share similar life experiences, making the
                journey towards a new relationship easier and more meaningful.
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

export default Divorcee;
