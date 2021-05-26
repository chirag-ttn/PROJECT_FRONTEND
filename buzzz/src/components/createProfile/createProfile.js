import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Form from '../Form/Form'
import axios from 'axios'
import './Createprofile.css'
import {getUser} from '../../redux/actions/auth'
const submit = values => {
    
    axios({
        method: "post",
        url: "http://localhost:4444/profile/createProfile",
        data: JSON.stringify(values),
        headers: { "Content-Type": 'application/json' },
    })
    .then(function (response) {
        console.log(response)
        alert('Form Submitted')
    })
    .catch(function (response) {
        console.log(response)
        alert('Error')
    });
}
function Profile() {
    const dispatch = useDispatch()
    useEffect(()=>{
        getUser(dispatch)()
    },[])
    
    const state = useSelector(state=>state.authReducer)

    
    return (
        <div class="form-container container-fluid p-0">

            <div class="row cover-img">
                <img class="cover" />
                <button type="button" class="btn btn-light cover-btn">
                    <i class="fas fa-camera"></i>
                    Edit Cover Photo
                </button>

            </div>
            <div class="imageWrapper">
                <img class="profile" src={state.profile_pic} />
                <button type="button" class="btn btn-light cover-btn icon">
                    <i class="fas fa-camera"></i>
                </button>
            </div>
            <Form onSubmit={submit} />

        </div>
    )
}
// export default createProfile;
export default Profile