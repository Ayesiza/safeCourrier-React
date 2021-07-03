import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Login() {
  
    const [text, setText] = useState("")
    const [submitted, setSubmitted] = useState(false)
   
   
   const handleChange= (e)=>{
    setText({...text, [e.target.name]:e.target.value})
   };
  
    const handleSubmit=(e) =>{
      e.preventDefault()
      setSubmitted(true); fetch('https://safe-couriers.herokuapp.com/api/user/', {
        headers:{"Content-Type":"application/json"},
        method:"POST",
        body:JSON.stringify({
          email:text.email,
          password:text.password
        })
      })
      .then(async (data) =>{
        if(data.ok) {
        console.log(await data.json())
        }
        console.log("error")
      })
      .then( ()=>{
        setSubmitted(true);
      })
      .catch(error =>{
        console.log(error)
      })
    };
    
  
    return (
       
      <div class="brgcolor">
        <div class="signup-form">
      <form  onSubmit={handleSubmit}>
          <h2>Login Form</h2>
          <p>Please fill in the form to Login!</p>
          <hr/>
     { submitted ? <div className="popup-msg">Success! You are Loggedin</div> : null}
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
           required="required"
            placeholder="Email Address"
           />
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
          required="required"
          name="password" 
          placeholder="Password" 
         />
              </div>
   
          </div>
          <div class="form-group">
              <button type="submit" class="btn btn-lg">Login</button>
          </div>
          <div class="text-center">Don't have an account? 
          <Link to ="/Signup">
          <span >Signup here</span>
          </Link>
         
          </div>
      </form>
  
  </div>
  
  
      </div>
        
    
      
    )
}

export default Login
