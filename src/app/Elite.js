import React from 'react'
import Help from './Help'

const Elite = () => {
  return (
    <div>
       <div>
       <div className="container about-us">
      <div className="row">
        <div className="col-md-6 about-us-description">
          <div>
            <h2 style={{paddingLeft:"50px"}}>Elite Matrimonial Services</h2>
            <p style={{paddingLeft:"50px"}}>
            At Connectsoulmate, we understand the unique needs of elite circles – business magnates, diplomats,
celebrities, and other accomplished individuals who seek a partner that matches their stature and
values. With an unwavering commitment to excellence, we curate matches that go beyond
compatibility, taking into account shared aspirations, lifestyles, and ambitions. Our extensive network
and expertise uniquely position us to serve the distinguished clientele, both within and connected to
India. Join us in finding your perfect match among the elite.         </p>
            
      
       
            
              
            
            
          
          </div>
        </div>
        <div className="col-md-6">
          <img src="Images/E1.jpeg" alt="About Us Image" style={{height:"300px",width:"300px"}} />
        </div>
      </div>
    </div>
    <div>
      <h2 style={{textAlign:"center"}}>For More Details ContactUs</h2>
      <Help/>
    </div>
    </div>
    </div>
  )
}

export default Elite
