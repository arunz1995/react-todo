import React from 'react'
import Left from './Left'
import image from "./../newone.jpg"

const Icc = () => {
  return (
      <div>
          <div className="main-class">
    <div className="organization">
        <div className="left-details">
            <Left placeholder='Organization Name'/>
            <Left placeholder=' Email'/>
            <Left placeholder='Phone Number' type='number'/>
            <Left placeholder='Address'/>
            <Left placeholder='State'/>
            <Left placeholder='City'/>
            <Left placeholder='Pin Code' type='number'/>
           <div className="button-class">
               <button>Register</button> 
               </div>
        </div>
        <div className="rectangle">
            </div>
        
        <div className="right-details">
            <img src={image} alt=""/>
            
            </div>
    </div>
    </div>
    </div>
  )
}

export default Icc