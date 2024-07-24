import React from 'react'
import Side from './Side';
import About from './About';
import SucessStories from './SucessStories';
import Footer from "./Footer";
import Register from './Register';
import Upgrade from './Upgrade';
import Service from './Service';

const Home1 = () => {
  return (
    <div>
      <Side/>
      <About/>
      <Register/>
      <Upgrade/>
      <Service/>
      <SucessStories/>
      <Footer/>
    </div>
  )
}

export default Home1
