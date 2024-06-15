import React from 'react'
import "./globals.css";

const About = () => {
  return (
    <div class="container about-us">
    <div class="row">
        <div class="col-md-6 about-us-description">
            <div>
                <h2>About Us</h2>
                <p>
                    Welcome to ConnectSoulmate, where we believe that love knows no boundaries. Founded with the mission to bring soulmates together, ConnectSoulmate is a leading platform designed to help you find your perfect match. Our advanced matching algorithms and user-friendly interface ensure that you can connect with like-minded individuals who share your values and interests.
                </p>
                <p>
                    At ConnectSoulmate, we prioritize the safety and privacy of our members. Our robust verification processes and secure communication channels provide a trusted environment for meaningful connections to flourish. Whether you're looking for a serious relationship, friendship, or companionship, ConnectSoulmate is here to support you every step of the way.
                </p>
                <p>
                    Our team of dedicated professionals is passionate about helping you find happiness and fulfillment in your love life. We continually strive to enhance our services, incorporating the latest technology and feedback from our users to improve your experience. Join ConnectSoulmate today and embark on a journey to find your true soulmate.
                </p>
                
            </div>
        </div>
        <div class="col-md-6">
            <img src="Images/AG.jpg" alt="About Us Image"  style={{height:"500px",width:"500px"}}/>
        </div>
    </div>
</div>
   
  )
}

export default About
