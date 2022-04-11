import userEvent from '@testing-library/user-event';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';
import { getAuth } from "firebase/auth";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


const auth = getAuth(app);
const Login = () => {
    const [googleSignIn, user] = useSignInWithGoogle(auth)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                navigate(from, { replace: true })
            })
    }
    return (
        <div>
            <h2>Please Login!!</h2>
            <form >
                <input type="email" name="" id="" placeholder='Your Name' />
                <br />
                <input type="password" name="" placeholder='your PassWord' id="" />
                <br />
                <button type="submit">Login</button>

            </form>

            <button onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;