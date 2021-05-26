const initialState = {
    posts: [],
    getPostError: null,
    getPostLoading: false,
    createPostLoading: false,
    createPostError: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_POST_START":
            return {...state,getPostLoading:true}
        case "GET_POST_SUCCESS":
            return {...state,getPostLoading:false,posts:action.payload.data}
        case "GET_POST_FAILURE":
            return {...state,getPostLoading:false,getPostError:action.payload.err}
        case "CREATE_POST_START":
            return {...state,createPostLoading:true}
        case "CREATE_POST_SUCCESS":
            return {...state,createPostLoading:false}
        case "CREATE_POST_FAILURE":
            return {...state,createPostLoading:false,createPostError:action.payload.err}
        default:
            return {...state}
    }
}

