import React from 'react'
import "./destination.css"
import img1 from "../imgs/5.jpg";
import img2 from "../imgs/6.jpg";
import img3 from "../imgs/7.jpg";
import img4 from "../imgs/8.jpg";
import img5 from "../imgs/9.jpg";

const destinationData=(props)=> {
  return (
    <div>
        <div className={props.className}>
            <div className='des-text'>
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
            </div>
            <div className='image'>
                <img alt='img' src={props.img1}/>
                <img alt='img' src={props.img2}/>
            </div>
        </div>
    </div>
  )
}

export default destinationData