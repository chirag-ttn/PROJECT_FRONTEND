import React from 'react'
import Suggestion from './suggestion/suggestion'
import axios from 'axios'
import { useSelector } from 'react-redux'

import './suggestions.css'

export default function Suggestions(props) {


    return (
        <div class='section-suggestion'>
            <div class='suggestion-container'>
                <div className="row d-flex justify-content-around">
                    <p>{props.heading}</p>
                </div>
                {props.status!==2?
                <div class="row">
                    <div class='col-md-9'>
                        <input type='text' placeholder='Search' />
                    </div>
                    <div class='col-md-1'>
                        <i class='fas fa-search'></i>
                    </div>
                </div>:null}
                {props.suggestions.map(val => {

                    return <Suggestion
                        key={val._id}
                        current_userProfile_id={props.id}
                        email={val.email}
                        f_name={val.firstname}
                        l_name={val.lastname}
                        profile_pic={val.profile_image}
                        other_profile_id={val._id}
                        status={props.status}
                        pageNumber={props.pageNumber}
                        postCount={props.postCount}
                    />
                })}
   
                {/* <Suggestion src={profile_pic}/> */}

            </div>
        </div>
    )
}