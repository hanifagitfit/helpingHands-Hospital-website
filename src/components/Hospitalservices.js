import React from 'react'
import services from '../images/heart.jpg';
import physics from '../logo/phisical.jpg';
import heart from '../logo/heart.png';
import nurse from '../logo/nurse.jpg';
import baby from '../images/baby.jpg'
import special from '../images/specialist.png'

const Hospitalservices = () => {
    return (
        <div className='service_wrapper'>
            <div className="showing">
                <h2>Services</h2>
                <div className="image">
                    <img src={services} alt="services" />
                </div>

                <div className='over'>
                    <p className='heading'>Optimize Your Health On Every Level</p>
                    <p className="pip">Whatever your age, stage, or medical condition, we have the services you need to experience true well-being. Whether you have just endured a minor orthopedic procedure, or you are dealing with something complex like Parkinson’s, or perhaps some other cardiopulmonary or neurological condition, we are ready to empower you by giving you the type of care that will make the difference. No matter what challenge you are facing, we want to develop and implement a rehabilitation plan that employs best practices and offers the most advanced technology available so that we can restore you to a state of optimal health and happiness.</p>
                </div>
            </div>
            <div className="externals">
                <div className="boxes2">
                    <div className="boxS" id='box1'>
                        <img src={physics} alt="doc" />
                        <h4>Physical Therapy</h4>
                        <p>Our physical therapists work with patients to treat injuries and chronic conditions with exercise and movement. Our goal is to restore normal functioning whenever possible so that our patients can experience the activities they love.</p>
                    </div>
                    <div className="boxS" id='box2'>
                        <img id='lineH' src={heart} alt="doc" />
                        <h4>Occupational Therapy</h4>
                        <p>Occupational therapy is a key component to a successful treatment plan. We focus on activities designed to help our patients develop skills essential not only to daily living, but to enjoying activities that are most meaningful.</p>
                    </div>
                    <div className="boxS" id='box31'>
                        <img src={nurse} alt="doc" />
                        <h4>24 Hour Nursing Care</h4>
                        <p>Our skilled nursing services are available to our patients around the clock, and all delivered by our compassionate team of nurses. Our nurses provide treatment in context of each patient’s individualized plan, thus offering our patients care that is consistent with your needs and goals.</p>
                    </div>
                    <div className="boxS" id='box4'>
                        <img id='babee' src={baby} alt="doc" />
                        <h4>Physician Services</h4>
                        <p>Our highly trained physicians offer full diagnostic and treatment services to our patients. They work in collaboration with the therapists, nurses, and staff to ensure that all conditions are properly managed, and that every opportunity for successful healing is brought to fruition.</p>
                    </div>
                    <div className="boxS" id='box5'>
                        <img id='spec' src={special} alt="doc" />
                        <h4>Specialist Services</h4>
                        <p>We have extensive specialty services available, provided by our stellar clinical team. The services include neurology, physiatry, cardiology, pulmonology, dermatology, podiatry, orthopedics, vascular, ENT, dentistry, psychology, psychiatry, and ophthalmology.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hospitalservices
