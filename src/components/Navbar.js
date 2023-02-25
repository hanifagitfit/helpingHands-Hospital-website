import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [mobile,setMobile]=useState(false);
  return (
    <div className='navbar'>
       <h4 className='hands'>Helping Hands</h4>
        <ul className={mobile ? 'nav_link_mobile' : 'nav_links'} onClick={()=>setMobile(false)}>
           
            <li ><NavLink  to="/">Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/facilities">Facility</NavLink></li>
            <li><NavLink to="/docters">Find Doctors</NavLink></li>
            <li><NavLink to="/testimonials">Testimonials</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
           
        </ul>
        <div className="burger" onClick={()=>setMobile(!mobile)} >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
           </div>
    </div>
  )
}

export default Navbar
