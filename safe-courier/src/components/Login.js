import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Login() {
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
          <h2>Login Form</h2>
          <p>Please fill in the form to Login!</p>
          <hr/>
     { submitted && valid? <div className="popup-msg">Success! You are Loggedin</div> : null}
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
              <button type="submit" class="btn btn-lg">Login</button>
          </div>
          <div class="text-center">Don't have an account? 
          <Link to ="/Register">
          <span >Signup here</span>
          </Link>
         
          </div>
      </form>
  
  </div>
  
  
      </div>
        
    
      
    )
}

export default Login
