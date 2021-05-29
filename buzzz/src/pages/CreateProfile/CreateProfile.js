import Navbar from '../../components/Navbar/Navbar'
import './CreateProfile.css'
import Createprofile from '../../components/createProfile/createProfile'
import Suggestions from '../../components/Suggestions/suggestions'
import Loading from '../../components/Loading/Loading'
import {useSelector} from 'react-redux'
import {useEffect} from 'react'
function CreateProfile() {

    const state = useSelector(state => state.profileReducer)
    
    const current_user_profile = state.profile

    const suggestions = current_user_profile.suggestions
    const friends = current_user_profile.friends
    let loading = state.getProfileLoading;
    // useEffect(() => {
    // }, [profile])

    console.log("CREATE",loading)
    let Sidebar =
        (<>
            <div className="row">
                <Suggestions heading={"Suggestions"} suggestions={suggestions} id={current_user_profile._id} />
            </div>
            <div className="row">
                <Suggestions heading={"Friends"} suggestions={friends} id={current_user_profile._id} />
            </div>
            </>)
    return (
        <>
            <div class="container-fluid p-0">
                <img class="bg-img" />
                <div class="row d-block mb-2">
                    <Navbar profile_image={current_user_profile.profile_image} username={current_user_profile.firstname+' '+current_user_profile.lastname}/>
                </div>
                <div class="row p-0 m-0 d-flex justify-content-around">

                    <div id="CreateProfile" class="col-md-8">
                        <Createprofile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateProfile;