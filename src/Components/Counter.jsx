import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const Counter =({value}) => {
    const navigate = useNavigate();
const count = useSelector((state) => state.counter);
const dispatch = useDispatch();
return(
    <>
    <div>
        <button
        onClick={()=>{
            dispatch({type:"INCREMENT"});
        }}
        >+</button>
        <div>{count}</div>
        <button
        onClick={()=>{
            dispatch({type:"DECREMENT"});
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