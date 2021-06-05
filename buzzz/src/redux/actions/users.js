import axios from '../../Api/localhost'
import { getProfile } from '../actions/Profile'
import { getPostsPerPage } from '../actions/Posts'
export const getUsersStart = () => {
    return {
        type: "GET_USERS_START"
    }
}

export const getUsersSuccess = (data) => {
    return {
        type: "GET_USERS_SUCCESS",
        payload: data
    }
}

export const getUsersFailure = (err) => {
    return {
        type: "GET_USERS_FAILURE",
        payload: err
    }
}

export const getUsers = (dispatch) => {

    dispatch(getUsersStart())
    axios.get('/users/getAllUsers')
        .then(res => { return dispatch(getUsersSuccess(res)) })
        .catch(err => dispatch(getUsersFailure(err)))

}
export const addFriend = (dispatch) => {
    return (data) => {
        axios.get('/users/addFriendRequested', { params: { user_id: data.user_id, friend_id: data.friend_id } })
            .then(getProfile(dispatch))
            .catch(err => console.log(err))
    }
}
export const removeFriend = (dispatch) => {
    return (data) => {
        axios.get('/users/removeFriend', { params: { user_id: data.user_id, friend_id: data.friend_id } })
            .then(getProfile(dispatch))
            .then(getPostsPerPage(dispatch)(data.pageCount, data.postCount))
            .catch(err => console.log(err))

    }
}
export const requestAccept = (dispatch) => {
    return (data) => {
        axios.get('/users/addFriendResponded', { params: { user_id: data.user_id, friend_id: data.friend_id } })
            .then(getProfile(dispatch))
            .then(getPostsPerPage(dispatch)(data.pageNumber, data.postCount))
            .catch(err => console.log(err))
    }
}
export const requestReject = (dispatch) => {
    return (data) => {
        axios.get('/users/rejectFriendResponded', { params: { user_id: data.user_id, friend_id: data.friend_id} })
            .then(getProfile(dispatch))
            .catch(err => console.log(err))
    }
}
export const revokeRequest = (dispatch) => {
    return (data) => {
        axios.get('/users/revokeRequest', { params: { user_id: data.user_id, friend_id:data.friend_id  } })
        .then(getProfile(dispatch))
        .catch(err => console.log(err))
    }
}


