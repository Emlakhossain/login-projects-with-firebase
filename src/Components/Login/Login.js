import userEvent from '@testing-library/user-event';
import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { user, handleSignOut, googleSignIn } = useFirebase();
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

            <button onClick={googleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;