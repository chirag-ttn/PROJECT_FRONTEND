import './CreatePost.css'
import Img from '../CircleImg/CircleImg'
export default function CreatePosts(props) {
    return (
        <>
            <div className="main">
                <Img src={props.picture} />

                <input className='addpost' type='text' placeholder="What's on your mind, Chirag ?" />
                <div className='file'>
                    <input id='file' type='file' hidden />
                    
                    <label for='file' ><i style={{'color':'green'}}class="fas fa-images"></i> Photos</label>
                </div>
            </div>
        </>
    )
}