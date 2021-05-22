import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../../actions/auth'
import logo from '../../images/TTN.jpg'
import { getUser } from '../../actions/auth'
import Img from '../CircleImg/CircleImg'
import './Navbar.css'
import { useSelector } from 'react-redux'
function Navbar(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        getUser(dispatch)()
    }, [getUser])

    const state = useSelector(state => state.authReducer)

    return (
        <>
            <div className='section'>
                <div className="container-fluid p-0">
                    <nav className="navbar-fixed-top navbar-light bg-light">
                        <div className="d-flex justify-content-between container-fluid">
                            <div className="brand">
                                <Img src={logo} alt="logo" height="50px" width="100px" />
                            </div>
                            <div className="right-links">

                                <img className="user-profile-pic" src={state.profile_pic} alt="logo" />
                                <p>{state.f_name + '' + state.l_name}</p>

                                <i className="fab fa-facebook-messenger" />
                                <i className="far fa-bell" />
                                <a href='feeds'><button className="btn btn-dark" >Feeds</button></a>
                                <button className="btn btn-danger" onClick={() => dispatch(actions.removeToken())}>Logout</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar;