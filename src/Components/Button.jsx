import React from 'react'

const Button = ({Label,type="button"}) => {
  return (
    <div className='button-container'>
     <Button type={type}>{Label}</Button>  
    </div>
  )
}

export default Button