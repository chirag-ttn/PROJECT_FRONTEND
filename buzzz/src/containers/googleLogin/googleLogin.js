import React from 'react';
import './googleLogin.css'
import {Link} from 'react-router-dom'
import image from '../../images/TTN.jpg'
function googleLogin() {
    return (
        <>
            <div class="card _card">
                <div class="text-center">
                    <img src={image} style={{ width: 30 + "%" }} class="" alt="..." />
                </div>
                <div class="card-body d-flex flex-column justify-content-center">
                    <h4 class="card-title text-dark">Enter your details and Start your journey with us.</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Don't stop until you're proud.</h6>
                </div>


                    <a href="http://localhost:4444/api/auth" id="btn-google">Sign In with Google</a>
            </div>
        </>
    )
}

export default googleLogin;