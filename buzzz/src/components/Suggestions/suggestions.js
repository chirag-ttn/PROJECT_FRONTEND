import React from 'react'
import Suggestion from './suggestion/suggestion'
import axios from 'axios'
import { useSelector } from 'react-redux'

import './suggestions.css'

export default function Suggestions(props) {

    const updateSuggestions = () => {
        
        axios.get('http://localhost:4444/users/updateSuggestions', { params: { user_id: props.id } })
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }

    return (
        <div class='section-suggestion'>
            <div class='container-fluid'>
                <div className="row d-flex justify-content-around">
                    <p>{props.heading}</p>
                    {props.status == 0 ?
                        <button onClick={updateSuggestions}>
                            <i class="fas fa-spinner"></i>
                        </button>
                        : null}
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
                        other_profile_id={val._id}
                        status={props.status}
                    />
                })}
                {/* <Suggestion src={profile_pic}/> */}

            </div>
        </div>
    )
}