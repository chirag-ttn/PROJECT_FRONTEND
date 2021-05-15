import React from 'react'
import logo from '../../images/TTN.jpg'
import './Navbar.css'
function Navbar() {

    return (
        <>
            <nav class="navbar fixed-top navbar-light bg-light">
                <div class="d-flex justify-content-between container-fluid">
                    <div className="brand">
                        <img src={logo} height="50px" width="100px" />
                    </div>
                    <div className="right-links">

                        <img className="user-profile-pic" src={logo} />
                        <p>Username</p>

                        <i className="fab fa-facebook-messenger" />
                        <i className="far fa-bell" />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;