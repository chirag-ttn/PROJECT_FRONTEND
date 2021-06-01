import axios from '../../Api/localhost'
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
        payload:err
    }
}

export const getUsers = (dispatch) => {
    
        dispatch(getUsersStart())
        axios.get('/users/getAllUsers')
        .then(res=>
            {return dispatch(getUsersSuccess(res))})
        .catch(err=>dispatch(getUsersFailure(err)))
    
}