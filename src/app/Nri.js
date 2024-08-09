import React from 'react';
import Image from 'next/image';
import Help from './Help';
import './Nri.css'; // Import the CSS file if using a separate file

const Nri = () => {
  return (
    <div className="centered-content">
      <div className="container about-us">
        <div className="row">
          <div className="col-md-12 image-top-padding">
            <Image
              src="/Images/nri1.jpg"
              alt="NRI Matrimonial Services"
              width={800} // Adjust width to reduce the size
              height={300} // Adjust height to match the new width
              className="responsive-image" // Add a class to the Image component
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 about-us-description content-top-padding">
            <div>
              <h2>NRI Matrimonial Services</h2>
              <p className="description-text">
                NRI individuals, born in India but residing in foreign countries, consistently hold the desire to unite
                their children in matrimony with partners from their homeland. This sentiment is driven by the
                profound cultural traditions that play a pivotal role in nurturing enduring marital bonds. The essence
                of nearly every NRI marriage is rooted in Indian customs, and NRI parents ardently seek well-educated
                and mannered life companions for their unmarried offspring.
              </p>
              <p className="description-text">
                Our NRI Matrimonial services are exclusively tailored to meet the needs of those seeking future
                partners settled abroad, as well as NRIs in search of life companions. Our vast repository boasts a
                diverse range of NRI profiles, encompassing eligible matches spread across the global diaspora.
              </p>
              <p className="description-text">
                Profiles are meticulously categorized based on factors such as religion, country of residence,
                profession, family background, and educational qualifications. Our dedicated team of experts, who
                specialize in handling NRI matchmaking inquiries, possess extensive experience and consistently invest
                exceptional efforts to overcome geographical distances and facilitate meaningful connections.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 style={{ textAlign: "center" }}>For More Details Contact Us</h2>
        <Help />
      </div>
    </div>
  );
};

export default Nri;
