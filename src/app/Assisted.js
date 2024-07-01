import React from 'react'
import Help from './Help'
import Footer from './Footer'

const Assisted = () => {
  return (
    <div>
      <div>
       <div className="container about-us">
      <div className="row">
        <div className="col-md-6 about-us-description">
          <div>
            <h2>Assisted Services</h2>
            <p>
            This innovative approach has facilitated countless members in uncovering their ideal life partners.
With a vast network of Relationship Managers spread across India, we ensure that the service is
offered in your preferred language. Your journey will be guided by a dedicated Relationship Manager
committed to aiding you in discovering your perfect match.        </p>
           
      
       
            
              
            
            
          
          </div>
        </div>
        <div className="col-md-6">
          <img src="Images/Assisted.jpeg" alt="About Us Image" style={{height:"300px",width:"400px"}} />
        </div>
      </div>
    </div>
    <div>
      <h2 style={{textAlign:"center"}}>For More Details ContactUs</h2>
      <Help/>
      <Footer/>
    </div>
    </div>
    </div>
  )
}

export default Assisted
