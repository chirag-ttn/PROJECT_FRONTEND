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

    const state = useSelector(state => state.authReducer)
    const post = useSelector(state => state.postReducer)

    const profile = useSelector(state => state.profileReducer)

    const current_user_profile = profile.profile
    const suggestions = current_user_profile.suggestions
    const friends = current_user_profile.friends
    const requests = current_user_profile.requests
    const requested = current_user_profile.requested
    const loading = profile.getProfileLoading

    const [sf, setsf] = useState(1)
    
    let SfSidebar = (<>
        <Suggestions heading={'suggestions'} suggestions={suggestions} id={current_user_profile._id} status={0}/>
        <br />
        <Suggestions heading={'friends'} suggestions={friends} id={current_user_profile._id} status={1}/>
    </>)
    let RrSidebar = (<>
        <Suggestions heading={'requests'} suggestions={requests} id={current_user_profile._id} status={2}/>
        <br />
        <Suggestions heading={'requested'} suggestions={requested} id={current_user_profile._id} status={3}/>
    </>
    )
    const toggleHandler = () => {
        setsf(!sf)
    }
    
    return (
        <>
            <div class='section'>
                <Navbar picture={state.profile_pic} name={state.f_name + '' + state.l_name} onToggle={toggleHandler} />
                <div class="feed-container">
                    <div class="left-section">
                        <UserCard />
                    </div>
                    <div class="mid-section">
                        <div class='container-fluid'>
                            <div class='row'>
                                <div class='col-md-12'>
                                    <CreatePost picture={state.profile_pic} />
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
                        {loading ? 'loading....' : sf?SfSidebar:RrSidebar}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Feeds;