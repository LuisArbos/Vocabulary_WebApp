import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const BaseLayout = ({ children, currentLan }) => (
    <div>
      <Navbar expand="lg" className="bg-primary">
        <Container>
            <Navbar.Brand as={Link} to="/" className="text-light">
                VocabApp
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/en/practice" className="text-light">
                    Let's Practice
                </Nav.Link>
                </Nav>
                <Nav>
                <NavDropdown
                    title={
                    currentLan === "EN" ? (
                        <img src="/static/img/us_flag.png" alt="Language" className="flag-icon" />) 
                        : (
                        <img src="/static/img/es_flag.png" alt="Language" className="flag-icon" />)
                    }
                    id="basic-nav-dropdown"
                    align="end"
                    className="text-light"
                    >         
                    <NavDropdown.Item as={Link} to="/">
                        <img src="/static/img/us_flag.png" alt="English" className="flag-icon" />
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/es">
                        <img src="/static/img/es_flag.png" alt="Spanish" className="flag-icon" />
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={currentLan === "EN" ? "/" : "/es"}
                    className="text-light"
                    >
                    Login
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  
      <div className="container">{children}</div>
      <footer className="footer">{/* Footer content here */}</footer>
    </div>
      
  );
  
  export default BaseLayout;