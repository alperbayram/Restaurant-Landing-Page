import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import style from './style.module.css';

function Navigation() {
  return (
    <div style={{backgroundColor:"#fff5ec"}}>
      <Container className={style.navbarcolor}>
        <Navbar expand="lg">
          <Navbar.Brand
            href="#home"
            className="fs-1 fw-bold"
            style={{ color: '#35cd8c' }}
          >
            restaurant
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="col justify-content-center">
              <Nav.Link href="#home">Menu One</Nav.Link>
              <Nav.Link href="#link">Menu Two</Nav.Link>
              <Nav.Link href="#link">Menu Three</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default Navigation;
