import React, { useState } from 'react';
import { Link} from "react-router-dom";


function Signup() {
   const [text, setText] = useState('')
  const [submitted, setSubmitted] = useState(false)
 
 const handleChange= (e)=>{
   setText({...text, value:e.target.value})
 }

  const handleSubmit=(e) =>{
    e.preventDefault()
    setSubmitted(true);
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
        value={text.firstName} 
        onChange={handleChange }
        type="text" 
        class="form-control" 
        name="firstName" placeholder="firstName" 
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
          placeholder="Email Address"
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
