import axios from 'axios'
export const getProfileStart = () => {
    return {
        type: "GET_PROFILE_START"
    }
}

export const getProfileSuccess = (data) => {
    return {
        type: "GET_PROFILE_SUCCESS",
        payload: data
    }
}

export const getProfileFailure = (err) => {
    return {
        type: "GET_PROFILE_FAILURE",
        payload: err
    }
}

export const getProfile = (dispatch) => {
    return () => {  
            dispatch(getProfileStart())
            axios.get('http://localhost:4444/profile/getUserProfile')
            .then(res => dispatch(getProfileSuccess(res)))
            .catch(err=> dispatch(getProfileFailure(err)))
    }
}
export const getUserProfile = (dispatch) => {
    return (data) => {  
            dispatch(getProfileStart())
            axios.get('http://localhost:4444/profile/getAnyUserProfile?profile_id='+data)
            .then(res => dispatch(getProfileSuccess(res)))
            .catch(err=> dispatch(getProfileFailure(err)))
    }
}