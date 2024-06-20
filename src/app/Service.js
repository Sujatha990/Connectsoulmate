import React from 'react'
import Link from 'next/link'
import "./service.css";



const Service = () => {
  return (
    <div>
    <h1 style={{textAlign:"center"}}>Services</h1>
    <div id="multi-item-carousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <img src="Images/PreWedding.jpg" class="card-img-top" alt="..." style={{width:"400px",height:"400px"}}/>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">Pre-Wedding Dietician Services</p>
              <Link href="/prewedding" class="btn btn-primary">Click for more Detailes</Link>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="Images/NRI.jpeg" class="card-img-top" alt="..." style={{width:"400px",height:"400px"}}/>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">NRI Matrimonial Services</p>
              <Link href="/nri" class="btn btn-primary">Click for more Detailes</Link>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="Images/E1.jpeg" class="card-img-top" alt="..." style={{width:"400px",height:"400px"}}/>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">Elite Matrimonial Services.</p>
              <Link href="/elite" class="btn btn-primary">Click for more Detailes</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <img src="Images/Remarriage.jpg" class="card-img-top" alt="..." style={{width:"400px",height:"400px"}}/>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">Re-Marriage Services.</p>
              <Link href="/remarriage" class="btn btn-primary">Click for more Detailes</Link>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="Images/Divorcee.jpeg" class="card-img-top" alt="..." style={{width:"400px",height:"400px"}}/>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">Divorcee Matrimony Services.</p>
              <Link href="/divorcee" class="btn btn-primary">Click for more Detailes</Link>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="Images/Events.jpeg" class="card-img-top" alt="..." style={{width:"400px",height:"400px"}}/>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">Wedding Events Services.</p>
              <Link href="/event" class="btn btn-primary">Click for more Detailes</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <img src="Images/Assisted.jpeg" class="card-img-top" alt="..." style={{width:"400px",height:"400px"}}/>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">Assisted Services.</p>
              <Link href="/assisted" class="btn btn-primary">Click for more Detailes</Link>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="Images/Horoscope.jpeg" class="card-img-top" alt="..." style={{width:"400px",height:"400px"}}/>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">Horoscope matching services.</p>
              <Link href="/horoscope" class="btn btn-primary">Click for more Detailes</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#multi-item-carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#multi-item-carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</div>
  )
}

export default Service
