const initialState = {
    profile: '',
    anyUserProfile:null,
    getProfileError: null,
    getProfileLoading: true,
}

export default (state = initialState, action) => {
    switch (action.type) {

        case "GET_PROFILE_START":
            return {...state,getProfileLoading:true}
        case "GET_PROFILE_SUCCESS":
            return {...state,getProfileLoading:false,profile:action.payload.data}
        case "GET_PROFILE_FAILURE":
            return {...state,getProfileLoading:false,getProfileError:action.payload.err}
        case "GET_ANY_USER_PROFILE_SUCCESS":
            return {...state,getProfileLoading:false,anyUserProfile:action.payload.data}
        default:
            return {...state}
    }
}

