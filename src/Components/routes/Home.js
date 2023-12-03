import React from 'react'
import NavBar from '../navBar/NavBar.js';
import Hero from '../navBar/Hero.js';
import img from"../imgs/1.jpg";
import Destination from '../destinations/destination.js';
import Trip from   '../trip/Trip.js'
import Footer from '../footer/Footer.js'

const Home=() =>{
  return (
    <div>
         <NavBar/>
         <Hero 
         cName="hero"
         heroimg={img}
         title="Your Journey Your Story"
         text="Choose Your Favouite Destination"
         buttonText="Travel  Plan"
         url="/travel"
         btnClass="show"
         />
         <Destination/>
         <Trip/>
         <Footer/>
    </div>
  )
}

export default Home