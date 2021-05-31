import axios from 'axios'
import {useDispatch} from 'react-redux'
import './suggestion.css'
import {Link} from 'react-router-dom'
import {getProfile} from '../../../redux/actions/Profile'
import { getPostsPerPage } from '../../../redux/actions/Posts'

export default function Suggestion(props) {
    const dispatch = useDispatch()
        const AddFriendHandler = () => {
            axios.get('http://localhost:4444/users/addFriendRequested', { params: { user_id: props.current_userProfile_id, friend_id: props.other_profile_id } })
                .then(getProfile(dispatch))
                .catch(err => console.log(err))
        }
    const suggestionsBtn = (<>
        <button className="add-f-btn" onClick={AddFriendHandler}><i className='fas fa-plus'></i></button>
    </>)
    
    
    const friendRemoveHandler = () => {
        axios.get('http://localhost:4444/users/removeFriend', { params: { user_id: props.current_userProfile_id, friend_id: props.other_profile_id } })
            .then(getProfile(dispatch))
            .then(getPostsPerPage(dispatch)(props.pageNumber, props.postCount))
            .catch(err => console.log(err))
    }
    const FriendBtn = (<>
        <button className="remove-btn" onClick={friendRemoveHandler}><i className='fa fa-times'></i></button>
    </>)

const RequestAcceptHandler = () => {
    axios.get('http://localhost:4444/users/addFriendResponded', { params: { user_id: props.current_userProfile_id, friend_id: props.other_profile_id } })
    .then(getProfile(dispatch))
    .then(getPostsPerPage(dispatch)(props.pageNumber, props.postCount))
    .catch(err => console.log(err))
}
const RequestRejectHandler = () => {
    axios.get('http://localhost:4444/users/rejectFriendResponded', { params: { user_id: props.current_userProfile_id, friend_id: props.other_profile_id } })
    .then(getProfile(dispatch))
    .catch(err => console.log(err))
}
const RequestBtn = (
    <>
    <button className="add-btn" onClick={RequestAcceptHandler}><i className='fa fa-check'></i></button>
    <button className="remove-btn" onClick={RequestRejectHandler}><i className='fa fa-times'></i></button>
    </>
)


const RevokeRequestHandler = () => {
    axios.get('http://localhost:4444/users/revokeRequest', { params: { user_id: props.current_userProfile_id, friend_id: props.other_profile_id } })
    .then(getProfile(dispatch))
    .catch(err => console.log(err))
}
const RequestedBtn = (
        <button className="remove-btn"onClick={RevokeRequestHandler}><i className='fa fa-times'></i></button>
    )
return (
    <div class='row suggestion-content' >
            <div class='img'>
                <img src={props.profile_pic}  />
            </div>
            <a class='text'href={`/userProfile/${props.other_profile_id}`}>
            <div>
                {props.f_name + ' ' + props.l_name}
            </div>
            </a>
            <div class='btn'>
                <div className='row d-flex justify-content-center'>
                {props.status==0?suggestionsBtn:
                props.status==1?FriendBtn:
                props.status==2?RequestBtn:
                RequestedBtn}
                </div>
            </div>
        </div>

    )
}