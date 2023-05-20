import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h3>Login With</h3>
            <Button className='d-block w-100 p-2' variant="outline-primary d-flex align-items-center justify-content-center gap-1"><FaGoogle /> Login with Google</Button>
            <Button className='d-block w-100 mt-2 p-2' variant="outline-secondary d-flex align-items-center justify-content-center gap-1"><FaGithub /> Login With Github</Button>
            <h4 className='mt-4'>Find Us On</h4>
            <ListGroup className='w-100' as="ul">
                <ListGroup.Item className='text-secondary py-3 d-flex align-items-center gap-3' as="li"><FaFacebook className='text-primary' /> Facebook</ListGroup.Item>
                <ListGroup.Item className='text-secondary py-3 d-flex align-items-center gap-3' as="li">
                    <FaTwitter className='text-primary' /> Twitter
                </ListGroup.Item>
                <ListGroup.Item className='text-secondary py-3 d-flex align-items-center gap-3' as="li"><FaInstagram className='text-primary' />Instagram</ListGroup.Item>
            </ListGroup>
            <QZone></QZone>
            <div className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white mt-3 w-100 d-flex align-items-center" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '600px' }}>
                <div>
                    <h3>
                        Create an Amazing Newspaper
                    </h3>
                    <p className='my-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className='btn btn-danger py-3 px-5'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;