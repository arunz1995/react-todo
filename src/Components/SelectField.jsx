
import React from 'react'

const SelectField = ({Label,icon=null,error=null,info=null,value,onChange,options=[],}) => {
  return (
    <div className="input-field-container">
        <div className={`input-field`}>
          <select value={value} onChange={(e)=>onChange(e.target.value,e)}>
            <option value=""></option>
            {options.map((option,index)=>{
              return <option key={index} value={option}>{option}</option>
            })}

          </select>


            <label className={value?"filled-label":""}>{Label}</label>
            {icon && <div className='input-field-icon' style={{
                backgroundImage: `url(${icon})`
            }}> </div>}
            {info&& <div className="input-field-info-icon" title={info}>
            </div>}
    </div>
    {error && <div className='error-text'>
        {error}
        </div>}
        </div>
  )
}

export default SelectField