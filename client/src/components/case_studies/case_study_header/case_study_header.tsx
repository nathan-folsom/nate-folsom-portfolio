import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import './case_study_header.css';

type headerProps = {
    title: string
}

function CaseStudyHeader(props: headerProps) {
    return (
        <Navbar variant="dark" className={"mt-2 cs-nav"} expand={"md"}>
            <Link to={'/'} className={"mr-3 mr-md-5"}>Back</Link>
            <Navbar.Brand className="text-white ml-md-5">{props.title}</Navbar.Brand>
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

export default CaseStudyHeader;