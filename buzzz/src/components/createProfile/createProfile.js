import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import Form from '../Form/Form'
import axios from '../../Api/localhost'
import './Createprofile.css'

import { getUser } from '../../redux/actions/auth'
import {getProfile} from '../../redux/actions/Profile'

function Profile(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    const profileState = useSelector(state=>state.profileReducer)
    //console.log(profileState)
    const submit = values => {

        axios({
            method: "post",
            url: "/profile/createProfile",
            data: JSON.stringify(values),
            headers: { "Content-Type": 'application/json' },
        })
            .then(function (response) {
                //console.log(response)
                getProfile(dispatch)()
                history.push('/feeds')
            })
            .catch(function (response) {
                //console.log(response)
                alert('Error')
            });
    }
    const [img, setImg] = useState(false)

    let savebtn = (
        <>

            <div className="d-flex justify-content-between align-items-center">
                <div>Do You wish to proceed ?</div>
                <div>
                    <button onClick={() => { setImg(false) }} className="btn btn-light">Cancel</button>
                    <button type="submit" onClick={(event) => {
                        event.preventDefault()
                        handleSubmit()
                        setImg(false)
                    }} className="btn btn-primary">Save Changes</button>
                </div>
            </div>
        </>
    )
    const handleSubmit = () => {
        let formdata = new FormData()
        //console.log(document.getElementById('profile_image'))
        formdata.append('profile_image', document.getElementById('profile_image').files[0])
        formdata.append('cover_image', document.getElementById('cover_image').files[0])
        axios.post('/profile/uploadImage', formdata, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }).then(
            dispatch(getProfile)
        )
    }
    return (
        
        <div class="form-container container-fluid p-0">
            <div class="row cover-img">
                <img src={props.cover_img} class="cover" />

            </div>
            <div class="imageWrapper">
                
                <img class="profile" src={props.profile_image} />

            </div>
            <form class="main p-0">
                <div class='imageWrapper'>
                    <input id="profile_image" type="file" name="profile_image" onChange={() => { setImg(true) }} hidden />
                    <label for="profile_image" className="btn btn-light icon" hidden={profileState.profile===''}>
                        <i class="fas fa-camera"></i>
                    </label>

                </div>
                <div class="cover-img">

                    <input id='cover_image' name='cover_image' type='file' onChange={() => { setImg(true) }} hidden />
                    <label className=" btn btn-light cover-btn" for='cover_image' hidden={profileState.profile===''} ><i className="fas fa-camera"></i> Edit Cover</label>


                </div>
                {img ? savebtn : null}
            </form>
            <Form onSubmit={submit} />
        </div>

    )
}
// export default createProfile;
export default Profile