import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function () {
  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Job Board</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Post Your Vacancy</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
