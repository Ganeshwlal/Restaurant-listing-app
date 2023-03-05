import React from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    
    <>
     
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/fRD9MSGK/w-cafe1.png"
              width="60"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            W CAFE
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>

  )
}

export default Header