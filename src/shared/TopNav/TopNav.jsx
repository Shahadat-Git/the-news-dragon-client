import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <Navbar bg="white my-3" expand="lg">
            <Container fluid>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav
                        className="mx-auto my-2 gap-4 my-lg-0"
                    >
                        <Link to='/' className='text-decoration-none text-secondary fw-semibold'>Home</Link>
                        <Link to='/' className='text-decoration-none text-secondary fw-semibold'>About</Link>
                        <Link to='/' className='text-decoration-none text-secondary fw-semibold'>Carrer</Link>
                    </Nav>
                    <button className='btn btn-secondary px-5 '>Login</button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNav;