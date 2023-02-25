import React from 'react'
import dylesis from '../images/dylesis.jpg';
import bed from '../images/bed.jpg';
import children from '../images/children.jpg';
import embulence from '../images/embulence.jpg';
import hallway from '../images/hallway.jpg';
import med from '../images/medecein.jpg';
import ward1 from '../images/ward1.jpg';
import ward2 from '../images/ward2.jpg';
import xray from '../images/xray.jpg';
import white from '../images/white.jpg';
import operation from '../images/operationtheater.jpg';
import room from '../images/operation room.jpg';
import Footer from './Footer'

const Facilities = () => {
  return (
    <>
    <div className='facility_wrapper'>
      <div className="description">
        <h2>OUR FACILITIES</h2>
        <h4>Welcome to World Class Facilities</h4>
      </div>
      <div className="machene">
        <img src={dylesis} alt="known" />
        <div className="facility_dialysisi">
        <h2>DIALYSIS CENTER</h2>
        <p>Comfortable, state of the art dialysis facilities with luxury amenities.</p>
      </div>
      </div>
      <div className="fac_wrapper">
        <h3>We want you to enjoy your stay with us, and we are confident that you will. Morningside Rehabilitation and Nursing Center is clean, professional, and polished. It is an impressive, but comfortable, space to spend some time getting well. We have a kind, compassionate team that is truly dedicated to creating an environment that will help promote the healing process. We very much look forward to hosting you.</h3>
        <div className="images">
          <img src={bed} alt="bed" />
          <img src={children} alt="children" />
          <img src={embulence} alt="embulence" />
          <img src={hallway} alt="hallway" />
          <img src={med} alt={med} />
          <img src={operation} alt="operation" />
          <img src={room} alt="room" />
          <img src={ward1} alt="room" />
          <img src={ward2} alt="room" />
          <img src={xray} alt="room" />
          <img src={white} alt="room" />
        </div>
      </div>
     
    </div>
    <Footer/>
    </>
  )
}

export default Facilities
