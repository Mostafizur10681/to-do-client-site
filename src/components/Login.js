import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Login = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElements;

    if (error) {
        errorElements = <div>
            <p className='text-danger'>Error: {error?.message} </p>
        </div>
    }

    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='col-12 col-sm-12 col-md-7 col-lg-7 p-3 my-5 login-container bg-light border rounded-3 w-50 mx-auto'>
            {loading}
            <h1 className='text-center '>Login</h1>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
                <p className='mx-4 mt-3 text-dark'>OR</p>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
            </div>
            {errorElements}
            <div>
                <button onClick={() => signInWithGoogle()} type="button" className="btn login-button w-50 d-block mx-auto my-2 bg-success text-white">
                    <span className='ms-2'>Google SignIn</span>
                </button>

            </div>
        </div>
    );
};

export default Login;