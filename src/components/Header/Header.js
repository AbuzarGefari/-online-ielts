import React from 'react';
import image11 from '../../image/11.jpg'
import image111 from '../../image/111.jpg'
import logo from '../../image/image.png'
import image222 from '../../image/222.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
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
           <Navbar.Brand className="text-white"><img className="logo" src={logo} alt="" /></Navbar.Brand>
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
       <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
        <div className="row">
          <div className="col-md-12">

  <div className="carousel-item active">
      <img src={image11} class="d-block w-100 img-fluid" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={image111} class="d-block w-100 img-fluid" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={image222} class="d-block w-100 img-fluid" alt="..."/>
    </div>

          </div>
  </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   </div>
  );
};

export default Header;