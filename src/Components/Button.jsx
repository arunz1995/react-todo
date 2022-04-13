import React from "react"
const Button = ({Label,type="button"}) => {
  return (
    <div className='button-container'>
     <button type={type}>{Label}</button>  
    </div>
  )
}

export default Button