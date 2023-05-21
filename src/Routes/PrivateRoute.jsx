import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location)
    if (loading) {
        return <div style={{ height: '60vh' }} className='d-flex justify-content-center align-items-center'>
            <Spinner animation="border" variant="success" />
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivateRoute;