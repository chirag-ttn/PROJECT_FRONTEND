import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './Notification.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Suggestions from '../Suggestions/suggestions'
import { getProfile } from '../../redux/actions/Profile'


export default () => {
    const dispatch = useDispatch()
    useEffect(() => {
        getProfile(dispatch)
    },[getProfile])
    const [smShow, setSmShow] = useState(false);
    
    const state= useSelector(state => state.profileReducer)
    let {profile,getProfileLoading} = state
    console.log(state,profile)
    return (
        <>
            <Button className="notificationButton" onClick={() => setSmShow(true)}>
                
                <i class="far fa-bell"></i>
            </Button>{' '}
            <Modal
                show={smShow}
                dialogClassName='notificationContainer'
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <div className="notificationCount">
                    <p>{!getProfileLoading?profile.requests.length:0}</p>
                </div>
                
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Notifications
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Suggestions heading={'requests'} suggestions={profile.requests} id={profile._id} status={2} />

                </Modal.Body>
            </Modal>
        </>
    );
}
