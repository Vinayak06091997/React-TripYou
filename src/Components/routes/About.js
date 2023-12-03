import React from 'react'
import NavBar from '../navBar/NavBar'
import Hero from '../navBar/Hero'
import img from"../imgs/4.webp";
import Footer from '../footer/Footer.js'
import AboutData from '../about/aboutData.js';

function About() {
  return (
    <div>
         <NavBar/>
         <Hero 
         cName="about"
         heroimg={img}
         title="About"
         />
         <AboutData/>
         <Footer/>
    </div>
  )
}

export default About