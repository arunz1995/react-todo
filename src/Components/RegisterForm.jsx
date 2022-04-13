import React, { useEffect } from 'react'
import InputField from "./InputField"
import OrgIcon from "../Assets/images/org2.svg"
import empIcon from "../Assets/images/emp.svg"
import emailIcon from "../Assets/images/email.svg"
import phoneIcon from "../Assets/images/phone.svg"
import stateIcon from "../Assets/images/state.svg"
import cityIcon from "../Assets/images/city.svg"
import pinIcon from "../Assets/images/postalCode.svg"
import addressIcon from "../Assets/images/address.svg"
import SelectField from "./SelectField"
import Button from "./Button"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
const RegisterForm = () => {
    const formData=useSelector((state)=>state.orgDetails);
    const dispatch=useDispatch();
    const formDataError = useSelector((state) => state.orgDetailsError);    
    const [stateList, setStateList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const {name,employeeName,email,phone,state,city,postalCode,address}=formData;
    const onChange=(key,value)=>{
        dispatch({
          type:"SET_ORG_DETAILS",
          key,
          value
        })
      }
    const onChangeError=(key,value)=>{
      dispatch({
        type:"SET_ORG_DETAILS_ERROR",
        key,
        value
      })
    }
    useEffect(()=>{
      fetch("http://192.168.1.48:5000/utils/state-list")
      .then(res=>res.json())
      .then(response => {
        setStateList(response.data.map(({name})=>name));
      })
    },[])
    useEffect(()=>{
      if(state){
        fetch(`http://192.168.1.48:5000/utils/cites-list/${state}`)
        .then(res=>res.json())
        .then(response => {
          setCityList(response.data.map(({name})=>name));
        })
      }
    },[state])

    const formSubmit= async(e)=>{
      e.preventDefault();
      dispatch({
        type:"RESET_ORG_DETAILS_ERROR",
      })
        
      try{
        const result = await fetch("http://192.168.1.48:5000/organization/register",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(formData)
        }).then(res => res.json());
        if(!result.status){
          result.data.forEach(({path,message})=>{
            onChangeError(path,message);
          })
          return
        }
        alert("Successfully Registered");
      }catch(err){
        console.log(err);
      }
      }
  return (
    <form onSubmit={formSubmit}>
       <InputField Label={"Organization Name"} 
       icon={OrgIcon}
       info="Organization name as per records"
       error={formDataError.orgName}
         value={name}
         onChange={(value)=>onChange("name",value)}
         />
            <InputField Label={"Employee Name"}
            icon={empIcon}
            info="Employee name as per records"
            error={formDataError.employeeName}
            value={employeeName}
            onChange={(value)=>onChange("employeeName",value)}
            />
            <InputField Label={"Email"}
            icon={emailIcon}
            info="Email as per records"
            error={formDataError.email}
            value={email}
            onChange={(value)=>onChange("email",value)}
            />
            <InputField Label={"Phone Number"}
            icon={phoneIcon}
            info="Phone number as per records"
            error={formDataError.phone}
            value={phone}
            onChange={(value)=>onChange("phone",value)}
            />
            <SelectField Label={"State"}
            icon={stateIcon}
            error={formDataError.state}
            options={stateList}
            value={state}
            onChange={(value)=>onChange("state",value)}
            />
            <SelectField Label={"City"}
            options={cityList}
            icon={cityIcon}
            error={formDataError.city}  
            value={city}
            onChange={(value)=>onChange("city",value)}
            />
            <InputField Label={"Pin Code"}
            icon={pinIcon}
            info="Postal Code as per records"
            error={formDataError.postalCode}
            value={postalCode}
            onChange={(value)=>onChange("postalCode",value)}
            />
            <InputField
            type="textarea"
             Label={"Address"}
            icon={addressIcon}
            info="Address as per records"
            error={formDataError.address}
            value={address}
            onChange={(value)=>onChange("address",value)}
            />
            <Button type="submit" Label="Register"/> 


    </form>
  )
}

export default RegisterForm