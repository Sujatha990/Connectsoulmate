import React from 'react'
import AdvanceSearch from '../AdvanceSearch'
import Footer from '../Footer'
import NavBar from "../NavBar";
import NavBar2 from "../NavBar2";

const page = () => {
  return (
    <div>
      <NavBar/>
      <NavBar2/>
      <AdvanceSearch/>
      <Footer/>
    </div>
  )
}

export default page
