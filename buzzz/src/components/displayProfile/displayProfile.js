import { useEffect, useState } from 'react';
import Classes from './displayProfile.module.css'
import axios from '../../Api/localhost'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getProfile } from '../../redux/actions/Profile'
const DisplayProfile = (props) => {
    const dispatch = useDispatch()
    const [status, setStatus] = useState(null);
    let history = useHistory();

    useEffect(() => {
        btnStatus(props.userProfileId, props.friendProfile)
        console.log(status,props)
    }, [props])
    const AddFriendHandler = () => {
        setStatus(3)
        axios.get('/users/addFriendRequested', { params: { user_id: props.userProfileId, friend_id: props.friendProfile._id } })
        .then(getProfile(dispatch))
            .catch(err => console.log(err))
    }
    const RevokeRequestHandler = () => {
        setStatus(1)
        axios.get('/users/revokeRequest', { params: { user_id: props.userProfileId, friend_id: props.friendProfile._id } })
            .then(getProfile(dispatch))
            .catch(err => console.log(err))
    }
    const friendRemoveHandler = () => {
        setStatus(1)
        axios.get('/users/removeFriend', { params: { user_id: props.userProfileId, friend_id: props.friendProfile._id } })
            .then(getProfile(dispatch))

            .catch(err => console.log(err))
    }
    const updateProfile = () => {
        history.push('/updateProfile')
    }
    let addFriendBtn = (<>
        <button onClick={AddFriendHandler} className={Classes.but}>
            <p>Add friend</p>
        </button>
    </>)
    let cancelRequestBtn = (<>
        <button onClick={RevokeRequestHandler} className={Classes.butCancel}>
            <p>Cancel Request</p>
        </button>
    </>)
    let updateProfileBtn = (<>
        <button onClick={updateProfile} className={Classes.but}>
            <p>Update Profile</p>
        </button>
    </>)

    let removeFriendBtn = (<>
        <button onClick={friendRemoveHandler} className={Classes.butCancel}>
            <p>Remove Friend</p>
        </button>
    </>)


    const btnStatus = (current_user_id, friendProfile) => {
        if (current_user_id === friendProfile._id)
            setStatus(0) //updateProfile
        else {
            if (friendProfile.friends.indexOf(current_user_id) === -1 && friendProfile.requested.indexOf(current_user_id) === -1)
                setStatus(1) //addFriend
            else if (friendProfile.friends.indexOf(current_user_id) > -1 && friendProfile.requested.indexOf(current_user_id) === -1)
                setStatus(2) //remove Friend
            else if (friendProfile.friends.indexOf(current_user_id) === -1 && friendProfile.requested.indexOf(current_user_id) > -1)
                setStatus(3) //revoke Request
        }

    }
    let firstBtn = null;
    switch (status) {
        case 0:
            firstBtn = updateProfileBtn
            break;
        case 1:
            firstBtn = addFriendBtn
            break;
        case 2:
            firstBtn = removeFriendBtn
            break;
        case 3:
            firstBtn = cancelRequestBtn
            break;

        default:
            break;
    }

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

                            {firstBtn}
                            {/* {props.userProfileId===friendProfile._id?updateProfileBtn:restBtns} */}
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