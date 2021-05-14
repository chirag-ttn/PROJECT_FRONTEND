import React from 'react';
import GoogleLogin from '../../containers/googleLogin/googleLogin'
import NormalLogin from '../../containers/normalLogin/normalLogin'
import './login.css'
function Login() {
    return (
        <>
            <div className="container">

                <GoogleLogin />
                <NormalLogin />

            </div>
        </>
    )
}

export default Login;