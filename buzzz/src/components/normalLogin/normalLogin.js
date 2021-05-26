import React from 'react';

import './normalLogin.css'
function normalLogin() {
    return (
        <>
            <div class="out-container">
                <h5>Login To Your Account</h5>
                <form class="d-flex flex-column justify-content-center">
                    <div class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="TTN Username" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-group form-check d-flex justify-content-between text">
                        <div>
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Remeber Me</label>
                        </div>
                        <a href="#">Forgot Password ?</a>

                    </div>
                </form>
                <a type="submit" id="btn-signIn">SignIn</a>
            </div>
        </>
    )
}

export default normalLogin;