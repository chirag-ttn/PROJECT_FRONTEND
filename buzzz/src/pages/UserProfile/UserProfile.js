import Navbar from '../../components/Navbar/Navbar'
import displayProfile from '../../components/displayProfile/displayProfile'
import Suggestions from '../../components/Suggestions/suggestions'
import Loading from '../../components/Loading/Loading'
import Classes from './UserProfile.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import DisplayProfile from '../../components/displayProfile/displayProfile'
import { getUserProfile,getProfile } from '../../redux/actions/Profile'
import { useParams } from 'react-router'
function UserProfile(props) {
    const {id} = useParams()
    
    const dispatch = useDispatch()
    useEffect(() => {
        getUserProfile(dispatch)(id)
    }, [])

    const state = useSelector(state => state.profileReducer)
    console.log(state)
    const current_user_profile_id = useSelector(state=>state.authReducer).profile_id
    const friend_user_profile = state.profile
    const loading = state.getProfileLoading


    
    return (
        <>  {loading?'loading...':
            <div className={Classes.container}>
                <img className={Classes.bgImg} />
                <div className={Classes.header}>
                    <Navbar profile_image={state.profile.profile_image} username={state.profile.firstname+' '+state.profile.lastname} />
                </div>

                <div className={Classes.section}>
                    <div className={Classes.main}>
                        <DisplayProfile userProfileId={current_user_profile_id} friendProfile={friend_user_profile} />
                    </div>
                    <div className={Classes.sidebar}>
                        
                    </div>
                </div>
            </div>}
        </>
    )
}

export default UserProfile;