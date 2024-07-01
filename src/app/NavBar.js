"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import "./navbar.css";

const NavBar = () => {
    useEffect(()=>{
        require("bootstrap/dist/js/bootstrap.js");
    },[]);
  return (

      <nav class="navbar navbar-expand-lg bg-primary text-white p-3 pt-3 pb-3">
          <div class="container-fluid">
              <a class="navbar-brand text-white" href="#" style={{fontSize:"30px"}}> <i class="fas fa-heart text-danger"></i> ConnectSoulmate
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">


                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0 " style={{fontSize:"20px"}}>
                      <li class="nav-item">
                          <Link class="nav-link  text-white" href="/login">
                              <i class="fas fa-sign-in-alt"></i> Login
                          </Link>
                      </li>

                      <li class="nav-item">
                          <Link class="nav-link text-white" href="/register">
                              <i class="fas fa-user-plus"></i> Register
                          </Link>
                      </li>
                      <li class="nav-item">
                          <Link class="nav-link  text-white" href="/help" >
                              <i class="fas fa-question-circle"></i> Help
                          </Link>
                      </li>
                      <li class="nav-item">
                          <Link class="nav-link text-white" href="/search" >
                              <i class="fas fa-search"></i> Search
                          </Link>
                      </li>

                      
                  </ul>

              </div>
          </div>
      </nav>
      

  )
}

export default NavBar
