import React from 'react'
import { useSelector } from 'react-redux'
import './userCard.css'
import Loading from '../../components/Loading/Loading'
function UserCard() {
    const props = useSelector(state=>state.profileReducer)
    return (
        <>
            
            <div class="col-md-12">

                <div class="profile-card-4 text-center">
                    <img src={props.profile.profile_image} class="img img-responsive" />
                    <div class="profile-content">
                        <div class="profile-name">{props.profile.firstname + ' ' + props.profile.lastname}
                        </div>
                        <div class="profile-description">
                            {props.profile.designation}
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="profile-overview">
                                    <p>FRIENDS</p>
                                    {props.profile.friends == undefined ? <Loading /> :
                                        <h4>{props.profile.friends.length}</h4>}
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="profile-overview">
                                    <p>POSTS</p>
                                    {props.profile.posts == undefined ? <Loading /> :
                                        <h4>{props.profile.posts.length}</h4>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserCard;