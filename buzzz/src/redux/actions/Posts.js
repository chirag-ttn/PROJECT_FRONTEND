import axios from 'axios'
export const getPostStart = () => {
    return {
        type: "GET_POST_START"
    }
}

export const getPostSuccess = (data) => {
    return {
        type: "GET_POST_SUCCESS",
        payload: data
    }
}

export const getPostFailure = (err) => {
    return {
        type: "GET_POST_FAILURE",
        payload:err
    }
}

export const createPostStart = () => {
    return {
        type: "CREATE_POST_START"
    }
}

export const createPostSuccess = (data) => {
    return {
        type: "CREATE_POST_SUCCESS",
        payload: data
    }
}

export const createPostFailure = (err) => {
    return {
        type: "CREATE_POST_FAILURE",
        payload:err
    }
}

export const getPosts = (dispatch) => {
    
        dispatch(getPostStart())
        axios.get('http://localhost:4444/posts/getAllPosts')
        .then(res=>
            {return dispatch(getPostSuccess(res))})
        .catch(err=>dispatch(getPostFailure(err)))
    
}
export const createPost = (data) => {
    return (dispatch) => {
        dispatch(createPostStart())
        axios.post('http://localhost:4444/posts/createPost',data,
            {
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            }
        )
        .then(res=>dispatch(createPostSuccess(res)))
        .catch(err=>dispatch(createPostFailure(err)))
    }

}