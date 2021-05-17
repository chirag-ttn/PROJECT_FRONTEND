import React from 'react';
import GoogleLogin from '../../components/googleLogin/googleLogin'
import NormalLogin from '../../components/normalLogin/normalLogin'
import {useEffect} from 'react'
import Cookies from 'js-cookie'
import './login.css'
function Login() {
    useEffect(()=>{
        const token = Cookies.get('token')
        if(token)
        {
            localStorage.setItem('token',token)
            Cookies.remove('token')
        }
    })
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