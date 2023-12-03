import React from 'react'
import NavBar from '../navBar/NavBar'
import Hero from '../navBar/Hero'
import img from"../imgs/3.jpg";
import Footer from '../footer/Footer.js'
import ContactData from '../contact/contactData.js'

function Contact() {
  return (
    <div>
       <NavBar/>
         <Hero 
         cName="Contact"
         heroimg={img}
         title="Contact"
         />
         <ContactData/>
         <Footer/>
    </div>
  )
}

export default Contact