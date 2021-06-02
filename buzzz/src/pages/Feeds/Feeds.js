import React, { useEffect, useState } from 'react'
import { getUser } from '../../redux/actions/auth'
import { useSelector, useDispatch } from 'react-redux'

import UserCard from '../../components/userCard/userCard'
import Navbar from '../../components/Navbar/Navbar'
import Suggestions from '../../components/Suggestions/suggestions'
import CreatePost from '../../components/CreatePost/CreatePost'
import Posts from '../../components/Posts/Posts'
import { getFlaggedPosts, getPostsPerPage } from '../../redux/actions/Posts'
import { getProfile } from '../../redux/actions/Profile'
import Loading from '../../components/Loading/Loading'
import './Feeds.css'

function Feeds() {

    const dispatch = useDispatch()
    useEffect(() => {
        getProfile(dispatch)()
        getUser(dispatch)()
    }, [])

    const [pageNumber, setPageNumber] = useState(0)
    let [feed, setFeed] = useState([])

    const postCount = 5;

    const post = useSelector(state => state.postReducer)
    // {console.log('POST',post)}
    const profile = useSelector(state => state.profileReducer)
    const { role } = useSelector(state => state.authReducer)
    // console.log(post.posts[0].author_id,profile.profile.user_id)
    const current_user_profile = profile.profile
    const loading = profile.getProfileLoading
    const {getPostLoading} = post
    useEffect(() => {
        getPostsPerPage(dispatch)(pageNumber, postCount)
        setFeed([...feed, ...post.posts])
    }, [pageNumber])


    const loadMoreHandler = () => {
        setPageNumber(pageNumber + 1)
    }
    const [sf, setsf] = useState(1)

    let SfSidebar = (<>
        <Suggestions heading={'suggestions'} suggestions={current_user_profile.suggestions} id={current_user_profile._id} status={0} />
        <br />
        <Suggestions heading={'friends'} suggestions={current_user_profile.friends} id={current_user_profile._id} status={1} pageNumber={pageNumber} postCount={postCount} />
    </>)
    let RrSidebar = (<>
        <Suggestions heading={'requests'} suggestions={current_user_profile.requests} id={current_user_profile._id} status={2} pageNumber={pageNumber} postCount={postCount} />
        <br />
        <Suggestions heading={'requested'} suggestions={current_user_profile.requested} id={current_user_profile._id} status={3}  />
    </>
    )
    const toggleHandler = () => {
        setsf(!sf)
    }

    const reserved_post_state = (val) => {
        // console.log(val)
        let user_id = current_user_profile._id
        let { likes, dislikes, flagged } = val
        let islike = false
        let isdislike = false;
        let isflagged = false;
        for (let idx = 0; idx < likes.length; idx++) {
            if (likes[idx] === user_id) {
                islike = true;
                break;
            }
        }
        for (let idx = 0; idx < flagged.length; idx++) {
            if (flagged[idx] === user_id) {
                isflagged = true;
                break;
            }
        }
        for (let idx = 0; idx < dislikes.length; idx++) {
            if (dislikes[idx] === user_id) {
                isdislike = true;
                break;
            }
        }
        // console.log(islike,isdislike)
        return {
            islike: islike,
            isdislike: isdislike,
            isflagged: isflagged
        }
    }
    //set isLike/isDislike in every post
    const switchModeratorViewOn = () => {
        getFlaggedPosts(dispatch)
    }
    const switchModeratorViewOff = () => {
        getPostsPerPage(dispatch)(pageNumber, postCount)

    }
    // console.log('feed',feed,post)
    if (feed.length === 0 && post.posts[1]!==null) {
        feed = [...post.posts]
    }
    return (
        <>
            <div class='feed-section'>
                <Navbar profile_image={current_user_profile.profile_image} username={current_user_profile.firstname + ' ' + current_user_profile.lastname} onToggle={toggleHandler} />
                <div class="feed-container">
                    <div class="left-section">
                        <UserCard profile_image={current_user_profile.profile_image} profile={current_user_profile} post={profile.profile} />
                    </div>
                    <div class="mid-section">
                        <div class='container-fluid'>
                            <div class='row'>
                                <div class='col-md-12'>
                                    <CreatePost firstname={current_user_profile.firstname} picture={current_user_profile.profile_image} profile_id={current_user_profile._id} />
                                </div>
                            </div>
                            <div class='row'>
                                <div class='col-md-12 toggle-switch-container'>
                                    <p class='col-md-2'></p>
                                    <div className=' col-md-5 d-flex'>

                                        {role == 'admin' ?
                                            post.moderatorView ?
                                                <label onClick={switchModeratorViewOff} class="switch ">
                                                    <input type="checkbox" />
                                                    <span class="slider round">Moderator View OFF</span>
                                                </label> :
                                                <label onClick={switchModeratorViewOn} class="switch ">
                                                    <input type="checkbox" />
                                                    <span class="slider round">Moderator View ON</span>
                                                </label> : null}
                                    </div>
                                </div>
                            </div>
                            <div class='row'>
                                <div class='col-md-12'>
                                    
                                    <div class='scroll'>
                                        {/* {post.posts?} */}
                                        
                                        {feed.map(val => {
                                            let { islike, isdislike, isflagged } = reserved_post_state(val)
                                            return <Posts
                                                key={val._id}
                                                val={val}
                                                islike={islike}
                                                isdislike={isdislike}
                                                isflagged={isflagged}
                                                moderatorView={post.moderatorView}
                                                comments={val.comments}
                                                current_user={current_user_profile._id}
                                                like_count={val.likes.length}
                                                dislike_count={val.dislikes.length}
                                                flag_count={val.flagged}
                                                postCount ={5}
                                                pageCount = {pageNumber}
                                                loading = {getPostLoading}
                                                
                                            />

                                        })}
                                        {/* {console.log(feed.length)} */}
                                        {!post.moderatorView?
                                        <div className='load-more'>
                                            {feed.length % 5 !== 0 ?
                                                <p className='post-loaded'>All posts are loaded</p> :
                                                feed.length!==0?
                                                <button className=' btn btn-dark' onClick={loadMoreHandler}>Load More</button>:null}
                                        </div>:null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-section">
                        {loading ? <Loading/> : sf ? SfSidebar : RrSidebar}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Feeds;