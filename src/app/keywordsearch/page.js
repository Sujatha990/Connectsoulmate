import React from 'react'
import Keywordsearch from '../Keywordsearch'
import Footer from '../Footer'
import NavBar from "../NavBar";
import NavBar2 from "../NavBar2";

const page = () => {
  return (
    <div>
      <NavBar/>
      <NavBar2/>
      <Keywordsearch/>
      <Footer/>
    </div>
  )
}

export default page
