import Link from 'next/link';
import Image from 'next/image';
import "./globals.css";

const About = () => {
  return (
    <div className="container about-us">
      <div className="row">
        <div className="col-md-6 about-us-description">
          <h2 className="display-4">About Us</h2>
          <p style={{ textAlign: "justify" }}>
            In the rich tapestry of Indian culture, the traditional practice of arranged marriage holds a significant place. For generations, parents have taken on the important task of seeking ideal life partners for their children, collaborating with relatives, marriage bureaus, friends, and various intermediaries. However, the landscape has evolved dramatically in contemporary times. Presently, individuals seeking marriage wish to establish a genuine connection with their future partners, aiming to comprehensively understand and resonate with them before embarking on a lifelong journey together. This shift has sparked a paradigm change, placing Matrimonial Sites in India at the forefront of everyone&apos;s attention.
          </p>
          <Link href="/about1" className="btn btn-primary">More</Link>
        </div>
        <div className="col-md-6" style={{ position: 'relative', height: '400px' }}>
          <Image 
            src="/Images/ab1.jpg" 
            alt="About Us Image" 
            layout="fill" 
            objectFit="cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default About;
