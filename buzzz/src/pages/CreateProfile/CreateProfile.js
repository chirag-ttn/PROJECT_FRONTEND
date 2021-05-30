import Navbar from '../../components/Navbar/Navbar'
import './CreateProfile.css'
import Createprofile from '../../components/createProfile/createProfile'
import Suggestions from '../../components/Suggestions/suggestions'
import Loading from '../../components/Loading/Loading'
import {useSelector,useDispatch} from 'react-redux'
import {getProfile} from '../../redux/actions/Profile'
import {getUsers} from '../../redux/actions/users'
import {useEffect} from 'react'
function CreateProfile() {
    const dispatch = useDispatch()
    useEffect(()=>{
    getUsers(dispatch)
    getProfile(dispatch)()
    },[])
    const state = useSelector(state => state.profileReducer)
    const auth = useSelector(state=> state.authReducer)

    const logo = 'https://cultivatedculture.com/wp-content/uploads/2019/05/Chromatic-LinkedIn-Cover-Photo-Background.png'
    const profile_img_url = (state.profile!=''?state.profile.profile_image:auth.profile_pic)
    const username = (state.profile=='')?auth.f_name+' '+auth.l_name:state.profile.firstname+' '+state.profile.lastname;
    const cover_img_url = (state.profile.cover_image)

    const current_user_profile = state.profile
    

    // const suggestions = current_user_profile.suggestions
    // const friends = current_user_profile.friends
    let loading = state.getProfileLoading;

    // let Sidebar =
    //     (<>
    //         <div className="row">
    //             <Suggestions heading={"Suggestions"} suggestions={suggestions} id={current_user_profile._id} />
    //         </div>
    //         <div className="row">
    //             <Suggestions heading={"Friends"} suggestions={friends} id={current_user_profile._id} />
    //         </div>
    //         </>)
    return (
        <>
            <div class="container-fluid p-0">
                <img class="bg-img" />
                <div class="row d-block mb-2 mx-0">
                    <Navbar profile_image={profile_img_url} username={username}/>
                </div>
                <div class="row p-0 m-0 d-flex justify-content-around">

                    <div id="CreateProfile" class="col-md-8">
                        <Createprofile profile_image = {profile_img_url} cover_img = {cover_img_url} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateProfile;