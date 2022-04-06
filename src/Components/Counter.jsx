import { useState } from "react";
const Counter =({value}) => {
const[count,setCount]=useState(value);
return(
    <div>
        <button
        onClick={()=>{
            setCount(count+1)
        }}
        >+</button>
        <div>{count}</div>
        <button
        onClick={()=>{
            setCount(count-1)
        }}
        >-</button>

    </div>
)
    }
    export default Counter