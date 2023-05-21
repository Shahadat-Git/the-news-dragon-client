import React, { useContext, useState } from 'react';
import TopNav from '../../shared/TopNav/TopNav';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState('');

    const { user, registerUser } = useContext(AuthContext);


    const handleRegister = (event) => {
        event.preventDefault();
        setError('');

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const checkbox = form.checkbox.checked;

        // console.log(name, photo, email, password, checkbox)

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

        registerUser(email, password)
            .then((result) => {
                console.log(result.user)
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
                <h3 className='text-center fw-semibold my-3'>Register your account</h3>
                <hr className='text-secondary my-5' />
                {
                    error && <p className='text-center text-danger'>{error}</p>
                }
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text"
                            name='name' required placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text"
                            name='photo' required placeholder="Enter your photo url" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                            name='email' required placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                            name='password' required placeholder="Enter your password" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check onClick={() => setChecked(!checked)} type="checkbox"
                            name='checkbox' label="Accept Term & Conditions" />
                    </Form.Group>
                    <Button className={`w-100 ${checked ? '' : 'disabled'}`} variant="secondary" type="submit">
                        Login
                    </Button>
                </Form>
                <h6 className='text-center my-4 text-secondary'>Already have an account ? <Link to='/login' className='text-danger text-decoration-none'>Login</Link></h6>
            </div>
        </div>
    );
};

export default Register;