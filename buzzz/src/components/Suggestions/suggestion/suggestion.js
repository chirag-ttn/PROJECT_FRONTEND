import axios from 'axios'

import './suggestion.css'
export default function suggestion(props) {
        const AddFriendHandler = () => {
            axios.get('http://localhost:4444/users/addFriendRequested', { params: { user_id: props.current_userProfile_id, friend_id: props.other_profile_id } })
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
    const suggestionsBtn = (<>
        <button onClick={AddFriendHandler}><i className='fas fa-plus-square'></i></button>
    </>)
    
    
    const friendRemoveHandler = () => {
        axios.get('http://localhost:4444/users/removeFriend', { params: { user_id: props.current_userProfile_id, friend_id: props.other_profile_id } })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    const FriendBtn = (<>
        <button onClick={friendRemoveHandler}><i className='fa fa-times'></i></button>
    </>)

const RequestAcceptHandler = () => {
    axios.get('http://localhost:4444/users/addFriendResponded', { params: { user_id: props.current_userProfile_id, friend_id: props.other_profile_id } })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
const RequestRejectHandler = () => {
    axios.get('http://localhost:4444/users/rejectFriendResponded', { params: { user_id: props.current_userProfile_id, friend_id: props.other_profile_id } })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
const RequestBtn = (
    <>
    <button onClick={RequestAcceptHandler}><i className='fa fa-check'></i></button>
    <button onClick={RequestRejectHandler}><i className='fa fa-times'></i></button>
    </>
)


const RevokeRequestHandler = () => {
    axios.get('http://localhost:4444/users/revokeRequest', { params: { user_id: props.current_userProfile_id, friend_id: props.other_profile_id } })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
const RequestedBtn = (
        <button onClick={RevokeRequestHandler}><i className='fa fa-times'></i></button>
    )
return (
    <div id='suggestion-content' class='row d-flex align-items-center justify-content-between'>
            <div class='col-md-7'>
                {props.f_name + ' ' + props.l_name}
            </div>
            <div class='col-md-2'>
                <img src={props.profile_pic} style={{ 'width': '60%', 'border-radius': '50%' }} />
            </div>

            <div class='col-md-3'>
                <div className='row d-flex justify-content-between'>
                {props.status==0?suggestionsBtn:
                props.status==1?FriendBtn:
                props.status==2?RequestBtn:
                RequestedBtn}
                </div>
            </div>
        </div>

    )
}