import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import "./service.css";

const Service = () => {
  return (
    <div>
      <h1 className="display-4" style={{ textAlign: "center", padding: "3rem 1rem" }}>Services</h1>
      <div id="multi-item-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <Image
                    src="/Images/pre.jpg" // Path relative to public directory
                    alt="Pre-Wedding Dietician Services"
                    width={600}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">Pre-Wedding Dietician Services</p>
                    <Link href="/prewedding" className="btn btn-primary">Click for more Details</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <Image
                    src="/Images/nri1.jpg"
                    alt="NRI Matrimonial Services"
                    width={600}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">NRI Matrimonial Services</p>
                    <Link href="/nri" className="btn btn-primary">Click for more Details</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <Image
                    src="/Images/el.jpg"
                    alt="Elite Matrimonial Services"
                    width={600}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">Elite Matrimonial Services</p>
                    <Link href="/elite" className="btn btn-primary">Click for more Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <Image
                    src="/Images/Remarriage.jpg"
                    alt="Re-Marriage Services"
                    width={600}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">Re-Marriage Services</p>
                    <Link href="/remarriage" className="btn btn-primary">Click for more Details</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <Image
                    src="/Images/d1.jpg"
                    alt="Divorcee Matrimony Services"
                    width={600}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">Divorcee Matrimony Services</p>
                    <Link href="/divorcee" className="btn btn-primary">Click for more Details</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <Image
                    src="/Images/Events.jpeg"
                    alt="Wedding Events Services"
                    width={600}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">Wedding Events Services</p>
                    <Link href="/event" className="btn btn-primary">Click for more Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <Image
                    src="/Images/ass.jpg"
                    alt="Assisted Services"
                    width={600}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">Assisted Services</p>
                    <Link href="/assisted" className="btn btn-primary">Click for more Details</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <Image
                    src="/Images/hor.jpg"
                    alt="Horoscope Matching Services"
                    width={600}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">Horoscope Matching Services</p>
                    <Link href="/horoscope" className="btn btn-primary">Click for more Details</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <Image
                    src="/Images/PreWedding.jpg" // Path relative to public directory
                    alt="Pre-Wedding Dietician Services"
                    width={600}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">Pre-Wedding Dietician Services</p>
                    <Link href="/prewedding" className="btn btn-primary">Click for more Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#multi-item-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#multi-item-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Service
