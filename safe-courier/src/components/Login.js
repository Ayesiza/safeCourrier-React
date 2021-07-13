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
    <div className="brgcolor">
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <h2>Login Form</h2>
          <p>Please fill in the form to Login!</p>
          <hr />
        <div>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend"></div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                name="email"
                required="required"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend"></div>

              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                required="required"
                name="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-lg">
              Login
            </button>
          </div>
          <div className="text-center">
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
