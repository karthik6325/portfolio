import React from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Imagebgpro from '../components/imagebgpro';
import Aboutcontent from '../components/aboutcontent';
import Skill from '../components/skill';

const about = () => {
  return (
    <div>
      <Navbar/>
      <Imagebgpro heading="ABOUT." text="I am a MERN Stack Developer"/>
      <Aboutcontent/>
      <Skill/>
      <Footer/>
    </div>
  )
}

export default about
