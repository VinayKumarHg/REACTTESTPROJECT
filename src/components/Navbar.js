import React from "react";
import "../App.css";
import logo from "../img/folder.png";
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
  <a className="navbar-brand" href="#"><img className="img" src={logo} alt="LOGO IMAGE"></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" style={{color:"#fff"}}></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto ">
      <li className="nav-item active">
        <a className="nav-link" href="#" >Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Experiences</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact Me</a>
      </li>
    </ul>
    
  </div>
  </div> 
</nav>
  );
}

export default Navbar;
