import React from 'react';
import Image from 'next/image';
import Help from './Help';
import Footer from './Footer';
import './Prewedding.css'; // Import the CSS file

const Prewedding = () => {
  return (
    <div className="content-wrapper">
      <div className="centered-content flex-grow">
        <div className="container">
          <div className="image-top-padding">
            <Image
              src="/Images/pre.jpg"
              alt="Pre-Wedding Dietician Service"
              width={600} // Adjust width as needed
              height={400} // Adjust height as needed
              className="responsive-image"
            />
          </div>
          <div className="about-us-description content-top-padding">
            <h2>Pre-Wedding Dietician Services</h2>
            <p className="description-text">
              In the contemporary social landscape, a wedding ceremony has gained substantial importance as a
              reflection of your hospitality and refined lifestyle. The focal point inevitably revolves around the bride
              and groom, underscoring the necessity for them to exude captivating charm.
            </p>
            <p className="description-text">
              Through our pre-wedding dietician service, we are dedicated to upholding your optimal physical and
              mental well-being on your wedding day. Our team of experienced nutritional experts and dieticians
              collaborates with you to create a customized daily regimen that encompasses both nutrition and
              exercise. Irrespective of your body type, our dieticians ensure that you receive tailored dietary advice
              and exercise routines to achieve an ideal physique. A well-balanced diet not only enhances physical
              fitness but also contributes to an improved complexion. As a result, you can radiate an exceptional
              radiance throughout the phases of seeking a matrimonial alliance, the wedding festivities, and
              beyond.
            </p>
            <h2>Some deliverables of our dietician service include:</h2>
            <div className="description-text">
              <p>1. Comprehensive full-body health assessment to establish your physical well-being status.</p>
              <p>2. Preliminary planning and counselling sessions with our expert dieticians.</p>
              <p>3. Development of a personalized daily food schedule, complete with recommended food items.</p>
              <p>4. Provision of exercise recommendations and guidance for incorporating physical activities.</p>
              <p>5. Regular evaluations and health checks to monitor your progress.</p>
            </div>
          </div>
        </div>
        <div className="centered-content">
          <h2>For More Details Contact Us</h2>
          <Help />
        </div>
      </div>
      <Footer className="footer" /> {/* Ensure Footer is styled as full width */}
    </div>
  );
}

export default Prewedding;
