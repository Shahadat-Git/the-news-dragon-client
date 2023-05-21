import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../providers/AuthProvider';

const TopNav = () => {
    const { user, logOut } = useContext(AuthContext);
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
                    {
                        user ? <div className='d-flex align-items-center gap-3'><p className='text-secondary'>{user.email}</p><Button onClick={logOut} className='btn btn-secondary px-5 '>Log Out</Button></div> : <Link to='/login' className='btn btn-secondary px-5 '>Login</Link>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNav;