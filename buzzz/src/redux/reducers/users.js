const initialState = {
    users: [],
    getUsersError: null,
    getUserLoading: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS_START":
            return { ...state, getUserLoading: true }
        case "GET_USERS_SUCCESS":
            return { ...state, getUserLoading: false, users: action.payload.data }
        case "GET_USERS_FAILURE":
            return { ...state, getUserLoading: false, getUsersError: action.payload.err }
        default:
            return { ...state }
    }
}

