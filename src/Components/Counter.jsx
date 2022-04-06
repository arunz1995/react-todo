import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Counter =({value}) => {
    const navigate = useNavigate();
const[count,setCount]=useState(value);
return(
    <>
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
        <br />
        <Link to ="/second">Second</Link>
        <br />
        <button onClick={()=> {
            navigate("/")
        }}>Back</button>

    </div>
    </>
)
    }
    export default Counter