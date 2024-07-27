import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const translations = {
    EN: {
        practice: "Let's Practice",
        login: "Login"
    },
    ES: {
        practice: "Practicar ahora",
        login: "Iniciar Sesión"
    }
};

const BaseLayout = ({ children, currentLan }) => {
    const location = useLocation();
    const lan = translations[currentLan] || translations.EN; //Default in English

    const switchLanguage = (targetLan) => {
        const path = location.pathname;
        const segments = path.split('/');
        if (segments.length > 1 && (segments[1] === 'en' || segments[1] === 'es')) {
            segments[1] = targetLan.toLowerCase();
          } else {
            segments.splice(1, 0, targetLan.toLowerCase());
        }
        return segments.join('/') || '/';
        };

    return (
        <div>
            <Navbar expand="lg" className="bg-primary">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="text-light">
                        VocabApp
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={Link} to={`/${currentLan.toLowerCase()}/practice`} className="text-light">
                            {lan.practice}
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
                            <NavDropdown.Item as={Link} to={switchLanguage('EN')}>
                                <img src="/static/img/us_flag.png" alt="English" className="flag-icon" />
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={switchLanguage('ES')}>
                                <img src="/static/img/es_flag.png" alt="Spanish" className="flag-icon" />
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to={currentLan === "EN" ? "/" : "/es"} className="text-light">
                            {lan.login}
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="container">{children}</div>
            <footer className="footer">{/* Footer content here */}</footer>
        </div>
    );
};  

export default BaseLayout;