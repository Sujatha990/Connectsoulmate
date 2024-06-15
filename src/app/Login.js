'use client'
import React from 'react'
import "./login.css";

const Login = () => {
  return (
    <section class="vh-100">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 text-black">

        <div class="px-5 ms-xl-4">
          <span class="h1 fw-bold mb-0">ConnectSoulmate</span>
        </div>

        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form style={{width: "23rem"}}>

            <h3 class="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Log in</h3>

            <div data-mdb-input-init class="form-outline mb-4">
              <input type="email" id="form2Example18" class="form-control form-control-lg" />
              <label class="form-label" for="form2Example18">Email address</label>
            </div>

            <div data-mdb-input-init class="form-outline mb-4">
              <input type="password" id="form2Example28" class="form-control form-control-lg" />
              <label class="form-label" for="form2Example28">Password</label>
            </div>

            <div class="pt-1 mb-4">
              <button data-mdb-button-init data-mdb-ripple-init class="btn btn-info btn-lg btn-block" type="button">Login</button>
            </div>

            <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
            <p>Don't have an account? <a href="#!" class="link-info">Register here</a></p>

          </form>

        </div>

      </div>
      <div class="col-sm-6 px-0 d-none d-sm-block">
        <img src="Images/G2.webp"
          alt="Login image" class="w-100 vh-100" style={{objectFit: "cover", objectPosition: "left"}}/>
      </div>
    </div>
  </div>
</section>
  )
}

export default Login
