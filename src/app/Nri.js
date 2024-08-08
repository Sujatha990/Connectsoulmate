import React from 'react';
import Image from 'next/image';
import Help from './Help';

const Nri = () => {
  return (
    <div>
      <div>
        <div className="container about-us">
          <div className="row">
            <div className="col-md-6 about-us-description">
              <div>
                <h2 style={{ paddingLeft: "50px" }}>NRI Matrimonial Services</h2>
                <p style={{ paddingLeft: "50px" ,textAlign:"justify"}}>
                  NRI individuals, born in India but residing in foreign countries, consistently hold the desire to unite
                  their children in matrimony with partners from their homeland. This sentiment is driven by the
                  profound cultural traditions that play a pivotal role in nurturing enduring marital bonds. The essence
                  of nearly every NRI marriage is rooted in Indian customs, and NRI parents ardently seek well-educated
                  and mannered life companions for their unmarried offspring.
                </p>
                <p style={{ paddingLeft: "50px",textAlign:"justify" }}>
                  Our NRI Matrimonial services are exclusively tailored to meet the needs of those seeking future
                  partners settled abroad, as well as NRIs in search of life companions. Our vast repository boasts a
                  diverse range of NRI profiles, encompassing eligible matches spread across the global diaspora.
                </p>
                <p style={{ paddingLeft: "50px" ,textAlign:"justify"}}>
                  Profiles are meticulously categorized based on factors such as religion, country of residence,
                  profession, family background, and educational qualifications. Our dedicated team of experts, who
                  specialize in handling NRI matchmaking inquiries, possess extensive experience and consistently invest
                  exceptional efforts to overcome geographical distances and facilitate meaningful connections.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <Image
                src="/Images/nri1.jpg"
                alt="About Us Image"
                width={400}
                height={300}
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 style={{ textAlign: "center" }}>For More Details Contact Us</h2>
          <Help />
        </div>
      </div>
    </div>
  );
};

export default Nri;
