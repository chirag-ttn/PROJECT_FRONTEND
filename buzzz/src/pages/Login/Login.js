import React from 'react';
import GoogleLogin from '../../components/googleLogin/googleLogin'
import NormalLogin from '../../components/normalLogin/normalLogin'
import {useEffect} from 'react'
import {setToken} from '../../redux/actions/auth'
import {useSelector,useDispatch} from 'react-redux'
import './login.css'

function Login() {
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setToken())
    },[setToken])
    return (
        <>
            <div class="container">

                <GoogleLogin />
                <NormalLogin />

            </div>
        </>
    )
}

export default Login;