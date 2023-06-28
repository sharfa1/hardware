import React, { useState } from 'react'
import './form.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Form() {


  const [Fname,setFname]=useState(['']);
  const [Lname,setLname]=useState(['']);
 const [adres,setAdres]=useState(['']);
  const [Phone,setPhone]=useState(['']);
 const navigate = useNavigate();
  const handlesubmit=(event)=>{
    event.preventDefault();
    const request={
      custFname:Fname,
      custLname:Lname,
      custAdress:adres,
      custPhone:Phone,
    };

    axios.post("http://localhost:8080/customer/save",request).then(response=>{
      console.log(response.data);
      navigate("/customer");
      
    })
  }


  return (
    <div class="register">
    <form onSubmit={handlesubmit}>
   
    <label for="fname">First name:</label><br></br>
    <input value = {Fname} on onChange={event=>setFname(event.target.value)} type="text" id="lname" name="custFname"/><br/>
    <label for="fname">Last name:</label><br></br>
    <input value = {Lname} onChange={event=>setLname(event.target.value)} type="text" id="lname" name="custLname"/><br/>
    <label for="fname">Adress:</label><br></br>
    <input value={adres} onChange={event=>setAdres(event.target.value)} type="text" id="lname" name="custAdress"/><br/>
    <label for="fname">Phone number:</label><br></br>
    <input value = {Phone}on onChange={event=>setPhone(event.target.value)} type="text" id="lname" name="custPhone"/><br/><br/>
    <input type="submit" value="Submit"/>
    

  </form>
  </div>
  )
}
export default Form
