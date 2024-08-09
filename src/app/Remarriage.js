import React from 'react';
import Image from 'next/image';
import Help from './Help';
import Footer from './Footer';
import './Remarriage.css'; // Import the CSS file

const Remarriage = () => {
  return (
    <div className="content-wrapper">
      <div className="centered-content flex-grow">
        <div className="container">
          <div className="image-top-padding">
            <Image
              src="/Images/Remarriage.jpg" // Ensure the path is correct relative to the public directory
              alt="Remarriage Services Image"
              width={400} // Adjust width as needed
              height={267} // Adjust height to maintain aspect ratio
              className="responsive-image" // Use class for responsive image
            />
          </div>
          <div className="about-us-description content-top-padding">
            <h2 className="section-title">Re-Marriage Services</h2>
            <p className="section-text">
              Marriages can face challenges and end due to a variety of reasons such as communication breakdown,
              difficulty in adjusting, lack of empathy, domestic conflicts, and other unfortunate factors. However, the
              end of a marriage doesn&apos;t signify the end of your life. There&apos;s always an opportunity for a fresh
              beginning and the exploration of new horizons. Remarriage, or a second marriage, is a subject that
              some may avoid discussing.
            </p>
            <p className="section-text">
              Understanding the unique needs of individuals in this phase of life, we proudly provide a sincere and
              welcoming second marriage matrimonial service, catering to both Resident Indians and NRIs in India
              and overseas. We acknowledge the sensitivities of this segment and strive to offer a genuine and
              considerate platform for those seeking a new chance at companionship.
            </p>
            <h2 className="contact-heading">For More Details Contact Us</h2>
            <Help />
          </div>
        </div>
      </div>
      <Footer className="footer" /> {/* Ensure Footer is styled as full width */}
    </div>
  );
};

export default Remarriage;
