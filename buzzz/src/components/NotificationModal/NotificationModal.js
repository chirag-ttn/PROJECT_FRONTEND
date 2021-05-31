import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './Notification.css'
import { useState, useEffect } from 'react'
import Suggestions from '../Suggestions/suggestions'


export default (props) => {
    const [smShow, setSmShow] = useState(false);
    console.log(props)
    // const state= useSelector(state => state.profileReducer)
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
                    <p>{!props.getProfileLoading?props.profile.requests.length:0}</p>
                </div>
                
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Notifications
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Suggestions heading={'requests'} suggestions={props.profile.requests} id={props.profile._id} status={2} />

                </Modal.Body>
            </Modal>
        </>
    );
}
