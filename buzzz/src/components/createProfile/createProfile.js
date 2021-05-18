import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import Form from '../Form/Form'
import axios from 'axios'
import './Createprofile.css'

const createProfile = ()=>{
    

    // const postData = (values)=>{
    //     console.log(values)
    //     axios({
    //     method: "post",
    //     url: "http://localhost:4444/api/createProfile/",
    //     data: JSON.stringify(values),
    //     headers: { "Content-Type": 'application/json' },
    // })
    //     .then(function (response) {
    //         //handle success
    //         console.log(response.JSON());
    //     })
    //     .catch(function (response) {
    //         //handle error
    //         console.log(response);
    //     });
    // }

    return (
        <div className="form-container container-fluid p-0">

            <div class="row cover-img">
                <img class="cover" />
                <button type="button" class="btn btn-light cover-btn">
                <i class="fas fa-camera"></i>
                    Edit Cover Photo
                </button>

            </div>
            <div class="profile">
                <img className="" />
                   <button type="button" class="btn btn-light cover-btn icon">
                <i class="fas fa-camera"></i>
                </button> 
            </div>
            <Form />

        </div>
    )
}
// export default createProfile;
export default createProfile