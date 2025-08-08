import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary fs-4">
          SkillUpWithPravin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
  <Nav.Link as={Link} to="/">Workshops</Nav.Link>
  <Nav.Link as={Link} to="/about">About</Nav.Link>
  <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
  <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
  <Nav.Link as={Link} to="/internship">Internship</Nav.Link>
  <Nav.Link as={Link} to="/career">Career</Nav.Link>
  <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
</Nav>

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};

export default CustomNavbar;
