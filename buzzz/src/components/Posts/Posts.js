import axios from '../../Api/localhost'
import { useEffect, useState, useRef } from 'react'
import Comment from './comment/comment'
import './Posts.css'
import { useDispatch, useSelector } from 'react-redux'
import { 
        likePost,
        unlikePost,
        dislikePost, 
        undislikePost ,
        commentPost, 
        flagPost,
        unflagPost,
        approveFlagPost,
        removeFlagPost
    } from '../../redux/actions/Posts'
import { getPosts, getFlaggedPosts } from '../../redux/actions/Posts'
import Moment from 'react-moment'
import { getProfile } from '../../redux/actions/Profile'
import Loading from '../../components/Loading/Loading'
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
    const [likeCount, setlikeCount] = useState(props.like_count)
    const [dislikeCount, setdislikeCount] = useState(props.dislike_count)

    const commentInput = useRef(null)
    const { islike, isdislike, isflagged } = props;
    const dispatch = useDispatch()
    useEffect(() => {
        setlike(islike)
        setdislike(isdislike)
        setflag(isflagged)
    }, [islike, isdislike, isflagged])
    const likeHandler = () => {
        let temp_dislike = dislike
        setlike(true)
        setlikeCount(likeCount + 1)
        if (dislike) {
            setdislike(false)
            setdislikeCount(dislikeCount - 1)
        }
        likePost(dispatch)({
            profile_id: profile_id,
            post_id: post_id,
            temp_dislike: temp_dislike,
            props: {
                pageCount: props.pageCount,
                postCount: props.postCount
            }
        })
    }
    const unlikeHandler = () => {
        setlike(false)
        setlikeCount(likeCount - 1)
        unlikePost(dispatch)({
            profile_id: profile_id,
            post_id: post_id,
            props: {
                pageCount: props.pageCount,
                postCount: props.postCount
            }
        })
    }
    const dislikeHandler = () => {
        setdislike(true)
        let temp_like = like
        if (like) {
            setlike(false)
            setlikeCount(likeCount - 1)
        }
        setdislikeCount(dislikeCount + 1)
        dislikePost(dispatch)({
            profile_id: profile_id,
            post_id: post_id,
            like: temp_like,
            props: {
                pageCount: props.pageCount,
                postCount: props.postCount
            }
        })
    }
    const undislikeHandler = () => {
        setdislike(false)
        setdislikeCount(dislikeCount - 1)
        undislikePost(dispatch)({
            profile_id: profile_id,
            post_id: post_id,
            props: {
                pageCount: props.pageCount,
                postCount: props.postCount
            }
        })
    }
    const commentChangeHandler = (event) => {
        setComment(event.target.value)
    }
    const commentHandler = () => {
        if (comment === null) {
            seterrorComment(true)
        }
        else {
            seterrorComment(false)
            let commentStore = comment
            setComment(null)
            setShowComment(true)
            commentPost(dispatch)({
                profile_id: profile_id,
                post_id: post_id,
                comment:commentStore,
                props: {
                    pageCount: props.pageCount,
                    postCount: props.postCount
                }
            })
        }

    }
    const flagHandler = () => {
        setflag(true)
        flagPost(dispatch)({
            profile_id:props.current_user,
            post_id:post_id,
            props:{
                pageCount:props.pageCount,
                postCount:props.postCount
            }
        })

    }
    const unflagHandler = () => {
        setflag(false)
        unflagPost(dispatch)({
            profile_id:props.current_user,
            post_id:post_id,
            props:{
                pageCount:props.pageCount,
                postCount:props.postCount
            }
        })

    }
    const approveFlaggedPost = () => {
        approveFlagPost(dispatch)({
            post_id:post_id
        })
    }
    const removeFlaggedPost = () => {
    removeFlagPost(dispatch)({
        post_id:post_id
    })

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
                        commentInput.current.focus()
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
            <form class="comment-input">
                <input ref={commentInput} type="text" class="form-control" placeholder="write a comment...." onChange={commentChangeHandler} required />
                <button type='reset' className='btn-comment btn btn-primary' onClick={commentHandler}>
                    add
                </button>
            </form>
            {errorComment ? <span className={'text-danger'}>Please fill the comment</span> : null}
        </>
    )

    const PostComponent =
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
                            <p className="display-container">

                                <div >
                                    <i className='fas fa-heart like'></i>
                                    <p className='text-muted'>{likeCount}</p>
                                </div>
                                <div className='px-2'>
                                    <i className='fas fa-thumbs-down dislike'></i>
                                    <p className='text-muted'>{dislikeCount}</p>
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
    return (
        <>
            {PostComponent}
        </>
    )
}