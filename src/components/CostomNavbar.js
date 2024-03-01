import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import {Link} from "react-router-dom";

export default function CustomNavbar() {
  return (
    <div>
    <Navbar bg="success" data-bs-theme="dar">
        <Container>
          <Navbar.Brand href="#home">Gofood</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </div> 
  )
}
