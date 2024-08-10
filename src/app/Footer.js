import React from 'react'
import "./globals.css";
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faphonevolume,fafacebook
} from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <footer class="text-center text-lg-start  text-muted  p-3 mb-2  text-dark" style={{backgroundColor:"#EDF4F2"}}>
      
    
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>ConnectSoulmate
              </h6>
              <p style={{textAlign:"justify"}}>
              In the rich tapestry of Indian culture, the traditional practice of arranged marriage holds a significant place. For generations, parents have taken on the important task of seeking ideal life partners for their children, collaborating with relatives, marriage bureaus, friends, and various intermediaries.
              </p>
              <div>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-google"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-github"></i>
          </a>
        </div>
            </div>
    
           
    
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <Link href="/home" class="text-reset">Home</Link>
              </p>
              <p>
                <Link href="/about" class="text-reset">About</Link>
              </p>
              <p>
                <Link href="/service" class="text-reset">Services</Link>
              </p>
              <p>
                <Link href="/upgrade" class="text-reset">Packages</Link>
              </p>
              <p>
                <Link href="/sucessstories" class="text-reset">SucessStories</Link>
              </p>
            </div>
    
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              
              <p>
                <i class="fas fa-envelope me-3"></i>
                info@ConnectSoulmate.com
              </p>
              
             
            </div>
          </div>
        </div>
      </section>
    
      <div class="text-center p-4">

      Copyright © 2024 ConnectSoulmate
      </div>
    </footer>

     
  )
}

export default Footer
