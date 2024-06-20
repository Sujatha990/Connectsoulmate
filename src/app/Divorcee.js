import React from 'react'
import Help from './Help'
import Footer from './Footer'

const Divorcee = () => {
  return (
    <div>
       <div className="container about-us">
      <div className="row">
        <div className="col-md-6 about-us-description">
          <div>
            <h2>Divorcee Matrimony Services</h2>
            <p>
            Divorce is a part of life's journey, and we understand the complexities and emotions that come with it.
Our platform offers a supportive and understanding community for divorcees to connect, interact, and
potentially find their perfect match. We believe that everyone deserves happiness and a chance to
find love again.      </p>
            <p>
            We believe that love knows no boundaries and that it's never too late to find companionship again.
Our platform is a bridge that connects individuals who share similar life experiences, making the
journey towards a new relationship easier and more meaningful.</p> 
            
       
       
      
       
            
              
            
            
          
          </div>
        </div>
        <div className="col-md-6">
          <img src="Images/Divorcee.jpeg" alt="About Us Image" style={{height:"500px",width:"500px"}} />
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

export default Divorcee
