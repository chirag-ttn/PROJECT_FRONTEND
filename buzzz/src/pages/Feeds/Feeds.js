import React, { useEffect, useState } from 'react'
import { getUser } from '../../redux/actions/auth'
import { useSelector, useDispatch } from 'react-redux'

import UserCard from '../../components/userCard/userCard'
import Navbar from '../../components/Navbar/Navbar'
import Suggestions from '../../components/Suggestions/suggestions'
import CreatePost from '../../components/CreatePost/CreatePost'
import Posts from '../../components/Posts/Posts'
import { getPosts } from '../../redux/actions/Posts'
import { getProfile } from '../../redux/actions/Profile'
import './Feeds.css'
function Feeds() {
    const dispatch = useDispatch()
    useEffect(() => {
        getProfile(dispatch)()
        getPosts(dispatch)
        getUser(dispatch)()
    }, [])

    const user = useSelector(state => state.authReducer)
    const post = useSelector(state => state.postReducer)
    const profile = useSelector(state => state.profileReducer)

    // console.log(post.posts[0].author_id,profile.profile.user_id)

    const current_user_profile = profile.profile
    const loading = profile.getProfileLoading

    const [sf, setsf] = useState(1)

    let SfSidebar = (<>
        <Suggestions heading={'suggestions'} suggestions={current_user_profile.suggestions} id={current_user_profile._id} status={0} />
        <br />
        <Suggestions heading={'friends'} suggestions={current_user_profile.friends} id={current_user_profile._id} status={1} />
    </>)
    let RrSidebar = (<>
        <Suggestions heading={'requests'} suggestions={current_user_profile.requests} id={current_user_profile._id} status={2} />
        <br />
        <Suggestions heading={'requested'} suggestions={current_user_profile.requested} id={current_user_profile._id} status={3} />
    </>
    )
    const toggleHandler = () => {
        setsf(!sf)
    }
    return (
        <>
            <div class='section'>
                <Navbar picture={user.profile_pic} name={user.f_name + '' + user.l_name} onToggle={toggleHandler} />
                <div class="feed-container">
                    <div class="left-section">
                        <UserCard picture={user.profile_pic} profile={current_user_profile} post={profile.profile} />
                    </div>
                    <div class="mid-section">
                        <div class='container-fluid'>
                            <div class='row'>
                                <div class='col-md-12'>
                                    <CreatePost picture={user.profile_pic} profile_id={current_user_profile._id} />
                                </div>
                            </div>
                            <div class='row'>
                                <div class='col-md-12'>
                                    <div class='scroll'>

                                        {post.posts.map(val => {
                                            return <Posts key={val._id} val={val} />

                                        })}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-section">
                        {loading ? 'loading....' : sf ? SfSidebar : RrSidebar}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Feeds;