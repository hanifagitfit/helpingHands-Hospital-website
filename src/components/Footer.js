import React from 'react'
import location from '../logo/location.png';
import call from '../logo/phone.png';
import email from '../logo/email.png';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='information'>
      <div className="sampark">
        <div className="contacts">
          <h3> VISIT US</h3>
          <img src={location} alt="locate" />
          <p className='prime'>Fixing Ground,1098 Shantinikatan, Asguard. </p>
        </div>
        <div className="contacts">
          <h3> CALL US</h3>
          <img src={call} alt="locate" />
          <p className='prime'>(1234) 78965, 2340987655</p>
        </div>
        <div className="contacts">
          <h3> EMAIL US</h3>
          <img src={email} alt="locate" />
         <Link to='/contact'> <p className='prime'>booking@helpinghands.com</p></Link>
        </div>
      </div>
      <div className="rights">
        <p>Helping hands Nursing & Rehabilitation Center</p>
        <p>All Rights Reserved 2023</p>
      </div>
      <div className="links">
        <ul>
          <li><Link to="/services">Our Services</Link></li>
          <li><Link to="/docters">Doctors</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
