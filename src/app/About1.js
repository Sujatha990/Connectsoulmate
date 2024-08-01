import React from 'react';
import Image from 'next/image';
import './globals.css';
import Footer from './Footer';

const About1 = () => {
  return (
    <div>
      <div className="container about-us">
        <div className="row">
          <div className="col-md-6 about-us-description">
            <div>
              <h2 style={{ paddingLeft: '50px' }}>About Us</h2>
              <p style={{ paddingLeft: '50px' }}>
                In the rich tapestry of Indian culture, the traditional practice of arranged marriage holds a significant place. For generations, parents have taken on the important task of seeking ideal life partners for their children, collaborating with relatives, marriage bureaus, friends, and various intermediaries. However, the landscape has evolved dramatically in contemporary times. Presently, individuals seeking marriage wish to establish a genuine connection with their future partners, aiming to comprehensively understand and resonate with them before embarking on a lifelong journey together. This shift has sparked a paradigm change, placing Matrimonial Sites in India at the forefront of everyone&apos;s attention.
              </p>
              <p style={{ paddingLeft: '50px' }}>
                At Connectsoulmate, we recognize and celebrate this transformative shift in the way people approach matrimony. We understand the importance of forging a profound connection that transcends conventional boundaries. Our platform embraces the essence of modern relationships, empowering individuals to engage and connect with potential life partners on their own terms.
                Our mission is to facilitate meaningful connections by providing a dynamic online space where individuals can navigate their journey towards matrimony with transparency, authenticity, and choice. We believe that every person deserves the opportunity to explore and discover compatibility in a manner that resonates with their values, aspirations, and personal preferences.
              </p>
              <p style={{ paddingLeft: '50px' }}>
                Connectsoulmate is more than just a matrimonial site; it&apos;s a catalyst for change in the realm of Indian matrimony. We blend tradition with modernity, offering a platform that not only respects the timehonored values of arranged marriages but also embraces the evolving desires of contemporary individuals. Our commitment lies in fostering relationships founded on trust, understanding, and genuine connection.
              </p>
              <p style={{ paddingLeft: '50px' }}>
                Join us on this transformative journey, where we unite the timeless traditions of the past with the boundless possibilities of the future. Welcome to Connectsoulmate, where meaningful relationships find their starting point.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <Image
              src="/Images/AG.jpg" // Ensure the image path is correct
              alt="About Us Image"
              width={500}
              height={800}
              style={{ objectFit: 'cover' }} // Optional: Adjust as needed
            />
          </div>
        </div>
      </div>
      <h2 style={{ paddingLeft: '100px' }}>How it Works</h2>
      <p style={{ paddingTop: '50px', paddingLeft: '100px', paddingRight: '100px' }}>
        Connectsoulmate Matrimony, operating as an astute matchmaking platform, is dedicated to offering its members access to the utmost quality of match selections.<br />
        Our intuitive Compatibility AI-enabled Recommendation Engine is specifically designed to ensure that you are connected with potential partners who align with<br/> your designated criteria. Our core belief is concentrated around discovering the ideal match that seamlessly complements your individual qualities and preferences. <br />
        Moreover, we are committed to streamlining your quest for the perfect life partner, ensuring that the journey is not only efficient but also fruitful in terms of ease <br />
        and success.
      </p>
      <p style={{ paddingLeft: '100px', paddingRight: '100px' }}>
        Our underlying philosophy revolves around identifying the ideal match that harmonizes seamlessly with your unique qualities and preferences. We are committed<br />
        to facilitating the discovery of a life partner who resonates deeply with your values and aspirations. Our paramount objective is to streamline and enhance your<br />
        search for the perfect life companion, ensuring that it is not only hasslefree but also swift and successful.
      </p>
      <p style={{ paddingLeft: '100px', paddingRight: '100px' }}>
        At Connectsoulmate Matrimony, we employ cutting-edge technology to transform the traditional approach to partner selection, making the process intelligent, <br />
        efficient, and remarkably tailored to your individual needs. We are dedicated to supporting you in your quest for a meaningful and fulfilling life partnership.
      </p>
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <Image
          src="/Images/cc3.png" // Ensure the image path is correct
          alt="About Us Image"
          width={800}
          height={100}
          style={{ paddingRight: '50px' }} // Optional: Adjust as needed
        />
      </div>
      <h2 style={{ paddingTop: '100px', paddingLeft: '100px' }}>WHY CONNECTSOULMATE</h2>
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <Image
          src="/Images/pp.png" // Ensure the image path is correct
          alt="Second Image"
          width={600}
          height={200}
          style={{ paddingRight: '50px' }} // Optional: Adjust as needed
        />
      </div>
      <Footer />
    </div>
  );
};

export default About1;
