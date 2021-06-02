import Navbar from '../../components/Navbar/Navbar'
import Classes from './UserProfile.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import DisplayProfile from '../../components/displayProfile/displayProfile'
import { getUserProfile,getProfile } from '../../redux/actions/Profile'
import { useParams } from 'react-router'
import Loading from '../../components/Loading/Loading'
function UserProfile(props) {
    const {id} = useParams()
    
    const dispatch = useDispatch()
    useEffect(() => {
        getUserProfile(dispatch)(id)
    }, [])

    const state = useSelector(state => state.profileReducer)
    const current_user_profile = useSelector(state=>state.authReducer)
    const current_user_profile_id = current_user_profile.profile_id
    const friend_user_profile = state.anyUserProfile
    const loading = state.getProfileLoading

    
    return (
        <>  {loading?<Loading />:
            <div className={Classes.container}>
                <img className={Classes.bgImg} />
                <div className={Classes.header}>
                    <Navbar profile_image={current_user_profile.profile_pic} username={current_user_profile.f_name+' '+current_user_profile.l_name} />
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