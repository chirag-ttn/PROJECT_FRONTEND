import { useDispatch } from 'react-redux'
import './suggestion.css'
import { addFriend, removeFriend, requestAccept, requestReject, revokeRequest } from '../../../redux/actions/users'

export default function Suggestion(props) {
    const dispatch = useDispatch()
    const AddFriendHandler = () => {
        addFriend(dispatch)({
            user_id: props.current_userProfile_id,
            friend_id: props.other_profile_id
        })
    }
    const suggestionsBtn = (<>
        <button className="add-f-btn" onClick={AddFriendHandler}><i className='fas fa-plus'></i></button>
    </>)


    const friendRemoveHandler = () => {
        removeFriend(dispatch)({
            user_id: props.current_userProfile_id,
            friend_id: props.other_profile_id,
            pageCount: props.pageCount,
            postCount: props.postCount
        })
    }
    const FriendBtn = (<>
        <button className="remove-btn" onClick={friendRemoveHandler}><i className='fa fa-times'></i></button>
    </>)

    const RequestAcceptHandler = () => {
        requestAccept(dispatch)({
            user_id: props.current_userProfile_id,
            friend_id: props.other_profile_id,
            pageCount: props.pageCount,
            postCount: props.postCount
        })
    }
    const RequestRejectHandler = () => {
        requestReject(dispatch)({
            user_id: props.current_userProfile_id,
            friend_id: props.other_profile_id,
        })
    }
    const RequestBtn = (
        <>
            <button className="add-btn" onClick={RequestAcceptHandler}><i className='fa fa-check'></i></button>
            <button className="remove-btn" onClick={RequestRejectHandler}><i className='fa fa-times'></i></button>
        </>
    )


    const RevokeRequestHandler = () => {
        revokeRequest(dispatch)({
            user_id: props.current_userProfile_id,
            friend_id: props.other_profile_id,
    })
    }
    const RequestedBtn = (
        <button className="remove-btn" onClick={RevokeRequestHandler}><i className='fa fa-times'></i></button>
    )
    return (
        <div class='row suggestion-content' >
            <div class='img'>
                <img src={props.profile_pic} />
            </div>
            <a class='text' href={`/userProfile/${props.other_profile_id}`}>
                <div>
                    {props.f_name + ' ' + props.l_name}
                </div>
            </a>
            <div class='btn'>
                <div className='row d-flex justify-content-center'>
                    {props.status == 0 ? suggestionsBtn :
                        props.status == 1 ? FriendBtn :
                            props.status == 2 ? RequestBtn :
                                RequestedBtn}
                </div>
            </div>
        </div>

    )
}