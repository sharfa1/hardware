import React, { useEffect, useState } from 'react'
import './update.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';


    function Update(){



    const navigate =useNavigate();
    const{custID} = useParams();
    const[data,setData] = useState({});
useEffect(()=>{
    const fetchdataById =async()=>{
        try{
            const response = await axios.get(`http://localhost:8080/customer/getbyId/${custID}`);
            setData(response.data);

        }catch(error){
            console.log(error);
        }
    };
    fetchdataById();

},[custID]);
function handlesubmit(event){
    event.preventDefault();
    axios.put(`http://localhost:8080/customer/update/${custID}`,data);
    navigate("/customer");
}


return (
<div class="register">
<form onSubmit={handlesubmit}>

<label for="fname">First name:</label><br></br>
<input value={data.custFname} onChange={event=>setData({...data,custFname: event.target.value})} type="text" id="lname" name="custFname"/><br/>
<label  for="fname">Last name:</label><br></br>
<input  value={data.custLname} onChange={event=>setData({...data,custLname: event.target.value})} type="text" id="lname" name="custLname"/><br/>
<label for="fname">Adress:</label><br></br>
<input value={data.custAdress} onChange={event=>setData({...data,custAdress: event.target.value})} type="text" id="lname" name="custAdress"/><br/>
<label for="fname">Phone number:</label><br></br>
<input value={data.custPhone} onChange={event=>setData({...data,custPhone: event.target.value})} type="text" id="lname" name="custPhone"/><br/><br/>
<input type="submit" value="Submit"/>


</form>
</div>
    
    
  )
}
export  default Update


