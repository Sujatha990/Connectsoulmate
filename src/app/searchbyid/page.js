import React from 'react'
import Searchbyid from '../Searchbyid'
import Footer from '../Footer'
import NavBar from "../NavBar";
import NavBar2 from "../NavBar2";

const page = () => {
  return (
    <div>
      <NavBar/>
      <NavBar2/>
      <Searchbyid/>
      <Footer/>
    </div>
  )
}

export default page
