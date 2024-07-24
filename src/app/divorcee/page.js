import React from 'react'
import Divorcee from '../Divorcee'
import Footer from '../Footer'
import NavBar from "../NavBar";
import NavBar2 from "../NavBar2";

const page = () => {
  return (
    <div>
      <NavBar/>
      <NavBar2/>
      <Divorcee/>
      <Footer/>
    </div>
  )
}

export default page
