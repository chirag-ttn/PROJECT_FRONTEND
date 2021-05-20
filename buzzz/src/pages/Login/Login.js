import React from 'react';
import GoogleLogin from '../../components/googleLogin/googleLogin'
import NormalLogin from '../../components/normalLogin/normalLogin'
import {useEffect} from 'react'
import {setToken} from '../../actions/auth'
import {useSelector,useDispatch} from 'react-redux'
import './login.css'

function Login() {
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setToken())
    },[setToken])
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