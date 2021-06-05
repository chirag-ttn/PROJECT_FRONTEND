import axios from '../../Api/localhost'
import {getProfile} from '../actions/Profile'
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

export const likePost = (dispatch)=>{
    return (data)=>{
        // console.log(data)
        axios.post('/posts/likePost', {

            user_profile_id: data.profile_id,
            post_id: data.post_id,
            dislike:data.temp_dislike
        })
            .then(getPostsPerPage(dispatch)(data.props.pageCount, data.props.postCount))
            .catch(err => console.log(err))
    
    }
}
export const unlikePost = (dispatch)=>{
    return (data)=>{
        // console.log(data)
        axios.post('/posts/unlikePost', {

            user_profile_id: data.profile_id,
            post_id: data.post_id,
        })
            .then(getPostsPerPage(dispatch)(data.props.pageCount, data.props.postCount))
            .catch(err => console.log(err))
    
    }
}
export const dislikePost = (dispatch)=>{
    return (data)=>{
        // console.log(data)
        axios.post('/posts/dislikePost', {

            user_profile_id: data.profile_id,
            post_id: data.post_id,
            like:data.like
        })
            .then(getPostsPerPage(dispatch)(data.props.pageCount, data.props.postCount))
            .catch(err => console.log(err))
    
    }
}
export const undislikePost = (dispatch)=>{
    return (data)=>{
        // console.log(data)
        axios.post('/posts/undislikePost', {

            user_profile_id: data.profile_id,
            post_id: data.post_id,
        })
            .then(getPostsPerPage(dispatch)(data.props.pageCount, data.props.postCount))
            .catch(err => console.log(err))
    
    }
}
export const commentPost = (dispatch)=>{
    return (data)=>{
        console.log(data)
        axios.post('/posts/createComment', {

            user_profile_id: data.profile_id,
            post_id: data.post_id,
            comment:data.comment
        })
            .then(getPostsPerPage(dispatch)(data.props.pageCount, data.props.postCount))
            .catch(err => console.log(err))
    
    }
}
export const flagPost = (dispatch)=>{
    return (data)=>{
        console.log(data)
        axios.post('/posts/flagPost', {
            profile_id: data.profile_id,
            post_id: data.post_id
        })
            .then(getPostsPerPage(dispatch)(data.props.pageCount, data.props.postCount))
            .catch(err => console.log(err))
    }
}
export const unflagPost = (dispatch)=>{
    return (data)=>{
        console.log(data)
        axios.post('/posts/unflagPost', {
            profile_id: data.profile_id,
            post_id: data.post_id
        })
            .then(getPostsPerPage(dispatch)(data.props.pageCount, data.props.postCount))
            .catch(err => console.log(err))
    }
}
export const approveFlagPost = (dispatch)=>{
    return (data)=>{
        console.log(data)
        axios.post('/posts/approveFlaggedPost', {
            post_id: data.post_id
        })
            .then(getFlaggedPosts(dispatch))
            .catch(err => console.log(err))
    }
}
export const removeFlagPost = (dispatch)=>{
    return (data)=>{
        axios.post('/posts/removeFlaggedPost', {
            post_id: data.post_id
        })
            .then(getFlaggedPosts(dispatch))
            .then(getProfile(dispatch))
            .catch(err => console.log(err))

    }
}