import axios from 'axios'
import { useEffect, useState } from 'react'
import Comment from './comment/comment'
import './Posts.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, getFlaggedPosts } from '../../redux/actions/Posts'
import Moment from 'react-moment'

export default function Posts(props) {

    const profile_id = props.current_user
    const post_id = props.val._id
    const [like, setlike] = useState(false)
    const [dislike, setdislike] = useState(false)
    const [flag, setflag] = useState(false)
    const [comment, setComment] = useState(null)
    const [errorComment, seterrorComment] = useState(false)
    const [showComment, setShowComment] = useState(false)
    const [showFlag, setShowFlag] = useState(false)
    const { islike, isdislike, isflagged } = props;
    const dispatch = useDispatch()
    useEffect(() => {
        setlike(islike)
        setdislike(isdislike)
        setflag(isflagged)
    }, [islike, isdislike, isflagged])
    const likeHandler = () => {
        setlike(true)
        setdislike(false)
        axios.post('http://localhost:4444/posts/likePost', {

            user_profile_id: profile_id,
            post_id: post_id
        })
            .then(getPosts(dispatch))
            .catch(err => console.log(err))
    }
    const unlikeHandler = () => {
        setlike(false)
        axios.post('http://localhost:4444/posts/unlikePost', {
            user_profile_id: profile_id,
            post_id: post_id
        })
            .then(getPosts(dispatch))
            .catch(err => console.log(err))

    }
    const dislikeHandler = () => {
        setdislike(true)
        setlike(false)
        axios.post('http://localhost:4444/posts/dislikePost', {
            user_profile_id: profile_id,
            post_id: post_id
        })
            .then(getPosts(dispatch))
            .catch(err => console.log(err))
    }
    const undislikeHandler = () => {
        setdislike(false)
        axios.post('http://localhost:4444/posts/undislikePost', {
            user_profile_id: profile_id,
            post_id: post_id
        })
            .then(getPosts(dispatch))
            .catch(err => console.log(err))
    }
    const commentChangeHandler = (event) => {
        setComment(event.target.value)
    }
    const commentHandler = () => {
        if (comment == null) {
            console.log(comment)
            seterrorComment(true)
        }
        else {
            seterrorComment(false)
            let commentStore = comment
            setComment('')
            setShowComment(true)
            axios.post('http://localhost:4444/posts/createComment', {
                profile_id: props.current_user,
                post_id: post_id,
                comment: commentStore
            })
                .then(getPosts(dispatch))
                .catch(err => console.log(err))
        }

    }
    const flagHandler = () => {
        setflag(true)
        axios.post('http://localhost:4444/posts/flagPost', {
            profile_id: props.current_user,
            post_id: post_id
        })
            .then(getPosts(dispatch))
            .catch(err => console.log(err))

    }
    const unflagHandler = () => {
        setflag(false)
        axios.post('http://localhost:4444/posts/unflagPost', {
            profile_id: props.current_user,
            post_id: post_id
        })
            .then(getPosts(dispatch))
            .catch(err => console.log(err))

    }
    const approveFlaggedPost = () => {
        axios.post('http://localhost:4444/posts/approveFlaggedPost', {
            post_id: post_id
        })
            .then(getFlaggedPosts(dispatch))
            .catch(err => console.log(err))

    }
    const removeFlaggedPost = () => {
        axios.post('http://localhost:4444/posts/removeFlaggedPost', {
            post_id: post_id
        })
            .then(getFlaggedPosts(dispatch))
            .catch(err => console.log(err))

    }

    const showCommentToggler = () => {
        setShowComment(!showComment)
    }
    const hideShowComment = () => {
        setShowComment(false)
    }
    const showFlagged = () => {
        setShowFlag(!showFlag)
    }
    let ButtonBox = (
        <div class="row">
            <div class='btn-container'>
                {like
                    ?
                    <button className="clickedBtns" type="button" onClick={unlikeHandler}>
                        <span className="span">
                            <i class="fas fa-thumbs-up"></i>
                            <p className='m-0'>Like</p>
                        </span>
                    </button>
                    :
                    <button className="styledBtns" type="button" onClick={likeHandler}>
                        <span className="span">
                            <i class="far fa-thumbs-up"></i>
                            <p className='m-0'>Like</p>
                        </span>
                    </button>
                }
                {dislike
                    ?
                    <button className="clickedBtns" type="button" onClick={undislikeHandler} >
                        <span className="span-dislike">
                            <i class="fas fa-thumbs-down"></i>
                            <p className='m-0'>Dislike</p>
                        </span>
                    </button>
                    :
                    <button className="styledBtns" type="button" onClick={dislikeHandler}>
                        <span className="span-dislike">
                            <i class="far fa-thumbs-down"></i>
                            <p className='m-0'>Dislike</p>
                        </span>
                    </button>
                }
                <button type="button" className="styledBtns">
                    <span className="span-comment" onClick={() => {
                    }}>
                        <i class="fas fa-comment-alt"></i>
                                        comment
                                    </span>
                </button>

            </div>
        </div>
    )
    let showcomment = (
        <>
            {showComment ?
                <div class="comments" key={props.val._id} id={props.val._id} >
                    <p className="hide-comments" onClick={hideShowComment}>hide comments &nbsp;<i class="fas fa-chevron-up"></i></p>
                    {props.comments.map((comment) => {
                        return <Comment key={comment._id} val={comment} profile={comment.profile_id} />
                    })}
                </div> : null}
        </>
    )
    let createComment = (
        <>
            <div class="comment-input">
                <input type="text" class="form-control" placeholder="write a comment...." onChange={commentChangeHandler} required />
                <button className='btn-comment btn btn-primary' onClick={commentHandler}>
                    add
                                </button>
            </div>
            {errorComment ? <span className={'text-danger'}>Please fill the comment</span> : null}
        </>
    )
    return (
        <>

            <div class="card post-container">
                <div class='d-flex justify-content-center flex-column col-md-12 '>
                    {showFlag ?
                        <div className='flag-modal'>
                            {flag ?
                                <button onClick={unflagHandler} type="button" className="clickedBtns text-danger">
                                    <span className="span-comment">
                                        <i class="fa fa-flag"></i>
                                        &nbsp;UnFlag
                                    </span>
                                </button> :

                                <button onClick={flagHandler} type="button" className="styledBtns text-primary">
                                    <span className="span-comment">
                                        <i class="fa fa-flag"></i>
                                        &nbsp;Flag
                                    </span>
                                </button>}
                        </div> : null}
                    <div id='post-header' class="d-flex justify-content-between p-2">
                        <div class="d-flex flex-row align-items-center p-2">
                            <img src={props.val.author_id.profile_image} width="50" class="rounded-circle" />
                            <div class="d-flex flex-column ml-2"> <span class="font-weight-bold">{props.val.author_id.firstname + ' ' + props.val.author_id.lastname}</span> <small class="text-primary">{props.val.author_id.designation}
                            </small>
                            </div>
                        </div>
                        <div class="d-flex flex-row mt-1 ellipsis"> <small class="mr-2">
                            <Moment fromNow>{props.val.date}</Moment>
                        &nbsp;
                            {!props.moderatorView ?
                                <button style={{ "border": "none", "background": "transparent" }} onClick={showFlagged}>
                                    <i class="fa fa-ellipsis-h"></i>
                                </button>
                                :
                                <>
                                    <button className='btn' style={{ "border": "none", "background": "transparent", 'color': 'green' }} onClick={approveFlaggedPost}>
                                        <i class="far fa-check-circle"></i>
                                    </button>
                                    <button className='btn' style={{ "border": "none", "background": "transparent", 'color': 'red' }} onClick={removeFlaggedPost}>
                                        <i class="fas fa-ban"></i>
                                    </button>
                                </>
                            }
                        </small>
                        </div>


                    </div>
                    <p class="p-2 ml-2 my-0" style={{ "font-size": "18px" }}>{props.val.description}</p>
                    {props.val.imageUrl !== 'no-image' ?
                        <img className="p-2 post-image" src={props.val.imageUrl} /> : null}

                    <div class="p-2 ml-2">
                        <div className='d-flex justify-content-between align-items-center'>
                            <p class="display-container">

                                <div >
                                    <i className='fas fa-heart like'></i>
                                    <p className='text-muted'>{props.like_count ? props.like_count : null}</p>
                                </div>
                                <div >
                                    <i className='fas fa-thumbs-down dislike'></i>
                                    <p className='text-muted'>{props.dislike_count ? props.dislike_count : null}</p>
                                </div>
                                {/* <div><i className='fas fa-flag'></i> <p>{props.flag_count ? props.flag_count : null}</p></div> */}
                            </p>
                            {/* {console.log(props)} */}
                            <p className='m-0 show-comment' onClick={showCommentToggler}>comments <small>{props.comments.length}</small></p>
                        </div>
                        <hr />


                        <div class="">
                            {!props.moderatorView ?
                                <>
                                    {ButtonBox}
                                    <hr />
                                    {showcomment}
                                    {createComment}
                                    </> :
                                    <>
                                    {showcomment}
                                    </>
                                }

                            {/* show comments */}
                            
                            {/* createComments */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}