import React from 'react'
import physics from '../logo/phisical.jpg';
import heart from '../logo/heart.png';
import nurse from '../logo/nurse.jpg';
import injection from '../images/injection.jpg'

const Service = () => {
    return (
        <>
        <div className='box_wrapper'>
            <div className="boxes">
                <div className="box" id='box1'>
                    <h4>Physical Therapy</h4>
                    <img src={physics} alt="doc" />
                    <p>Our physical therapists work with patients to treat injuries and chronic conditions with exercise and movement.</p>
                </div>
                <div className="box" id='box2'>
                    <h4>Occupational Therapy</h4>
                    <img id='lineH' src={heart} alt="doc" />
                    <p>Occupational therapy is a key component to a successful treatment plan. focus on activities designed to help patients develop skills.</p>
                </div>
                <div className="box" id='box3'>
                    <h4>24 Hour Nursing Care</h4>
                    <img src={nurse} alt="doc" />
                    <p>Our skilled nursing services are available to our patients around the clock, and all delivered by our compassionate team of nurses.</p>
                </div>
            </div>
        </div>
        <section>
          <div className="Kindness">
            <div className="section2_wrapper">
                <img src={injection} alt="inn" />
                <div className="speech">
                    <h2>DEDICATED TO HELPING YOU</h2>
                    <p className='para'> At Helping Hands, we believe that rehabilitation is a journey toward wellness mind, body, and spirit. To that end, we have developed programs designed to optimize your health on every level, and we deliver them in a unique environment with a dynamic staff that will both inspire and motivate you.We are dedicated to helping you rediscover your independence, so that you can enjoy the people and activities that make you feel most alive.</p>
                </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default Service
