import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Navigation(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="nav">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
