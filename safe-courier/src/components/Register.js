import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

function Register(props) {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
    return () => {
      //
    };
  }, [userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userName, email, password, rePassword));

  }

  return (
    <div class="brgcolor">
      <div class="signup-form">
    <form  onSubmit={handleSubmit}>
		<h2>Sign Up</h2>
		<p>Please fill in this form to create an account!</p>
		<hr/>
   <div>
   {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
   </div>
      <div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
				
				</div>
        <input 
        onChange={(e) => setUserName(e.target.value)}
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
       
        onChange={(e) => setEmail(e.target.value)}
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
       
        onChange={(e) => setPassword(e.target.value)}
        type="password" 
        class="form-control" 
        name="password" 
        placeholder="Password" 
        required="required"/>
			</div>
        </div>
        <div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					
				</div>
        <input 
       
        onChange={(e) => setRePassword(e.target.value)}
        type="password"
         class="form-control" 
         name="repassword"
          placeholder="Re-enter Password"
          required="required"/>
			</div>
        </div>
	
        <div class="form-group">
			<label class="form-check-label"><input type="checkbox" required="required"/> I accept the <Link to="/About">Terms of Use</Link> &amp; <Link to="/About">Privacy Policy</Link></label>
		</div>
		<div class="form-group">
            <button type="submit" class="btn btn-lg">SignUp</button>
        </div>
        <div class="text-center">Already have an account? <Link to="/Login" >Login here</Link></div>
    </form>

</div>


    </div>
      
  
    
  )
}

export default Register
