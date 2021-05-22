import Navbar from '../../components/Navbar/Navbar'
import './CreateProfile.css'
import Createprofile from '../../components/createProfile/createProfile'
import Suggestion from '../../components/Suggestions/suggestions'

function CreateProfile() {
    
    return (
        <>
            <div className="container-fluid p-0">
                <img className="bg-img"/>
                <div className="row p-0 m-0">
                    <Navbar/>
                </div>
                    <div className="row p-0 m-0 d-flex justify-content-around">
                        
                        <div id="CreateProfile"className="col-md-9">
                            <Createprofile />
                        </div>
                        <div id="Suggestions"className="col-md-2">
                            <Suggestion />
                        </div>
                    </div>
            </div>
        </>
    )
}

export default CreateProfile;  