import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

 function Home() {
  return (
  <div>
      <h2 style={{color: 'rgb(63, 63, 238)'}}>Hardware Sales Management System</h2>
      <div className=""><br/>
          <div class="f2">
              <img src="hardware.jpg" alt=""/>
          </div>
          <div class="hform">
              <form className="f3">
                  <center><h3 style={{color: 'blue'}}>Login To Hardware Shop</h3></center>
                  <label style={{color:'black'}} for="username">username:</label><br/>
                  <input type="text" id="username" name ="username"/><i className="icon icon-user"></i> <br/>
                  <label style={{color:'black'}} for="password">password:</label><br/>
                  <input type="text" id="password" name ="password"/><i className="icon icon-user"></i> <br/><br/>
                  <Link to={"/dashbordd"}><input style={{color: 'blue'}} id="click"type="submit" value="login"/></Link><br/>
              </form>
          </div>

      </div>  
</div>
  )
}
export default Home
