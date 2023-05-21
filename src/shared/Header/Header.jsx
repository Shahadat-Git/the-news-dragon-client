import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <Container>
            <div className='text-center mt-5'>
                <img src={logo} alt="" />
                <p className='text-secondary mt-3'>Journalism Without Fear or Favour</p>
                <p className='text-secondary fw-semibold'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </Container>
    );
};

export default Header;