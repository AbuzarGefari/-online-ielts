import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Navigation.css"
import logo from '../../image/image.png'

const Navigation = () => {
   const linkStyle = {
    color: "white",
    textDecoration: "none",
    marginLeft: "15px",
  };
  const currentStyle = {
    fontWeight: "bold",
    color: "red",
  };
  return (
     <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <NavLink style={linkStyle} to="/home">
           <Navbar.Brand className="text-white"><img  className="logo" src={logo} alt="" /></Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-white">
              <NavLink style={linkStyle} activeStyle={currentStyle} to="/home">
                HOME
              </NavLink>
             
              <NavLink NavLink activeStyle = {
                currentStyle
              }
              style = {
                linkStyle
              }
              to = "/services" >
                SERVICES
              </NavLink>
              <NavLink
                activeStyle={currentStyle}
                style={linkStyle}
                to="/teacher">
                TEACHERS
              </NavLink>
               <NavLink style={linkStyle} activeStyle={currentStyle} to="/about">
                ABOUT
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;