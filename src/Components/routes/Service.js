import React from 'react'
import NavBar from '../navBar/NavBar'
import Hero from '../navBar/Hero'
import img from"../imgs/4.webp";
import Footer from '../footer/Footer.js'
import Trip from   '../trip/Trip.js'
function service() {
  return (
    <div>
       <NavBar/>
         <Hero 
         cName="Service"
         heroimg={img}
         title="Service"
         />
        <Trip/>
        <Footer/>

    </div>
  )
}

export default service