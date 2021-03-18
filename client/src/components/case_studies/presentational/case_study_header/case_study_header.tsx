import React from "react";
import {Breadcrumb, Nav, Navbar} from "react-bootstrap";
import './case_study_header.css';

interface HeaderProps {
    title: string;
    prev?: string;
}

function CaseStudyHeader({title, prev}: HeaderProps) {

    const capitalize = prev ? prev?.slice(0, 1).toUpperCase() + prev?.slice(1) : '';

    return (
        <>
            <Navbar variant="dark" className={"mt-2 cs-nav"} expand={"md"}>
                <Navbar.Brand className="text-white">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav"/>
                <Navbar.Collapse id="navbar-nav">
                    <Nav className={"row justify-content-end mx-0"}>
                        <Nav.Link href="https://www.linkedin.com/in/nate-folsom-seattle/"
                                  target="_blank">LinkedIn</Nav.Link>
                        <Nav.Link href="https://github.com/nathan-folsom" target="_blank">GitHub</Nav.Link>
                        <Nav.Link href={process.env.PUBLIC_URL + "./NateFolsomResume.pdf"}
                                  target="_blank">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Breadcrumb className="mx-3">
                <Breadcrumb.Item href={"/"}>Home</Breadcrumb.Item>
                {prev && <Breadcrumb.Item href={`/cs/${prev}`}>{capitalize}</Breadcrumb.Item>}
                <Breadcrumb.Item active>{title}</Breadcrumb.Item>
            </Breadcrumb>
        </>
    )
}

export default CaseStudyHeader;