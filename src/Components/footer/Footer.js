import React from 'react'
import  './Footer.css'

const Footer=()=> {
  return (
    <div className='footer'>
        <div className='top'>
            <div >
                <h1>Trip You</h1>
                <p> Choose your Favourite destination</p>
            </div>
            <div>
                <a href='/'>
                    <i className='fa-brands fa-facebook-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-instagram-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-twitter-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-github-square'></i>
                </a>
            </div>
        </div>
        <div className='bottom'>
            <div>
                <h4>Projects</h4>
                <a href='/'> Changelog</a> 
                <a href='/'> Status</a>     
                <a href='/'> License</a>  
                <a href='/'> All Version</a>  
            </div>
            <div>
                <h4>Community</h4>
                <a href='/'> GitHub</a> 
                <a href='/'> Issues</a>     
                <a href='/'> Projects</a>  
                <a href='/'> Twitter</a>  
            </div>
            <div>
                <h4>Help</h4>
                <a href='/'> Support</a> 
                <a href='/'> Address</a>     
                <a href='/'> License</a>  
                <a href='/'> Contact</a>  
            </div>
            <div>
                <h4>Others</h4>
                <a href='/'> Message</a> 
                <a href='/'> Twitter</a>     
                <a href='/'> Instagram</a>  
                <a href='/'> Threads</a>  
            </div>
        </div>
    </div>
  )
}

export default Footer