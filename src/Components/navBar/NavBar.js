import "./NavBar.css";
import {Link} from 'react-router-dom';
import React, { useState } from 'react'
import {AiFillCloseCircle} from "react-icons/ai"

const NavBar=()=> {

const [active,setActive]=useState("nav-menu");
const show=()=>{
  setActive('nav-menu active')
}
const removeNavBar=()=>{
  setActive('nav-menu')
}

  return (
    <div className="NavBarItems">
        <div className="navbar-logo">
            <h1>Trip You</h1>
        </div>
       
          <ul className={active}>
              <li>
                <Link to="/"       className="nav-link"><i class="fa-solid fa-house"></i>Home</Link>
              </li>
              <li>
                <Link to="/about"  className="nav-link"><i class="fa-solid fa-circle-info"></i>About</Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link"><i class="fa-solid fa-address-book"></i>Contact</Link>
              </li>
              <li>
                <Link to="/service"  className="nav-link"><i class="fa-solid fa-briefcase"></i>Service</Link>
              </li>
              <li>
                <Link to= "/signup"  className="nav-link-mobile">Sign Up</Link>
              </li>
              <button href="#" className="button">Sign up</button>
          </ul>
          <div  onClick={show} className="menu-icons">  
            <i className="fas fa-bars" ></i>
        </div>
          <div onClick={removeNavBar} className="closeNavbar">
          <AiFillCloseCircle className="icon"/>
        </div>
    </div>
  )
}

export default NavBar