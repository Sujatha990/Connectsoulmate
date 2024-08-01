import React from 'react';
import Image from 'next/image';
import Help from './Help';

const Divorcee = () => {
  return (
    <div>
      <div className="container about-us">
        <div className="row">
          <div className="col-md-6 about-us-description">
            <div>
              <h2 style={{ paddingLeft: '50px' }}>Divorcee Matrimony Services</h2>
              <p style={{ paddingLeft: '50px' }}>
                Divorce is a part of life&#39;s journey, and we understand the complexities and emotions that come with it.
                Our platform offers a supportive and understanding community for divorcees to connect, interact, and
                potentially find their perfect match. We believe that everyone deserves happiness and a chance to
                find love again.
              </p>
              <p style={{ paddingLeft: '50px' }}>
                We believe that love knows no boundaries and that it&#39;s never too late to find companionship again.
                Our platform is a bridge that connects individuals who share similar life experiences, making the
                journey towards a new relationship easier and more meaningful.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <Image
              src="/Images/Divorcee.jpeg" // Ensure the path is correct relative to the public directory
              alt="Divorcee Services Image"
              width={400} // Adjust width as needed
              height={300} // Adjust height as needed
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

export default Divorcee;
