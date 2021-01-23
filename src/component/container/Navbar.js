import React from 'react'
import App from '../img/App.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navbar.scss'
import Login from '../login'
import Signup from '../signup'



function Navbrand (){
 return (
  <Navbar bg="" expand="lg" className="brand">
  <Navbar.Brand href="/">  <img src={App} width="40" height="40" class="d-inline-block align-top" alt=""/><span className="brand-name">Appwitme</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#Login">
      <Login/>
       </Nav.Link>
      <Nav.Link href="#Signup">
      <Signup/>
          </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )

  }
 
 


export default Navbrand