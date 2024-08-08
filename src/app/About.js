import Link from 'next/link';
import Image from 'next/image';
import "./globals.css";

const About = () => {
  return (
    <div className="container about-us">
      <div className="row">
        <div className="col-md-6 about-us-description">
          <div>
            <h2 className="display-4" style={{ paddingLeft: "50px" }}>About Us</h2>
            <p style={{ paddingLeft: "50px" ,textAlign:"justify"}}>
              In the rich tapestry of Indian culture, the traditional practice of arranged marriage holds a significant place. For generations, parents have taken on the important task of seeking ideal life partners for their children, collaborating with relatives, marriage bureaus, friends, and various intermediaries. However, the landscape has evolved dramatically in contemporary times. Presently, individuals seeking marriage wish to establish a genuine connection with their future partners, aiming to comprehensively understand and resonate with them before embarking on a lifelong journey together. This shift has sparked a paradigm change, placing Matrimonial Sites in India at the forefront of everyone&apos;s attention.
            </p>
            <div style={{ paddingLeft: "50px" }}>
              <Link href="/about1" className="btn btn-primary">More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6" style={{ paddingLeft:"50px", position: 'relative', height: '400px', width: '500px' }}>
          <Image 
            src="/Images/ab1.jpg" 
            alt="About Us Image" 
            layout="fill" 
          />
        </div>
      </div>
    </div>
  );
};

export default About;
