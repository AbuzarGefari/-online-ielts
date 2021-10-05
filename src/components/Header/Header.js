import React from 'react';
import { NavLink } from 'react-router-dom';
import headerimg from '../../image/Shared workspace-amico.png'
import './Header.css'

const Header = () => {
     const linkStyle = {
    color: "dark",
    textDecoration: "none",
       marginLeft: "5px 10px",
    borderRadius:"40%"
  }
 return (
    <div >
     <div className = "row ms-auto bg-gray hd" >
       <div className = "bg-gray d-flex" >
          <div className="col-md-6">
           <h1 className="header-text">Speak English with confidence</h1> <br />
           <p>Gain confidence speaking English with help from a personal English tutor. Get extra free sessions in October. </p> <br />
           <button className="rounded-pill btn"><NavLink className="rounded-pill btn" style={linkStyle} to="/services">Get Started</NavLink></button>
       </div>
       <div div className = "col-md-6 ms-auto" >
         <img className="img-fluid image" src={headerimg} alt="" />
       </div>
      </div>
      </div>
     
   </div>
  );
};

export default Header;