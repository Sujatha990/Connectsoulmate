import React from 'react'

const Side = () => {
  return (
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="Images/Replaceimg2.jpg" class="d-block w-100" style={{width:"600px",height:"600px"}} alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="Images/Replaceimg1.jpg" class="d-block w-100" style={{width:"600px",height:"600px"}} alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="Images/Replaceimg3.jpg" class="d-block w-100" style={{width:"600px",height:"600px"}} alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  )
}

export default Side
