import React from 'react'
import { useSelector } from 'react-redux'
import './userCard.css'
function UserCard(props) {
    return (
        <>
            <div class="col-md-12">

                <div class="profile-card-4 text-center">
                    <img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg" class="img img-responsive" />
                    <div class="profile-content">
                        <div class="profile-name">John Doe
                        </div>
                        <div class="profile-description">
                            Coder
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="profile-overview">
                                    <p>FRIENDS</p>
                                    <h4>250</h4>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="profile-overview">
                                    <p>POSTS</p>
                                    <h4>1300</h4>
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