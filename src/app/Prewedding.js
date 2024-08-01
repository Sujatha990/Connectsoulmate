import React from 'react'
import Image from 'next/image'
import Help from './Help'
import Footer from './Footer'

const Prewedding = () => {
  return (
    <div>
      <div>
        <div className="container about-us">
          <div className="row">
            <div className="col-md-6 about-us-description">
              <div>
                <h2 style={{ paddingLeft: "50px" }}>Pre-Wedding Dietician Services</h2>
                <p style={{ paddingLeft: "50px" }}>
                  In the contemporary social landscape, a wedding ceremony has gained substantial importance as a
                  reflection of your hospitality and refined lifestyle. The focal point inevitably revolves around the bride
                  and groom, underscoring the necessity for them to exude captivating charm.
                </p>
                <p style={{ paddingLeft: "50px" }}>
                  Through our pre-wedding dietician service, we are dedicated to upholding your optimal physical and
                  mental well-being on your wedding day. Our team of experienced nutritional experts and dieticians
                  collaborates with you to create a customized daily regimen that encompasses both nutrition and
                  exercise. Irrespective of your body type, our dieticians ensure that you receive tailored dietary advice
                  and exercise routines to achieve an ideal physique. A well-balanced diet not only enhances physical
                  fitness but also contributes to an improved complexion. As a result, you can radiate an exceptional
                  radiance throughout the phases of seeking a matrimonial alliance, the wedding festivities, and
                  beyond.
                </p>
                <h2 style={{ paddingLeft: "50px" }}>Some deliverables of our dietician service include:</h2>
                <div style={{ paddingLeft: "50px" }}>
                  <p>1. Comprehensive full-body health assessment to establish your physical well-being status.</p>
                  <p>2. Preliminary planning and counselling sessions with our expert dieticians.</p>
                  <p>3. Development of a personalized daily food schedule, complete with recommended food items.</p>
                  <p>4. Provision of exercise recommendations and guidance for incorporating physical activities.</p>
                  <p>5. Regular evaluations and health checks to monitor your progress.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Image
                src="/Images/PreWedding.jpg"
                alt="Pre-Wedding Dietician Service"
                width={500}
                height={400}
                style={{ height: "400px", width: "500px" }} // You can still add inline styles if needed
              />
            </div>
          </div>
        </div>
        <div>
          <h2 style={{ textAlign: "center" }}>For More Details Contact Us</h2>
          <Help />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Prewedding
