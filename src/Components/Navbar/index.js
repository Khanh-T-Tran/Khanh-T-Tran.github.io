import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import logo from "../../assets/logos/dark/TK-logo-dark-512x.png"

import './Navbar.css';

const fancyHeader = (props) => {
    return (
        <>
            <Navbar className="fancyNav" collapseOnSelect expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand Image className="brandLogo" href="#home" onClick={() => { props.changePage("Home") }}><Image className="logoImage" thumbnail src={logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link className="tabs" href="#home" onClick={() => { props.changePage("Home") }}>Home</Nav.Link>
                            <Nav.Link className="tabs" href="#skills" onClick={() => { props.changePage("Skills") }}>Skills</Nav.Link>
                            <Nav.Link className="tabs" href="#portfolio" onClick={() => { props.changePage("Portfolio") }}>Portfolio</Nav.Link>
                            <Nav.Link className="tabs" href="#contact" onClick={() => { props.changePage("Contact") }}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default fancyHeader;