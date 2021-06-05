import axios from '../../Api/localhost'
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

export const getAnyUserProfileSuccess = (data) => {
    return {
        type: "GET_ANY_USER_PROFILE_SUCCESS",
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
            axios.get('/profile/getUserProfile')
            .then(res => dispatch(getProfileSuccess(res)))
            .catch(err=> dispatch(getProfileFailure(err)))
    }
}
export const getUserProfile = (dispatch) => {
    return (data) => {  
            dispatch(getProfileStart())
            axios.get('/profile/getAnyUserProfile?profile_id='+data)
            .then(res => dispatch(getAnyUserProfileSuccess(res)))
            .catch(err=> dispatch(getProfileFailure(err)))
    }
}

export const createProfile = (dispatch)=>{
    return (history)=>{
        return (values)=>{
            axios({
                method: "post",
                url: "/profile/createProfile",
                data: JSON.stringify(values),
                headers: { "Content-Type": 'application/json' },
            })
                .then(function (response) {
                    getProfile(dispatch)()
                    history.push('/feeds')
                })
                .catch(function (response) {
                    alert('Error')
                });
        }
    }
    
}

export const uploadImage = (dispatch)=>{
    return (data)=>{
        
        axios.post('/profile/uploadImage', data, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }).then(
            dispatch(getProfile)
        )
    }

}