import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import * as actions from '../../actions/auth/auth'
import logo from '../../images/TTN.jpg'

import './Navbar.css'
function Navbar() {
    useEffect(()=>{

    })
    const dispatch = useDispatch()
    return (
        <>
            <div class="container-fluid p-0">
                <nav class="navbar-fixed-top navbar-light bg-light">
                    <div class="d-flex justify-content-between container-fluid">
                        <div className="brand">
                            <img src={logo} height="50px" width="100px" />
                        </div>
                        <div className="right-links">

                            <img className="user-profile-pic" src={logo} />
                            <p>Username</p>

                            <i className="fab fa-facebook-messenger" />
                            <i className="far fa-bell" />
                            <button onClick={()=>dispatch(actions.removeToken())}>Logout</button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;