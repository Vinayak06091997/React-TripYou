import React from 'react'
import "./destination.css"
import DestinationData from './destinationData.js'
import img1 from "../imgs/5.jpg";
import img2 from "../imgs/55.jpg";
import img3 from "../imgs/7.jpg";
import img4 from "../imgs/6.jpg";
import img5 from "../imgs/99.jpg";
import img6 from "../imgs/9.jpg";


const destination=()=> {
  return (
    <div className='destination'>
        <br></br>
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to see a lot,within atime frame.</p>
       <DestinationData
            className='first-des'
            heading ="Mysore, KRS"
            text="Undoubtedly the most popular tourist attraction of Mysore, Mysore Maharaja Palace is located in the heart of Mysore city. 
            Known for its renowned Mysore Dussehra Festival, it is one of the largest palaces in India.
            KRS Dam is an important source of drinking water for the cities of Mysore and Bangalore. 
            The River Cauvery accounts for the main supply of water harnessed from the dam."
            img1={img1}
            img2={img2}
       />

        <DestinationData
           className='first-des-reverse'
            heading ="Coorg"
            text="Coorg also has a rich historical past. The balance of history and nature reflects in no place 
            better than in Coorgs administrative capital, Madikeri. Take a tour to Namdroling Monastery Golden 
            Temple and beautiful Madikeri Fort to wrap up your sightseeing.This sleepy town commands spectacular 
            views of the Western Ghats and numerous waterfalls, temples, forts, lush forests and plantations add to 
            its attractions. The contemplative surroundings of Coorg and the adventure sports that youll find here 
            make it a complete holiday destination."
            img1={img3}
            img2={img4}
       />
         <DestinationData
           className='first-des'
            heading ="Honnavara"
            text=" Honnavara is a port town in Coastal Karnataka known for its beautiful landscapes and rich history. 
            The port town of Honnavar is famous for its scenic beauty and the many islands that have been 
            formed by the merging of River Sharavati into the Arabian Sea. 
            The pristine Apsara Konda Falls and the Kasarkod Beach are other attractions in the area"
            img1={img5}
            img2={img6}
       />
    </div>
  )
}

export default destination