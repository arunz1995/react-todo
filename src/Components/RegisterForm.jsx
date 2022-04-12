import React, { useEffect } from 'react'
import InputField from "./InputField"
import OrgIcon from "../Assets/images/org2.svg"
import empIcon from "../Assets/images/emp.svg"
import emailIcon from "../Assets/images/email.svg"
import phoneIcon from "../Assets/images/phone.svg"
import stateIcon from "../Assets/images/state.svg"
import cityIcon from "../Assets/images/city.svg"
import pinIcon from "../Assets/images/pincode.svg"
import addressIcon from "../Assets/images/address.svg"
import SelectField from "./SelectField"
import Button from "./Button"
import { useState } from 'react';
const RegisterForm = () => {
    const [formData,setFormData]=useState({
        orgName:"",
        employeeName:"",
        email:"",
        phone:"",
        state:"",
        city:"",
        postalCode:"",
        address:"",

    });
    const [stateList, setStateList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const {orgName,employeeName,email,phone,state,city,postalCode,address}=formData;
    const onChange=(key,value)=>{
        setFormData({...formData,[key]:value});
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
      try{
        const result = await fetch("http://192.168.1.48:5000/register",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(formData)
        }).then(res => res.json());
        if(!result.status){
          console.log(result.data);
        }
      }catch(err){
        console.log(err);
      }
      }
  return (
    <form onSubmit={formSubmit}>
       <InputField Label={"Organization Name"} 
       icon={OrgIcon}
       info="Organization name as per records"
       error=''
         value={orgName}
         onChange={(value)=>onChange("orgName",value)}
         />
            <InputField Label={"Employee Name"}
            icon={empIcon}
            info="Employee name as per records"
            error=''
            value={employeeName}
            onChange={(value)=>onChange("employeeName",value)}
            />
            <InputField Label={"Email"}
            icon={emailIcon}
            info="Email as per records"
            error=''
            value={email}
            onChange={(value)=>onChange("email",value)}
            />
            <InputField Label={"Phone Number"}
            icon={phoneIcon}
            info="Phone number as per records"
            error=''
            value={phone}
            onChange={(value)=>onChange("phone",value)}
            />
            <SelectField Label={"State"}
            icon={stateIcon}
            error=''
            options={stateList}
            value={state}
            onChange={(value)=>onChange("state",value)}
            />
            <SelectField Label={"City"}
            options={cityList}
            icon={cityIcon}
            error=''
            value={city}
            onChange={(value)=>onChange("city",value)}
            />
            <InputField Label={"Pin Code"}
            icon={pinIcon}
            info="Postal Code as per records"
            error=''
            value={postalCode}
            onChange={(value)=>onChange("postalCode",value)}
            />
            <InputField
            type="textarea"
             Label={"Address"}
            icon={addressIcon}
            info="Address as per records"
            error=''
            value={address}
            onChange={(value)=>onChange("address",value)}
            />
            <Button type="submit" Label="Register"/>


    </form>
  )
}

export default RegisterForm