import React from 'react';
import { Link} from "react-router-dom";

function Header() {
    return (
        <div  className="">
      <nav className="navbar navbar-expand-lg navbar-light  bg-light "  role="navigation">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link  to="/" className="navbar-brand" ><img className="logo" src="/images/images.png" alt="logo"/></Link>
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" >Home </Link >
              </li>
              <li className="nav-item">
                <Link to="/orders" className="nav-link" >Orders </Link>
              </li>
              <li className="nav-item">
                <Link to="/DeliveryOrder" className="nav-link">DeliveryOrder </Link>
            </li>
            <li className="nav-item">
                    <Link to="Contact" className="nav-link"  >Contact </Link>
            </li>
            <li className="nav-item ">
                <Link  to="/signup" className="nav-link"  >SignUp </Link>
            </li>
            <div className="nav-item">
              <div className="nav-link">
                  <Link to="/login">
                    <button type="button" className="pd-1-11 btn btn-danger">Login</button>
                  </Link>
              </div>
            </div>
        </ul></div>
      </div></nav>

    </div>
    )
}

export default Header
