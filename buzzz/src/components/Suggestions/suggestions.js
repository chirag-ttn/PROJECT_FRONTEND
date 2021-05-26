import React from 'react'
import Suggestion from './suggestion/suggestion'
import { useSelector } from 'react-redux'

import './suggestions.css'

export default function Suggestions(props) {
    
    
    return (
        <div class='section-suggestion'>
            <div class='container-fluid'>
                <div className="row d-flex justify-content-center">
                    <p>{props.heading}</p>
                
                </div>
                <div class="row">
                    <div class='col-md-9'>
                        <input type='text' placeholder='Search' />
                    </div>
                    <div class='col-md-1'>
                        <i class='fas fa-search'></i>
                    </div>
                </div>
                    {props.suggestions.map(val => {
                        
                        return <Suggestion
                            key={val._id}
                            current_userProfile_id={props.id}
                            email={val.email}
                            f_name={val.firstname}
                            l_name={val.lastname}
                            profile_pic={val.profile_pic}
                            other_profile_id = {val._id}
                            status ={props.status}
                        />
                    })}
                {/* <Suggestion src={profile_pic}/> */}

            </div>
        </div>
    )
}