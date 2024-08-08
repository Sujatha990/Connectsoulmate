import React from 'react';
import Image from 'next/image';
import Help from './Help';

const Elite = () => {
  return (
    <div>
      <div className="container about-us">
        <div className="row">
          <div className="col-md-6 about-us-description">
            <div>
              <h2 style={{paddingLeft:"50px"}} className="section-title">Elite Matrimonial Services</h2>
              <p style={{paddingLeft:"50px",textAlign:"justify"}} className="section-text">
                At Connectsoulmate, we understand the unique needs of elite circles – business magnates, diplomats,
                celebrities, and other accomplished individuals who seek a partner that matches their stature and
                values. With an unwavering commitment to excellence, we curate matches that go beyond
                compatibility, taking into account shared aspirations, lifestyles, and ambitions. Our extensive network
                and expertise uniquely position us to serve the distinguished clientele, both within and connected to
                India. Join us in finding your perfect match among the elite.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <Image
              src="/Images/el.jpg" // Ensure the path is correct relative to the public directory
              alt="Elite Matrimonial Services Image"
              width={300} // Adjust width as needed
              height={300} // Adjust height as needed
              style={{ objectFit: 'cover' }} // Optional: Adjust image fit
            />
          </div>
        </div>
      </div>
      <div>
        <h2 style={{textAlign:"center"}}  className="contact-heading">For More Details Contact Us</h2>
        <Help />
      </div>
    </div>
  );
};

export default Elite;
