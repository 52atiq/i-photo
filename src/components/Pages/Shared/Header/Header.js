import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='container mb-2'>
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link  to='/service'>Service</Nav.Link>
      <Nav.Link href="#deets">Blog</Nav.Link>
      <Nav.Link href="#deets">About</Nav.Link>
      <Nav.Link href="#deets">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
};

export default Header;