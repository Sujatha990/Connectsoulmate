
import Link from 'next/link';
import "./globals.css";

const About = () => {

  return (
    <div className="container about-us">
      <div className="row">
        <div className="col-md-6 about-us-description">
          <div>
            <h2>About Us</h2>
            <p>
              In the rich tapestry of Indian culture, the traditional practice of arranged marriage holds a significant place. For generations, parents have taken on the important task of seeking ideal life partners for their children, collaborating with relatives, marriage bureaus, friends, and various intermediaries. However, the landscape has evolved dramatically in contemporary times. Presently, individuals seeking marriage wish to establish a genuine connection with their future partners, aiming to comprehensively understand and resonate with them before embarking on a lifelong journey together. This shift has sparked a paradigm change, placing Matrimonial Sites in India at the forefront of everyone's attention.
            </p>
            <p>
              At Connectsoulmate, we recognize and celebrate this transformative shift in the way people approach matrimony. We understand the importance of forging a profound connection that transcends conventional boundaries. Our platform embraces the essence of modern relationships, empowering individuals to engage and connect with potential life partners on their own terms.
              Our mission is to facilitate meaningful connections by providing a dynamic online space where individuals can navigate their journey towards matrimony with transparency, authenticity, and choice. We believe that every person deserves the opportunity to explore and discover compatibility in a manner that resonates with their values, aspirations, and personal preferences.
            </p> 
            <Link href="/about1" className="btn btn-primary">More</Link>

            
              
            
            
          
          </div>
        </div>
        <div className="col-md-6">
          <img src="Images/AG.jpg" alt="About Us Image" style={{height:"500px",width:"500px"}} />
        </div>
      </div>
    
    </div>
  );
};

export default About;
