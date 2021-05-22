import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Form from '../Form/Form'
import axios from 'axios'
import './Createprofile.css'
import {getUser} from '../../actions/auth'
import { Redirect } from 'react-router'
const submit = values => {
    axios({
        method: "post",
        url: "http://localhost:4444/api/createProfile/",
        data: JSON.stringify(values),
        headers: { "Content-Type": 'application/json' },
    })
    .then(function (response) {
        //handle success
        //show feeds page
    })
    .catch(function (response) {
        //handle error
        // show error modal
    });
}
function Profile() {
    const dispatch = useDispatch()
    useEffect(()=>{
        getUser(dispatch)()
    },[])
    
    const state = useSelector(state=>state.authReducer)
    console.log(state)

    
    return (
        <div className="form-container container-fluid p-0">

            <div className="row cover-img">
                <img className="cover" />
                <button type="button" className="btn btn-light cover-btn">
                    <i className="fas fa-camera"></i>
                    Edit Cover Photo
                </button>

            </div>
            <div className="imageWrapper">
                <img className="profile" src={state.profile_pic} />
                <button type="button" className="btn btn-light cover-btn icon">
                    <i className="fas fa-camera"></i>
                </button>
            </div>
            <Form onSubmit={submit} />

        </div>
    )
}
// export default createProfile;
export default Profile