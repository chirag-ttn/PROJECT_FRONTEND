import React from 'react'
import Suggestion from './suggestion/suggestion'
import {useSelector} from 'react-redux'

import './suggestions.css'

export default function Suggestions() {
    const {profile_pic} = useSelector(state=>state.authReducer)
    return (
        <div className='section-suggestion'>
            <div className='container-fluid'>
                <div className="row">
                    <div className='col-md-9'>
                        <input type='text' placeholder='Search' />
                    </div>
                    <div className='col-md-1'>
                        <i className='fas fa-search'></i>
                    </div>
                </div>
                <Suggestion src={profile_pic}/>
                <Suggestion src={profile_pic}/>

                <Suggestion src={profile_pic}/>
                <Suggestion src={profile_pic}/>
                <Suggestion src={profile_pic}/>

                <Suggestion src={profile_pic}/>
                <Suggestion src={profile_pic}/>

                <Suggestion src={profile_pic}/>
                <Suggestion src={profile_pic}/>
                <Suggestion src={profile_pic}/>
 
            </div>
        </div>
    )
}