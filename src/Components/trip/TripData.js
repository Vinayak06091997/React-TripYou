import React from 'react'
import "./Trip.css"


function TripData(props) {
  return (
    <div className='trip-card'>
        <div className='trip-img'>   
            <img alt='img' src={props.img}/>
        </div>
        <h1>{props.title}</h1>
        <p>{props.text}</p>

    </div>
  )
}

export default TripData