import React from 'react'
import Image from 'next/image'

const SuccessStories = () => {
  return (
    <div className="container success-stories">
      <h2 className='display-4'>Success Stories</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="story">
            <Image
              src="/Images/Fb1.jpg" // Path relative to public directory
              alt="Success Story 1"
              width={500} // Adjust width as needed
              height={300} // Adjust height as needed
            />
            <div className="story-content">
              <h4>John &amp; Jane</h4>
              <p style={{textAlign:"justify"}}>John and Jane met through ConnectSoulmate and quickly realized they were meant for each other. Their shared interests and values brought them closer, and they are now happily married.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="story">
            <Image
              src="/Images/fb2.jpg"
              alt="Success Story 2"
              width={500} // Adjust width as needed
              height={300} // Adjust height as needed
            />
            <div className="story-content">
              <h4>Mike &amp; Anna</h4>
              <p style={{textAlign:"justify"}}>Mike and Anna found each other on ConnectSoulmate and formed a deep connection. Their love story blossomed into a beautiful relationship, and they are excited about their future together.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="story">
            <Image
              src="/Images/fb3.jpeg"
              alt="Success Story 3"
              width={500} // Adjust width as needed
              height={300} // Adjust height as needed
            />
            <div className="story-content">
              <h4>Emily &amp; David</h4>
              <p style={{textAlign:"justify"}}>Emily and David&#39;s journey began with a simple match on ConnectSoulmate. Today, they are grateful for the platform that brought them together and are planning their dream wedding.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessStories
