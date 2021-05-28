import axios from 'axios'
import { useEffect, useState } from 'react'
import Comment from './comment/comment'
import './Posts.css'
export default function Posts(props) {
    useEffect(() => {
        setlike(props.islike)
        setdislike(props.isdislike)

    }, [props.islike, props.isdislike])
    // console.log('posts===>', props.val)

    const profile_id = props.val.author_id._id
    const post_id = props.val._id
    const [like, setlike] = useState(false)
    const [dislike, setdislike] = useState(false)
    const [flag, setflag] = useState(false)

    const likeHandler = () => {
        setlike(true)
        setdislike(false)
        axios.post('http://localhost:4444/posts/likePost', {
            user_profile_id: profile_id,
            post_id: post_id
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    const unlikeHandler = () => {
        setlike(false)
        axios.post('http://localhost:4444/posts/unlikePost', {
            user_profile_id: profile_id,
            post_id: post_id
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }
    const dislikeHandler = () => {
        setdislike(true)
        setlike(false)
        axios.post('http://localhost:4444/posts/dislikePost', {
            user_profile_id: profile_id,
            post_id: post_id
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    const undislikeHandler = () => {
        setdislike(false)
        axios.post('http://localhost:4444/posts/undislikePost', {
            user_profile_id: profile_id,
            post_id: post_id
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    const commentHandler = () => {
        console.log(props.current_user, profile_id)
        axios.post('http://localhost:4444/posts/createComment', {
            profile_id: props.current_user,
            post_id: post_id,
            comment: document.getElementById('fill-comment').value
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    const flagHandler = () => {
        setflag(true)
        axios.post('http://localhost:4444/posts/flagPost', {
            profile_id: props.current_user,
            post_id: post_id
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }
    const unflagHandler = () => {
        setflag(false)
        axios.post('http://localhost:4444/posts/unflagPost', {
            profile_id: props.current_user,
            post_id: post_id
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }
    console.log(props)
    return (
        <>

            <div class="card post-container">
                <div class='d-flex flex-column col-md-11'>
                    <div class="d-flex justify-content-between p-2 px-3">
                        <div class="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/UXdKE3o.jpg" width="50" class="rounded-circle" />
                            <div class="d-flex flex-column ml-2"> <span class="font-weight-bold">{props.val.author_id.firstname + ' ' + props.val.author_id.lastname}</span> <small class="text-primary">Collegues</small>
                            </div>
                        </div>
                        <div class="d-flex flex-row mt-1 ellipsis"> <small class="mr-2">{props.val.date}</small> <i class="fa fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <img src={props.val.imageUrl} />

                    <div class="p-2">
                        <p class="text-justify">{props.val.description}</p>
                        <p class="display-container">

                            <div><i className='fas fa-thumbs-up'></i> <p>{props.like_count?props.like_count:null}</p></div>
                            <div><i className='fas fa-thumbs-down'></i> <p>{props.dislike_count?props.dislike_count:null}</p></div>
                            <div><i className='fas fa-flag'></i> <p>{props.flag_count?props.flag_count:null}</p></div>
                        </p>
                        
                        <hr/>


                            <div class="container-fluid">
                                <div class="row">
                                    <div class='btn-container'>
                                        {like
                                            ? <button className="clickedBtns" type="button" onClick={unlikeHandler} ><span className="span">Like<i class="fas fa-thumbs-up"></i></span></button>
                                            : <button className="styledBtns" type="button" onClick={likeHandler} ><span className="span">Like<i class="far fa-thumbs-up"></i></span></button>
                                        }
                                        {dislike
                                            ? <button className="clickedBtns" type="button" onClick={undislikeHandler} ><span className="span-dislike">Dislike <i class="fas fa-thumbs-down"></i></span></button>
                                            : <button className="styledBtns" type="button" onClick={dislikeHandler} ><span className="span-dislike">Dislike<i class="far fa-thumbs-down"></i></span></button>
                                        }
                                        <button type="button" className="styledBtns">
                                            <span className="span-comment" onClick={() => {
                                                document.getElementById('fill-comment').focus()
                                            }}>
                                                <i class="fas fa-comment-alt"></i>
                                        comment
                                    </span>
                                        </button>

                                        {flag ? <button onClick={unflagHandler} type="button" className="clickedBtns">
                                            <span className="span-comment">
                                                <i class="fa fa-flag"></i>
                                        UnFlag 
                                    </span>
                                        </button> :
                                            <button onClick={flagHandler} type="button" className="styledBtns">
                                                <span className="span-comment">
                                                    <i class="fa fa-flag"></i>
                                        Flag
                                    </span>
                                            </button>}
                                    </div>
                                </div>
                                <hr />
                                {/* load comments */}

                                <div class="comments">
                                    {props.comments.map((comment) => {
                                        return <Comment key={comment._id} val={comment} />
                                    })}
                                </div>
                                {/* createComments */}
                                <div class="comment-input">
                                    <input type="text" id="fill-comment" class="form-control" placeholder="write a comment...." required />
                                    <div class="fonts">
                                        <button onClick={commentHandler}>
                                            <i class="fas fa-paper-plane"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}