import React, { useEffect } from 'react'
import { getUser } from '../../actions/auth'
import { useSelector, useDispatch } from 'react-redux'

import UserCard from '../../components/userCard/userCard'
import Navbar from '../../components/Navbar/Navbar'
import Suggestions from '../../components/Suggestions/suggestions'
import CreatePost from '../../components/CreatePost/CreatePost'
import Posts from '../../components/Posts/Posts'
import './Feeds.css'
function Feeds() {
    const dispatch = useDispatch()
    useEffect(() => {
        getUser(dispatch)()
    }, [getUser])

    const state = useSelector(state => state.authReducer)

    return (
        <>
            <div className='section'>
                <Navbar picture={state.profile_pic} name={state.f_name + '' + state.l_name} />
                <div className="feed-container">
                    <div className="left-section">
                        <UserCard />
                    </div>
                    <div className="mid-section">
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <CreatePost picture={state.profile_pic} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='scroll'>
                                        <Posts />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-section">
                        <Suggestions />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Feeds;