import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import TopNav from '../../shared/TopNav/TopNav';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { user, signInUser } = useContext(AuthContext);
    const from = location.state?.from.pathname || '/';
    // console.log(from)

    const handleLogin = (event) => {
        event.preventDefault();
        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password)

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Password At least one uppercase character')
            return;
        }
        else if (!/(?=.*[a-z])/.test(password)) {
            setError('Password At least one lowercase character')
            return;
        }
        else if (!/(?=.*\d)/.test(password)) {
            setError('Password At least one digit')
            return;
        }
        else if (password.length < 6) {
            setError('Password Minimum 6 characters')
            return;
        }

        signInUser(email, password)
            .then((result) => {
                // console.log(result.user)
                navigate(from,{replace:true})
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
    }
    return (
        <div className='container'>
            <TopNav></TopNav>
            <div className='col col-md-6 mx-auto  bg-light p-5 rounded'>
                <h3 className='text-center fw-semibold my-3'>Login your account</h3>
                <hr className='text-secondary my-5' />
                {
                    error && <p className='text-center text-danger'>{error}</p>
                }
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' required placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' required placeholder="Password" />
                    </Form.Group>
                    <Button className='w-100' variant="secondary" type="submit">
                        Login
                    </Button>
                </Form>
                <h6 className='text-center my-4 text-secondary'>Dont’t Have An Account ? <Link to='/register' className='text-danger text-decoration-none'>Register</Link></h6>
            </div>
        </div>
    );
};

export default Login;