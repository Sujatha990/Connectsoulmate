import React from 'react'
import Image from 'next/image'

const Side = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image
            src="/Images/Replaceimg2.jpg" // Path relative to public directory
            alt="Image 2"
            width={600}
            height={600}
            className="d-block w-100"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/Images/Replaceimg1.jpg"
            alt="Image 1"
            width={600}
            height={600}
            className="d-block w-100"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/Images/Replaceimg3.jpg"
            alt="Image 3"
            width={600}
            height={600}
            className="d-block w-100"
          />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Side
