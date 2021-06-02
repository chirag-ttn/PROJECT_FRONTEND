import axios from '../../Api/localhost'
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
export const getFlaggedPostSuccess = (data) => {
    return {
        type: "GET_POST_MODERATOR_SUCCESS",
        payload: data
    }
}

export const getPostFailure = (err) => {
    return {
        type: "GET_POST_FAILURE",
        payload: err
    }
}

export const createPostStart = () => {
    return {
        type: "CREATE_POST_START"
    }
}

export const createPostSuccess = (data) => {
    console.log(data)
    return {
        type: "CREATE_POST_SUCCESS",
        payload: data
    }
}

export const createPostFailure = (err) => {
    return {
        type: "CREATE_POST_FAILURE",
        payload: err
    }
}

export const getPosts = (dispatch) => {

        dispatch(getPostStart())
        axios.get('/posts/getAllPosts')
        .then(res=>dispatch(getPostSuccess(res)))
        .catch(err=>dispatch(getPostFailure(err)))

}
export const getPostsPerPage = (dispatch) => {
    return (pageCount,postCount) => {
        dispatch(getPostStart())
        axios.get(`/posts/getPosts`, { params: { pageCount,postCount} })
            .then(res => dispatch(getPostSuccess(res)))
            .catch(err => dispatch(getPostFailure(err)))
    }
}
export const getFlaggedPosts = (dispatch) => {

    dispatch(getPostStart())
    axios.get('/posts/getFlaggedPosts')
        .then(res => dispatch(getFlaggedPostSuccess(res)))
        .catch(err => dispatch(getPostFailure(err)))

}
export const createPost = (data) => {
    return (dispatch) => {
        dispatch(createPostStart())
        axios.post('/posts/createPost', data,
            {
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            }
        ).then(res => {
            dispatch(createPostSuccess(res.data))
        })
        .catch(err=>{
            dispatch(createPostFailure(err))
        })
    }

}