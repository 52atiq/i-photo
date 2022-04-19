import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../../../Firebase/firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignout = () =>{
      signOut(auth)
  }
  return (
    <div className=''>
            <Navbar collapseOnSelect expand="lg" bg="light"  variant="light" className='font-bold' fixed='top'>
  <Container>
  <Navbar.Brand as={Link} to="/" className='font-extrabold '>I-PHOTO</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav  >
      <Nav.Link  href='home#services'>Service</Nav.Link>
      <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
     { user ? 
    //  <button className='btn btn-link text-black text-decoration-none' onClick={handleSignout}> Sign Out </button>
     <Nav.Link onClick={handleSignout} as={Link} to="login"> Sign Out</Nav.Link> 
     :
      <Nav.Link as={Link} to="login">Login</Nav.Link> }

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Header;