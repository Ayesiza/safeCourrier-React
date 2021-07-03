import React, { useState } from 'react';
import { Link, Redirect} from "react-router-dom";



function Signup() {
   const [text, setText] = useState('')
  const [submitted, setSubmitted] = useState(false)
 
 const handleChange= (e)=>{
   setText({...text, [e.target.name]:e.target.value})
 }

  const handleSubmit=(e) =>{
    e.preventDefault()
    console.log(text)
    fetch('https://safe-couriers.herokuapp.com/api/user/signup', {
      headers:{"Content-Type":"application/json"},
      method:"POST",
      body:JSON.stringify({
        userName:text.userName,
        email:text.email,
        password:text.password
      })
    })
    .then(async (data) =>{
      if(data.ok) {
      console.log(await data.json())
      }
     
    })
    .then( ()=>{
      setSubmitted(true);
    })
    .catch(error =>{
      console.log(error)
    })
  };
  if(submitted) {
    return <Redirect to='/DeliveryOrder'/>
  }


  return (
    <div class="brgcolor">
      <div class="signup-form">
    <form  onSubmit={handleSubmit}>
		<h2>Sign Up</h2>
		<p>Please fill in this form to create an account!</p>
		<hr/>
   { submitted ? <div className="popup-msg">Success! Thank you registering</div> : null}
        <div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
				
				</div>
        <input 
        value={text.userName} 
        onChange={handleChange }
        type="text" 
        class="form-control" 
        name="userName" placeholder="userName" 
        required="required"/>
			</div>
        </div>
        <div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					
				</div>
        <input 
        value={text.email}
        onChange={handleChange }
        type="email"
         class="form-control" 
         name="email"
          placeholder="Email"
          required="required"/>
			</div>
        </div>
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
				
				</div>
        <input 
        value={text.password}
        onChange={handleChange }
        type="password" 
        class="form-control" 
        name="password" 
        placeholder="Password" 
        required="required"/>
			</div>
        </div>
	
        <div class="form-group">
			<label class="form-check-label"><input type="checkbox" required="required"/> I accept the <Link to="/About">Terms of Use</Link> &amp; <Link to="/About">Privacy Policy</Link></label>
		</div>
		<div class="form-group">
            <button type="submit" class="btn btn-lg">Sign Up</button>
        </div>
        <div class="text-center">Already have an account? <Link to="/Login" >Login here</Link></div>
    </form>

</div>


    </div>
      
  
    
  )
}

export default Signup
