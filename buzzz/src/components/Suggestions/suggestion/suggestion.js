import Img from '../../CircleImg/CircleImg'
import './suggestion.css'
export default function suggestion(props) {
    return (
            <div id='suggestion-content'className='row d-flex align-items-center justify-content-between'>
                <div className='col-md-7'>
                    Chirag Gandhi
            </div>
                <div className='col-md-4'>
                    <img src={props.src} style={{ 'width': '50%', 'border-radius': '50%' }} />
                </div>
            </div>
        
    )
}