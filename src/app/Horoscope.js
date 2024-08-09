import React from 'react';
import Image from 'next/image';
import Help from './Help';
import Footer from './Footer';
import './Horoscope.css'; // Include this CSS file

const Horoscope = () => {
  return (
    <div className="horoscope-wrapper">
      <div className="image-container">
        <Image
          src="/Images/hor.jpg" // Ensure the path is correct relative to the public directory
          alt="Horoscope Matching Services"
          width={400} // Adjust width as needed
          height={300} // Adjust height as needed
          className="responsive-image"
        />
      </div>
      <div className="container about-us">
        <div className="row">
          <div className="col-md-12 about-us-description">
            <div className="text-content">
              <h2 className="section-title">Horoscope Matching Services</h2>
              <p className="section-text">
                Step into a realm where tradition meets insight with our Horoscope Matching Services. Delve into the ancient art of astrological compatibility to ensure a harmonious and blissful journey towards matrimony.
              </p>
              <h2 className="services-heading">Our Range of Services:</h2>
              <div className="services-list">
                <p><strong>1. Astrological Expertise:</strong> Our seasoned astrologers meticulously analyze horoscopes to unveil celestial alignments that influence your relationship compatibility.</p>
                <p><strong>2. Cosmic Harmony:</strong> Discover the alignment of stars, planets, and cosmic energies that impact your potential union. Our services provide insights into aspects like emotional compatibility, financial stability, and familial harmony.</p>
                <p><strong>3. Personalized Guidance:</strong> Our astrologers offer personalized consultations, guiding you through the nuances of horoscope compatibility and addressing any queries you may have.</p>
                <p><strong>4. In-Depth Analysis:</strong> From Kundli Milan to Guna matching, we delve deep into astrological aspects to offer comprehensive insights into your cosmic connection.</p>
                <p><strong>5. Holistic Matchmaking:</strong> Combine the wisdom of astrological compatibility with modern preferences, ensuring a well-rounded match that resonates on multiple levels.</p>
                <p><strong>6. Enhanced Understanding:</strong> Gain a deeper understanding of your partner&apos;s traits, tendencies, and potential challenges through horoscope insights.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section">
        <h2 className="contact-heading">For More Details Contact Us</h2>
        <Help />
        <Footer />
      </div>
    </div>
  );
};

export default Horoscope;
