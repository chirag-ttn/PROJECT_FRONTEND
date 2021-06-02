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
import { getProfile } from '../../redux/actions/Profile'
import { useHistory, useLocation } from 'react-router-dom'
function Navbar(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        getUser(dispatch)()
        getProfile(dispatch)
    }, [getUser, getProfile])
    const history = useHistory(null)
    const location = useLocation(null)
    const state = useSelector(state => state.authReducer)
    const profileState = useSelector(state => state.profileReducer)
    const { profile, getProfileLoading } = profileState
    const clickedFeedBtn = () => {
        if (location.pathname.includes('userProfile')) {
            history.push('/feeds')
        }
    }
    console.log(profileState)
    return (
        <>
            <div class='navbar-section'>
                <div class="container-fluid p-0">
                    <nav class="navbar-fixed-top navbar-light bg-light section-nav">
                        <div class="d-flex justify-content-between container-fluid p-0">
                            <div class="brand">
                                <Img src={logo} alt="logo" height="50px" width="100px" />
                            </div>
                            <div class="right-links">

                                <img class="user-profile-pic" src={props.profile_image} alt="logo" />
                                <p>
                                    {(profileState.profile === '' && profileState.anyUserProfile === null) ? props.username :
                                        <a class='text' href={`/userProfile/${state.profile_id}`}>
                                            {props.username}
                                        </a>
                                    }
                                </p>
                                {(profileState.profile === '' && profileState.anyUserProfile === null) ?
                                    null :
                                    <a href='feeds'><button onClick={clickedFeedBtn} class="btn btn-dark" >Feeds</button></a>}

                                {(profileState.profile) ?
                                    <>
                                        <NotificationModal profile={profile} getProfileLoading={getProfileLoading} />
                                    </>:null
                                }


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