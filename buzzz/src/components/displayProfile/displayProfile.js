import { useState } from 'react';
import Classes from './displayProfile.module.css'
import axios from '../../Api/localhost'
import {useDispatch} from 'react-redux'
import {getProfile} from '../../redux/actions/Profile'
import { Redirect } from 'react-router';
import {Link, useHistory} from 'react-router-dom'
const DisplayProfile = (props) => {
    const dispatch = useDispatch();
    let history = useHistory();
    const [showBtn, setshowBtn] = useState(true)
        const addFriendRequest= () => {
            setshowBtn(false)
            axios.get('/users/addFriendRequested', { params: { user_id: props.userProfileId, friend_id: props.friendProfile._id } })
                .then(res=>console.log(res))
                .catch(err => console.log(err))
        }
        const cancelFriendRequest = () => {
            setshowBtn(true)
            axios.get('/users/revokeRequest', { params: { user_id: props.userProfileId, friend_id: props.friendProfile._id } })
                .then(res=>console.log(res))
                .catch(err => console.log(err))
        }
        const updateProfile = ()=>{
            history.push('/updateProfile')
        }
    let addFriendBtn = (<>
        <button onClick={addFriendRequest} className={Classes.but}>
            <p>Add friend</p>
        </button>
    </>)
    let cancelRequestBtn = (<>
        <button onClick={cancelFriendRequest} className={Classes.butCancel}>
            <p>Cancel Request</p>
        </button>
    </>)
    let updateProfileBtn = (<>
        <button onClick={updateProfile} className={Classes.but}>
            <p>Update Profile</p>
        </button>
    </>)



    return (
        <>
            <div className={Classes.mainBox}>

                {/* <button className={[Classes.inputBtn, Classes.upload].join()} id='input_btn'><i clas    s="fa fa-camera cam"></i></button> */}
                <img className={Classes.cover} id="blah" src={props.friendProfile.cover_image} />
                <div>
                    <img class={Classes.dp} src={props.friendProfile.profile_image} />
                </div>
                {/* <button className={[Classes.penBtn, Classes.upload].join()}><i class="fa fa-pencil pen"></i></button> */}


                <div className={Classes.box}>
                    <div className={Classes.mainContent}>
                        <h3 className={Classes.name}>{props.friendProfile.firstname + ' ' + props.friendProfile.lastname}</h3>
                        <h5 className={Classes.designation}>{props.friendProfile.designation}</h5>
                        <div className={Classes.content}>
                            <h5 className={Classes.addr}>{props.friendProfile.city + ', ' + props.friendProfile.state}</h5>
                        </div>
                        <ul className={Classes.content}>
                            <li><span>{props.friendProfile.friends.length} Friends</span></li>
                            <li><span></span></li>
                        </ul>
                        <div className={Classes.btnContainer}>
                            {
                            (props.friendProfile._id !== props.userProfileId)?
                            showBtn?
                            addFriendBtn : cancelRequestBtn:
                            updateProfileBtn
                        }


                            <button className={Classes.but}><i class="fas fa-external-link-square-alt"></i>
                                <p>visit Website</p>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default DisplayProfile;