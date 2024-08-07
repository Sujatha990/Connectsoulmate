import React from 'react';
import Image from 'next/image';
import Help from './Help';
import Footer from './Footer';
import './Event.css'; // Make sure to create this CSS file

const Event = () => {
  return (
    <div className="event-wrapper">
      <div className="image-container">
        <Image
          src="/Images/Events.jpeg" // Ensure the path is correct relative to the public directory
          alt="Wedding Events Image"
          width={800} // Adjust width as needed
          height={500} // Adjust height as needed
          className="responsive-image"
        />
      </div>
      <div className="container about-us">
        <div className="row">
          <div className="col-md-12 about-us-description">
            <div className="text-content">
              <h2 className="section-title">Wedding Events Services</h2>
              <p className="section-text">
                Weddings in India are renowned for their extensive preparations and bustling activities. Families often
                invest months in meticulously organizing the various ceremonies that constitute a wedding event.
                These celebrations can span around a week, presenting a significant organizational challenge,
                particularly if there is limited additional assistance available. This is the precise scenario where we
                consider it our duty to step in and offer our support.
              </p>
              <p className="section-text">
                Our dedicated team is committed to turning your vision into reality, ensuring that every detail is
                meticulously planned and flawlessly executed.
              </p>

              <h2 className="services-heading">Our Range of Services:</h2>
              <div className="services-list">
                <p><strong>1. Wedding Planning:</strong> Our experienced planners work closely with you to understand your
                  preferences and design a comprehensive wedding plan. From venue selection to theme
                  conceptualization, we take care of every aspect to create a seamless and memorable
                  experience.</p>
                <p><strong>2. Decor and Design:</strong> Our creative designers breathe life into your vision, crafting enchanting
                  decor that resonates with your chosen theme. From elegant floral arrangements to
                  captivating lighting setups, we ensure that your chosen ambiance is brought to life.</p>
                <p><strong>3. Logistics Management:</strong> Our team takes care of all logistical aspects, including transportation,
                  accommodations, and guest management. We ensure that your guests have a comfortable
                  and hassle-free experience from start to finish.</p>
                <p><strong>4. Vendor Coordination:</strong> We collaborate with a network of trusted vendors to ensure that every
                  service, from catering to entertainment, aligns perfectly with your preferences and
                  requirements.</p>
                <p><strong>5. Entertainment:</strong> From live music and DJs to captivating performances, we curate
                  entertainment that adds excitement and vibrancy to your celebration.</p>
                <p><strong>6. Photography and Videography:</strong> Our skilled photographers and videographers capture every
                  heartfelt moment, allowing you to relive your special day for years to come.</p>
                <p><strong>7. Wedding Video Streaming:</strong> Connect with loved ones worldwide in real time, ensuring no one
                  misses out on your special day. Enjoy inclusive access, professional production, interactive
                  features, and the option to record for later viewing. Let us bring your wedding closer to
                  everyone who matters.</p>
                <p><strong>8. Catering:</strong> Delight your guests with a culinary experience tailored to their tastes. Our catering
                  partners offer a range of delectable options that suit your chosen theme and preferences.</p>
                <p><strong>9. Coordination on the Day:</strong> Sit back and enjoy your day as our expert team ensures that every
                  aspect of your wedding unfolds seamlessly. We manage the schedule, oversee setups, and
                  handle any unexpected situations that may arise.</p>
                <p><strong>10. Destination Weddings:</strong> We specialize in crafting destination weddings that combine
                  breathtaking locations with flawless execution. Whether it&apos;s a serene beach, a historic castle,
                  or a charming vineyard, we bring your dream destination wedding to life.</p>
                <p><strong>11. Personalized Touch:</strong> Your wedding is a reflection of your love story. Our team goes the extra
                  mile to infuse personal touches that make your celebration uniquely yours.</p>
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

export default Event;
