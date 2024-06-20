import React from 'react'
import Help from './Help'
import Footer from './Footer'

const Horoscope = () => {
  return (
    <div>
      <div className="container about-us">
      <div className="row">
        <div className="col-md-6 about-us-description">
          <div>
            <h2>Horoscope matching services </h2>
            <p>Step into a realm where tradition meets insight with our Horoscope Matching Services. Delve into the  ancient art of astrological compatibility to ensure a harmonious and blissful journey towards  matrimony.
                    </p>
                     
            
       <h2>Our Range of Services:  </h2>
       
      <p>1. Astrological Expertise: Our seasoned astrologers meticulously analyse horoscopes to unveil  celestial alignments that influence your relationship compatibility.  </p>
<p>2. Cosmic Harmony: Discover the alignment of stars, planets, and cosmic energies that impact  your potential union. Our services provide insights into aspects like emotional compatibility,  financial stability, and familial harmony. 
</p>
<p>3. Personalized Guidance: Our astrologers offer personalized consultations, guiding you through  the nuances of horoscope compatibility and addressing any queries you may have.</p>
<p>4. In-Depth Analysis: From Kundli Milan to Guna matching, we delve deep into astrological  aspects to offer comprehensive insights into your cosmic connection. 
</p>
<p>5. Holistic Matchmaking: Combine the wisdom of astrological compatibility with modern  preferences, ensuring a well-rounded match that resonates on multiple levels. 6. Enhanced Understanding: Gain a deeper understanding of your partner's traits, tendencies,  and potential challenges through horoscope insights. 
  
  </p>


 </div>
        </div>
        <div className="col-md-6">
          <img src="Images/Horoscope.jpeg" alt="About Us Image" style={{height:"300px",width:"400px"}} />
        </div>
      </div>
    </div>
    <div>
      <h2 style={{textAlign:"center"}}>For More Details ContactUs</h2>
      <Help/>
      <Footer/>
    </div>
    </div>
  )
}

export default Horoscope
