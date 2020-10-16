import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import './header.css';

function Header() {
    return (
          <Navbar variant="light" className={"mt-2 px-0"} expand={"md"}>
            <Navbar.Brand className={"home-brand"}>Nate Folsom</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav"/>
            <Navbar.Collapse id="navbar-nav">
              <Nav className={"row justify-content-end mx-0"}>
                <Nav.Link href="https://www.linkedin.com/in/nate-folsom-seattle/" target="_blank">LinkedIn</Nav.Link>
                <Nav.Link href="https://github.com/nathan-folsom" target="_blank">GitHub</Nav.Link>
                <Nav.Link href={process.env.PUBLIC_URL + "./NateFolsomDevResume.pdf"} target="_blank">Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
    )
}

export default Header;