import Navbar from '../../components/Navbar/Navbar'
import './CreateProfile.css'
import Createprofile from '../../components/createProfile/createProfile'
import Suggestion from '../../components/Suggestions/suggestions'


function CreateProfile() {
    
    return (
        <>
            <div className="container-fluid p-0 ">
                <img class="bg-img"/>
                <div class="row p-0 m-0">
                    <Navbar />
                </div>
                <div class="row p-0 m-0 d-flex justify-content-around">
                    
                    <div id="CreateProfile"class="col-md-9">
                        <Createprofile />
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