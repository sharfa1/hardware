import React from 'react'
import './customer.css'
import { Link } from 'react-router-dom'
import Dashbord from '../component/dashbord'

 function Customer() {
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
            <p className="card-text">Dashbord</p>
            
            </div>
            <table>
                <tr>
                <th>custID</th>
                <th>CustFname</th>
                <th>custLname</th>
                <th>custPhone </th>
                <th>custAdress</th>
                
                </tr>
                <tr>
                <td>1</td>
                <td>Sharifa</td>
                <td>Khelef</td>
                <td>07489494949</td>
                <td>Amani</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Rukia</td>
                <td>Abuu</td>
                
                <td>07489494949</td>
                <td>Amani</td>
                </tr>
                

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
