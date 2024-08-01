import React from 'react';
import Image from 'next/image';
import Help from './Help';

const Assisted = () => {
  return (
    <div>
      <div className="container about-us">
        <div className="row">
          <div className="col-md-6 about-us-description">
            <div>
              <h2 style={{ paddingLeft: '50px' }}>Assisted Services</h2>
              <p style={{ paddingLeft: '50px' }}>
                This innovative approach has facilitated countless members in uncovering their ideal life partners.
                With a vast network of Relationship Managers spread across India, we ensure that the service is
                offered in your preferred language. Your journey will be guided by a dedicated Relationship Manager
                committed to aiding you in discovering your perfect match.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <Image
              src="/Images/Assisted.jpeg" // Ensure the path is correct relative to the public directory
              alt="Assisted Services Image"
              width={400} // Adjust size as needed
              height={300} // Adjust size as needed
              style={{ objectFit: 'cover' }} // Optional: Adjust image fit
            />
          </div>
        </div>
      </div>
      <div>
        <h2 style={{ textAlign: 'center' }}>For More Details Contact Us</h2>
        <Help />
      </div>
    </div>
  );
};

export default Assisted;
