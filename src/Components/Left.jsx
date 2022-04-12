import React from 'react'

const Left = ({placeholder,type="text"}) => {
  return (
    <div className='input-details'>
        <input type={type} placeholder={placeholder}  className="type-details"/>
    </div>
  )
}

export default Left