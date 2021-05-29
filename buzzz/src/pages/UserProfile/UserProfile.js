import Navbar from '../../components/Navbar/Navbar'
import displayProfile from '../../components/displayProfile/displayProfile'
import Suggestions from '../../components/Suggestions/suggestions'
import Loading from '../../components/Loading/Loading'
import Classes from './UserProfile.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import DisplayProfile from '../../components/displayProfile/displayProfile'
import { getUserProfile } from '../../redux/actions/Profile'
import { useParams } from 'react-router'
function UserProfile(props) {
    const {id} = useParams()
    
    const dispatch = useDispatch()
    useEffect(() => {
        getUserProfile(dispatch)(id)
    }, [])

    const state = useSelector(state => state.profileReducer)
    const current_user_profile = state.profile
    const suggestions = current_user_profile.suggestions
    const friends = current_user_profile.friends
    const loading = state.getProfileLoading


    console.log(state)
    let Sidebar =
        (<>
            <div className="row">
                <Suggestions heading={"Suggestions"}
                    suggestions={suggestions}
                    id={current_user_profile._id}
                />
            </div>
            <div className="row">
                <Suggestions heading={"Friends"}
                    suggestions={friends}
                    id={current_user_profile._id}
                />
            </div>
        </>)
    
    return (
        <>  {loading?'loading...':
            <div className={Classes.container}>
                <img className={Classes.bgImg} />
                <div className={Classes.header}>
                    <Navbar />
                </div>

                <div className={Classes.section}>
                    <div className={Classes.main}>
                        <DisplayProfile profile={current_user_profile} />
                    </div>
                    <div className={Classes.sidebar}>
                        
                    </div>
                </div>
            </div>}
        </>
    )
}

export default UserProfile;