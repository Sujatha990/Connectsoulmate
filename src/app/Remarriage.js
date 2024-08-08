import React from 'react'
import Image from 'next/image'
import Help from './Help'
import Footer from './Footer'

const Remarriage = () => {
  return (
    <div>
      <div>
        <div className="container about-us">
          <div className="row">
            <div className="col-md-6 about-us-description">
              <div>
                <h2 style={{ paddingLeft: "50px" }}>Re-Marriage Services</h2>
                <p style={{ paddingLeft: "50px",textAlign:"justify" }}>
                  Marriages can face challenges and end due to a variety of reasons such as communication breakdown,
                  difficulty in adjusting, lack of empathy, domestic conflicts, and other unfortunate factors. However, the
                  end of a marriage doesn&apos;t signify the end of your life. There&apos;s always an opportunity for a fresh
                  beginning and the exploration of new horizons. Remarriage, or a second marriage, is a subject that
                  some may avoid discussing.
                </p>
                <p style={{ paddingLeft: "50px",textAlign:"justify" }}>
                  Understanding the unique needs of individuals in this phase of life, we proudly provide a sincere and
                  welcoming second marriage matrimonial service, catering to both Resident Indians and NRIs in India
                  and overseas. We acknowledge the sensitivities of this segment and strive to offer a genuine and
                  considerate platform for those seeking a new chance at companionship.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <Image
                src="/Images/Remarriage.jpg" // Ensure the path is correct relative to the public directory
                alt="Remarriage Services Image"
                width={400} // Provide width
                height={300} // Provide height
                style={{ objectFit: "cover" }} // Adjust the fit if needed
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

export default Remarriage
