import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../Form/Form'
import axios from 'axios'
import './Createprofile.css'
import { getUser } from '../../redux/actions/auth'
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
    useEffect(() => {
        getUser(dispatch)()
    }, [getUser])

    const state = useSelector(state => state.authReducer)
    let formdata = new FormData()
    const [img,setImg] = useState(false)
    const onProfileChangeHandler = (event)=>{
        setImg(true);
        formdata.append('profile_image',event.target.files[0])
    }
    const onCoverChangeHandler = (event)=>{
        setImg(true);
        formdata.append('cover_image',event.target.files[0])
    }
    const uploadImageHandler = ()=>{
        setImg(false);
        axios.post('http://localhost:4444/profile/uploadImage',formdata,
            {
                headers: {
                    'Content-type':'multipart/form-data'
                }
            }
        )
    }
    
    
    let savebtn = (
        <>

        <div className="d-flex justify-content-between align-items-center">
            <div>Do You wish to proceed ?</div>
            <div>
                <button onClick={()=>{setImg(false)}}className="btn btn-light">Cancel</button>
                <button onClick={uploadImageHandler}className="btn btn-primary">Save Changes</button>
            </div>
        </div>
        </>
    )
    return (
        <form class="form-container container-fluid p-0">
            {img?savebtn:null}
            <div class="row cover-img">
                <img class="cover" />

                <input id='cover_image' name='cover_image' type='file' hidden onChange={onCoverChangeHandler}/>
                <label className=" btn btn-light cover-btn" for='cover_image' ><i className="fas fa-camera"></i> Edit Cover</label>


            </div>
            <div class="imageWrapper">
                <img class="profile" src={state.profile_pic} />
                <input id="profile_image" type="file"  name="profile_image" onChange={onProfileChangeHandler} hidden />
                <label for="profile_image" className="btn btn-light cover-btn icon">
                    <i class="fas fa-camera"></i>
                </label>
            </div>
            <Form onSubmit={submit} />
        </form>

    )
}
// export default createProfile;
export default Profile