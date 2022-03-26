import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import style from './style.module.css';

function Navigation() {
  return (
    <div style={{ backgroundColor: '#fff5ec' }}>
      <div
        style={{
          backgroundImage: 'linear-gradient(90deg, #fff5ec 75%, #35cd8c 25%)',
        }}
        className="container-xl"
      >
        <Navbar expand="xl">
          <p href="#home" className={style.navlogo}>
            expice
          </p>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0"
          />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="col justify-content-center">
              <Nav.Link href="#home" className={style.link}>Menu One</Nav.Link>
              <Nav.Link href="#foodıtem" className={style.link}>Menu Two</Nav.Link>
              <Nav.Link href="#ourservices" className={style.link}>Menu Three</Nav.Link>
            </Nav>
            <Nav>
              <div className='text-center'>
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="26" cy="26" r="26" fill="white" />
                  <path
                    d="M36.6066 30.3934C34.9729 28.7596 33.0283 27.5502 30.9066 26.8181C33.179 25.253 34.6719 22.6337 34.6719 19.6719C34.6719 14.8902 30.7817 11 26 11C21.2183 11 17.3281 14.8902 17.3281 19.6719C17.3281 22.6337 18.821 25.253 21.0935 26.8181C18.9718 27.5502 17.0272 28.7596 15.3934 30.3934C12.5603 33.2265 11 36.9934 11 41H13.3438C13.3438 34.0213 19.0213 28.3438 26 28.3438C32.9787 28.3438 38.6562 34.0213 38.6562 41H41C41 36.9934 39.4397 33.2265 36.6066 30.3934ZM26 26C22.5107 26 19.6719 23.1613 19.6719 19.6719C19.6719 16.1825 22.5107 13.3438 26 13.3438C29.4893 13.3438 32.3281 16.1825 32.3281 19.6719C32.3281 23.1613 29.4893 26 26 26Z"
                    fill="#2E266F"
                  />
                  <circle cx="43.5" cy="7.5" r="7.5" fill="#31A24C" />
                </svg>
              </div>
              <NavDropdown title="User" id="basic-nav-dropdown" className={style.link}>
                <NavDropdown.Item href="#action/3.2" className={style.link}>menu one</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className={style.link}>menu two</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Navigation;
