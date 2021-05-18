import React from 'react';
import GoogleLogin from '../../components/googleLogin/googleLogin'
import NormalLogin from '../../components/normalLogin/normalLogin'
import {useEffect} from 'react'
import {setToken} from '../../actions/auth/auth'
import {useSelector,useDispatch} from 'react-redux'
import Cookies from 'js-cookie'
import './login.css'

function Login() {
    const auth = useSelector(state=>state)
    const dispatch = useDispatch()
    console.log(auth)
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