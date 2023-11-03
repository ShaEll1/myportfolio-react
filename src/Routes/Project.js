import React from 'react'
import Navbar from '../Components/Navbar';
import Cards from "../Components/Cards";
import Footer from '../Components/Footer';
import Work from '../Components/Work';

function Project() {
  return (
    <div>
      <Navbar />
      <Work/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Project;