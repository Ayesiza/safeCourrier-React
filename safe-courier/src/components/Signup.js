import React, { useState } from 'react';
import { Link} from "react-router-dom";


function Signup() {
    const [values, setValues] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [valid, setValid] = useState()
   
   const handleChange= (e)=>{
     setValues({...values, value:e.target.value})
   };
  

    const handleSubmit=(e) =>{
      e.preventDefault()
      if(values.firstName && values.email && values.password){
        setValid(true);
      }
      setSubmitted(true);
    }
  
    return (
      
      <div class="brgcolor">
        <div class="signup-form">
      <form  onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <p>Please fill in this form to create an account!</p>
          <hr/>
     { submitted && valid? <div className="popup-msg">Success! Thank you Registering</div> : null}
          <div class="form-group">
              <div class="input-group">
                  <div class="input-group-prepend">
                  </div>
          <input 
          value={values.firstName} 
          onChange={handleChange }
          type="text" 
          class="form-control" 
          name="firstName" placeholder="FirstName" 
         />
              </div>
        { submitted && !values.firstName?<span className="red">Please enter firstName</span>: null}
          </div>
          <div class="form-group">
              <div class="input-group">
                  <div class="input-group-prepend">
                      
                  </div>
          <input 
          value={values.email}
          onChange={handleChange }
          type="email"
           class="form-control" 
           name="email"
            placeholder="Email Address"
           />
              </div>
        { submitted && !values.email?<span  className="red">Please enter your Email</span>: null}
          </div>
          <div class="form-group">
              <div class="input-group">
                  <div class="input-group-prepend">
                  
                  </div>
          <input 
          value={values.password}
          onChange={handleChange }
          type="password" 
          class="form-control" 
          name="password" 
          placeholder="Password" 
         />
              </div>
        {submitted &&!values.password?<span  className="red">Please enter your Password</span>:''}
          </div>
      
          <div class="form-group">
              <label class="form-check-label"><input type="checkbox" required="required"/> I accept the <Link to="https://">Terms of Use</Link> &amp; <Link to="#">Privacy Policy</Link></label>
          </div>
          <div class="form-group">
              <button type="submit" class="btn btn-lg">Sign Up</button>
          </div>
          <div class="text-center">Already have an account? 
          <Link to ="/Login">
          <span > Login Here</span>
           </Link >
          </div>
         
      </form>
  
  </div>
  
  
      </div>
     
          
        
    
      
    )
}

export default Signup
