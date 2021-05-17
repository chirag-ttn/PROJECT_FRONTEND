import React, { useEffect, useState } from 'react'
import Form from '../Form/Form'
import axios from 'axios'
import './Createprofile.css'

export default function Createprofile() {
    const [value, setValue] = useState(null)
    const submit = values => {
        setValue(values)
        console.log(values)
        postData(values)
    }

    const postData = (values)=>{
        console.log(values)
        axios({
        method: "post",
        url: "http://localhost:4444/api/createProfile/",
        data: JSON.stringify(values),
        headers: { "Content-Type": 'application/json' },
    })
        .then(function (response) {
            //handle success
            console.log(response.JSON());
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    }

    return (
        <div className="form-container container-fluid p-0">

            <div class="row">
                <img class="cover" />
            </div>
            <div class="profile">
                <img className="" />
                <i class="fas fa-camera icon"></i>
            </div>
            <Form onSubmit={submit} />

        </div>
    )
}