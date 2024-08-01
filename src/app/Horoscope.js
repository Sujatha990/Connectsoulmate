import React from 'react';
import Image from 'next/image';
import Help from './Help';
import Footer from './Footer';

const Horoscope = () => {
  return (
    <div>
      <div className="container about-us" style={{ padding: '20px' }}>
        <div className="row">
          <div className="col-md-6 about-us-description">
            <div>
              <h2 style={{ paddingLeft: '50px' }}>Horoscope Matching Services</h2>
              <p style={{ paddingLeft: '50px', marginBottom: '20px' }}>
                Step into a realm where tradition meets insight with our Horoscope Matching Services. Delve into the ancient art of astrological compatibility to ensure a harmonious and blissful journey towards matrimony.
              </p>

              <h2 style={{ paddingLeft: '50px', paddingTop: '30px' }}>Our Range of Services:</h2>
              <div style={{ paddingLeft: '50px' }}>
                <p><strong>1. Astrological Expertise:</strong> Our seasoned astrologers meticulously analyze horoscopes to unveil celestial alignments that influence your relationship compatibility.</p>
                <p><strong>2. Cosmic Harmony:</strong> Discover the alignment of stars, planets, and cosmic energies that impact your potential union. Our services provide insights into aspects like emotional compatibility, financial stability, and familial harmony.</p>
                <p><strong>3. Personalized Guidance:</strong> Our astrologers offer personalized consultations, guiding you through the nuances of horoscope compatibility and addressing any queries you may have.</p>
                <p><strong>4. In-Depth Analysis:</strong> From Kundli Milan to Guna matching, we delve deep into astrological aspects to offer comprehensive insights into your cosmic connection.</p>
                <p><strong>5. Holistic Matchmaking:</strong> Combine the wisdom of astrological compatibility with modern preferences, ensuring a well-rounded match that resonates on multiple levels.</p>
                <p><strong>6. Enhanced Understanding:</strong> Gain a deeper understanding of your partner's traits, tendencies, and potential challenges through horoscope insights.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Image
              src="/Images/Horoscope.jpeg" // Ensure the path is correct relative to the public directory
              alt="Horoscope Matching Services"
              width={400} // Adjust width as needed
              height={300} // Adjust height as needed
              style={{ objectFit: 'cover' }} // Optional: Adjust image fit
            />
          </div>
        </div>
      </div>
      <div>
        <h2 style={{ textAlign: 'center', paddingTop: '50px' }}>For More Details Contact Us</h2>
        <Help />
        <Footer />
      </div>
    </div>
  );
};

export default Horoscope;
