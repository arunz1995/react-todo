import React from 'react'

const InputField = ({type="text",Label,icon=null,error=null,info=null,value,onChange}) => {
  return (
    <div className="input-field-container">
        <div className={`input-field ${type === "textarea"?"textarea-field":""}`}>
            {type=== "textarea"?
            <textarea
            value={value}
            onChange={(e)=>onChange(e.target.value,e)}
           />  
            :<input 
            type={type} 
            value={value}
             onChange={(e)=>onChange(e.target.value,e)}
            />}    
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

export default InputField