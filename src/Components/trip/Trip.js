import React from 'react'
import './Trip.css'
import TripData from './TripData.js'
import img1 from "../imgs/5.jpg"
import img2 from "../imgs/6.jpg";
import img3 from "../imgs/7.jpg";
import img4 from "../imgs/8.jpg";
import img5 from "../imgs/99.jpg";


function Trip() {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can discover unique destination using Google Maps.</p>
        <div className='tripcard'>
            <TripData
                img={img1}
                title="Trip in Mysore"
                text="Mysuru is famous in the world for its sandalwood and rosewood artifacts, 
                stone sculptures, incense sticks, inlay work with ivory and its exquisite silk sarees. 
                Mysuru emerged to be one of the major IT hubs in Karnataka. Mysuru is second in state for 
                software exports"
            />
            <TripData
                img={img3}
                title="Trip in Coorg"
                text="Coorg, also known as Kodagu, is a beautiful hill station in the Indian state of Karnataka. 
                It is famous for its coffee plantations, steep hills, countless streams, rich flora & fauna, 
                lush forests and breathtaking views"
            />
            <TripData
                img={img5}
                title="Trip in Honnavara"
                text="The port town of Honnavar is famous for its scenic beauty and the many islands that have 
                been formed by the merging of River Sharavati into the Arabian Sea. The pristine Apsara Konda 
                Falls and the Kasarkod Beach are other attractions in the area"
            />
        </div>
    </div>
  )
}

export default Trip