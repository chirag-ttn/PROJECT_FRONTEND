import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../../redux/actions/auth'
import logo from '../../images/TTN.jpg'
import { getUser } from '../../redux/actions/auth'
import Img from '../CircleImg/CircleImg'
import './Navbar.css'
import Suggestions from '../../components/Suggestions/suggestions'
import NotificationModal from '../NotificationModal/NotificationModal'
import { useSelector } from 'react-redux'
function Navbar(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        getUser(dispatch)()
    }, [getUser])

    const state = useSelector(state => state.authReducer)


    return (
        <>
            <div class='section'>
                <div class="container-fluid p-0">
                    <nav class="navbar-fixed-top navbar-light bg-light section-nav">
                        <div class="d-flex justify-content-between container-fluid p-0">
                            <div class="brand">
                                <Img src={logo} alt="logo" height="50px" width="100px" />
                            </div>
                            <div class="right-links">

                                <img class="user-profile-pic" src={props.profile_image} alt="logo" />
                                <a class='text' href={`/userProfile/${state.profile_id}`}>
                                    <p>{props.username}</p>
                                </a>


                                <i class="fab fa-facebook-messenger" />
                                {/* <button onClick={props.onToggle}>

                                    <i class="far fa-bell" />
                                </button> */}
                                    
                                        {/* <NotificationModal /> */}

                                <a href='feeds'><button class="btn btn-dark" >Feeds</button></a>
                                <button class="btn btn-danger" onClick={() => dispatch(actions.removeToken())}>Logout</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar;