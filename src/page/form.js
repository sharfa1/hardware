import React from 'react'
import './form.css'

function Form() {
  return (
    <div>
    <form action="/action_page.php">
    <label for="fname">Enter ID:</label><br></br>
    <input type="text" id="fname" name="custID"/><br/>
    <label for="fname">First name:</label><br></br>
    <input type="text" id="lname" name="custFname"/><br/>
    <label for="fname">Last name:</label><br></br>
    <input type="text" id="lname" name="custLname"/><br/>
    <label for="fname">Adress:</label><br></br>
    <input type="text" id="lname" name="custAdress"/><br/>
    <label for="fname">Phone number:</label><br></br>
    <input type="text" id="lname" name="custPhone"/><br/>
    <input type="submit" value="Submit"/>
    

  </form>
  </div>
  )
}
export default Form
