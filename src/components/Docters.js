import React, { useState } from 'react';
import Footer from './Footer'
import { DocterInfo } from './DocterInfo'
import { Link } from 'react-router-dom'

const Docters = () => {
  const [data,setData]= useState(DocterInfo);

  const filterDocter =(e)=>{
    const search=e.target.value.toLowerCase()
    const filterDocter=DocterInfo.filter(data => data.experties.toLowerCase().includes(search))
    setData(filterDocter);
    
  }
  return (
    <>
      <div className='docters_wrapper'>
        <div className="search">
          <div className="find">
            <label>Search for Docter:</label>
            <input type="text"  onChange={(e)=> filterDocter(e)} placeholder='search by specialization' />
          </div>
          <div className="title">
            <h2 className='spacial'>Specialists</h2>
          </div>
        </div>
        <div className="docter_detail">
          {data.map((item,index)=>{
            return(
              <div className="doctors_info" key={index}>
              <img src={item.image} alt="doc" /> 
              <p>{item.name}</p>
              <p>{item.experties}</p>
              <div className="appoint">
               <Link to='/booking'> <h4  className='book'>Book an Appointment</h4></Link>
              </div>
            </div>
            )
          })}
         
        

         </div>
      </div>
      <Footer />
    </>
  )
}

export default Docters
