import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../actions/userActions";

function Login(props) {
  const [email, setEmail] =useState("");
  const [password, setPassword ] =useState("");

const userLogin = useSelector(state => state.userLogin);
const { loading, userInfo, error } = userLogin;
const dispatch = useDispatch();

useEffect(() =>{
  if(userInfo){
    props.history.push("/");
  }
  return () => {
    //
  };
},[userInfo])


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
 
      
    }
    
     
  return (
    <div class="brgcolor">
      <div class="signup-form">
        <form onSubmit={handleSubmit}>
          <h2>Login Form</h2>
          <p>Please fill in the form to Login!</p>
          <hr />
        <div>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend"></div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                class="form-control"
                name="email"
                required="required"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend"></div>

              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                class="form-control"
                required="required"
                name="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-lg">
              Login
            </button>
          </div>
          <div class="text-center">
            Don't have an account?
            <Link to="/Signup">
              <span>Signup here</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
