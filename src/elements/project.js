import React from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Imagebgpro from '../components/imagebgpro';
import Work from '../components/work';

const project = () => {
  return (
    <div>
      <Navbar/>
      <Imagebgpro heading="PROJECTS." text="Some of my most recent works"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default project
