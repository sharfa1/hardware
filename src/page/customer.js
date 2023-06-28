import React, { useEffect, useState } from 'react'
import './customer.css'
import { Link, useNavigate } from 'react-router-dom'
import Dashbord from '../component/dashbord'
import axios from 'axios';
import '../../node_modules/font-awesome/css/font-awesome.min.css'
 function Customer() {


    const [customers, setCustomers] = useState([]);
    const Navigate = useNavigate();

    useEffect(()=>{
        loadCustomers();
    },[]);
    const loadCustomers = async () =>{
        try{
            const respo = await axios.get("http://localhost:8080/customer/List");
            setCustomers(respo.data);
            
        }catch(error){
            console.log(error);
        }
    };
    const deletehandlesubmit = (custID) =>{
        const popMsg =window.confirm('Are you sure you want to delete this?');
        if (popMsg){
            
           axios.delete(`http://localhost:8080/customer/delete/${custID}`)
            .then((res)=>{
                Navigate('/customer');
                window.location.reload();
            })
        }
    }
  return (


<div>


{/* <div class="d1">
        <center><h2>Hardware shop</h2></center>
        <ul>
            <li><a ><i class="icon icon-home"></i> Dashbord</a></li><br/>
            <li><a ><i class="icon icon-user"></i> Customer</a></li><br/>
            <li><a ><i class="icon-handbag"></i> Product</a></li><br/>
            <li><a ><i class="zmdi zmdi-arrow-right"></i> Sales</a></li><br/>
          <Link to={"/report"}> <li><a > <i class="fa fa-bank"></i>Report</a></li><br/></Link> 
        
        </ul>
</div> */}
<Dashbord/>
<div className="d2">
        <div className="card">
            <div className="card-body">
            <h3 className="card-title">Customer Details</h3>
            <p className="card-textt">Customer </p>
            <p className="card-link">To add another customer</p>
            <Link to={"/form"}><button> Add New</button></Link>
            </div>
        </div><br/><br/>
        <div className="card">
            <div className="card-body">
            <h3  className="card-title">List of customers</h3>
            
            
            </div>
            <table>
                <tr>
                <th>S/N</th>
                <th>CustFname</th>
                <th>custLname</th>
                <th>custAdress</th>
                <th>custPhone </th>
                <th>Action</th>
                
                </tr>
              
                    {
                        customers.length >0 ?(
                            customers.map((Custom, index) =>(


                                <tr key={index} >
                <td>{index + 1}</td>
                <td>{Custom.custFname}</td>
                <td>{Custom.custLname}</td>
                <td>{Custom.custAdress}</td>
                <td>{Custom.custPhone}</td>
                
                <td><button onClick={()=> deletehandlesubmit(Custom.custID)} className='btn btn-info DELETE'><i className='fa fa-trash'></i> </button>
                <Link to={`/update/${Custom.custID}`}><button className='btn' style={{marginLeft:'1rem'}}> <i className='fa fa-pencil'></i></button></Link>
                </td>
                </tr>

                            ))
                        ):(
                            <tr>
                                <td colSpan='4'>no cust</td>
                            </tr>
                        )
                    }

           
                

            </table>
        </div><br/><br/><br/><br/><br/><br/>
        <div class="card">
        <div class="card-body">
        <center><h3 class="card-title">Developed by Sharfan</h3></center>
        
    </div>
</div>
        
    </div>

</div>
 
  )
}
export default Customer
