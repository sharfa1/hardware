import React from 'react'
import './dashbord.css'
import { Link } from 'react-router-dom'


function Dashbord() {
  return (
<div class="d1">
        <center><h2>Hardware shop</h2></center>
        <ul>
            <Link to={"/dashbordd"}><li><a ><i class="fa fa-home"></i> Dashbord</a></li></Link><br/>
            <Link to={"/customer"}><li><a ><i class="fa fa-user"></i> Customer</a></li></Link><br/>
            <Link to={"/product"}><li><a ><i class="fa fa-twitter"></i> Product</a></li></Link><br/>
            <Link to={"/sales"}><li><a ><i class="fa fa-calculator"></i> Sales</a></li></Link><br/>
            <Link to={"/report"}><li><a > <i class="fa fa-bank"></i>Report</a></li></Link><br/>
        
        </ul>
</div>
  )
}
export default Dashbord