import React from 'react'
import Link from 'next/link'

const NavBar2 = () => {
  return (
    <div >

      <ul class="nav justify-content-center pt-2 pb-2 bg-secondary text-white" style={{fontSize:"20px"}} >
        <li class="nav-item">

          <Link class="nav-link text-white" href="/">
            <i class="fas fa-home"></i> Home
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" href="/about">
            <i class="fas fa-info-circle"></i> About
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" href="/service">
            <i class="fas fa-concierge-bell"></i> Service
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" href="/upgrade">
            <i class="fas fa-arrow-up"></i> Upgrade
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" href="/sucessstories">
            <i class="fas fa-star"></i> Success Stories
          </Link>
        </li>
 
 
</ul>
    </div>
  )
}

export default NavBar2
