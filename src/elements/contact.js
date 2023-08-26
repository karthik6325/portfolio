import React from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Imagebgpro from '../components/imagebgpro';
import Form from '../components/form';

const contact = () => {
  return (
    <div>
      <Navbar/>
      <Imagebgpro heading="CONTACT." text="Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default contact
