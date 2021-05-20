import Navbar from '../../components/Navbar/Navbar'
import './CreateProfile.css'
import Createprofile from '../../components/createProfile/createProfile'
import Suggestion from '../../components/Suggestions/suggestions'
import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getUser} from '../../actions/auth'
function CreateProfile() {
    const dispatch = useDispatch()
    const {f_name,l_name,profile_pic} = useSelector(state=>state.authReducer)
    useEffect(()=>{
        getUser(dispatch)()
    },[getUser])
    
    return (
        <>
            <div className="container-fluid p-0">
                <img class="bg-img"/>
                <div class="row p-0 m-0">
                    <Navbar name={f_name+ ' ' +l_name} picture ={profile_pic}/>
                </div>
                    <div class="row p-0 m-0 d-flex justify-content-around">
                        
                        <div id="CreateProfile"class="col-md-9">
                            <Createprofile name={f_name+ ' ' +l_name} picture ={profile_pic}/>
                        </div>
                        <div id="Suggestions"class="col-md-2">
                            <Suggestion />
                        </div>
                    </div>
            </div>
        </>
    )
}

export default CreateProfile;  