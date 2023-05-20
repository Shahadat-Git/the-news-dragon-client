import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <div className='text-center mt-5'>
                <img src={logo} alt="" />
                <p className='text-secondary mt-3'>Journalism Without Fear or Favour</p>
                <p className='text-secondary fw-semibold'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex align-items-center bg-light my-3 p-3 rounded'>
                <button className='btn btn-danger'>Latest</button>
                <Marquee speed={100} className=' fw-semibold'>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
            <div>
                <Navbar bg="white my-3" expand="lg">
                    <Container fluid>
                        <Navbar.Toggle/>
                        <Navbar.Collapse>
                            <Nav
                                className="mx-auto my-2 gap-4 my-lg-0"
                            >
                                <Link className='text-decoration-none text-secondary fw-semibold'>Home</Link>
                                <Link className='text-decoration-none text-secondary fw-semibold'>About</Link>
                                <Link className='text-decoration-none text-secondary fw-semibold'>Carrer</Link>
                            </Nav>
                           <button className='btn btn-secondary px-5 '>Login</button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default Header;