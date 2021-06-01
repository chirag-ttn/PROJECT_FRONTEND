import './CreatePost.css'
import Img from '../CircleImg/CircleImg'
import { onTextChangeHandler, onFileChangeHandler } from '../../redux/actions/Posts'
import { useDispatch } from 'react-redux'
import { createPost } from '../../redux/actions/Posts'
import axios from 'axios'
import { useState,useRef } from 'react'

export default function CreatePosts(props) {
    // console.log(props)
    let formData = new FormData()
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const [file, setFile] = useState('')
    const [error, setError] = useState(false)
    const postInput = useRef('')
    const handleTextChange = (event) => {
        setText(event.target.value)
    }
    const handleFileChange = (event) => {
        setFile(event.target.files[0])
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("POST++++++++++++++++++++>",text,file,error)
        if (text === '' && file === '') {
            setError(true)
        }
        else {
            formData.append('text', text)
            formData.append('profile_id', props.profile_id)
            formData.append('image', file)
            postInput.current.value = ''
            createPost(formData)(dispatch)
            setText('')
            setFile('')
        }

    }


    return (
        <>
            <div class="main">
                <div className='row'>
                    <Img class="img" src={props.picture} />
                    <form >
                        <input class='addpost' ref={postInput} id='text' name='text' type='text' onChange={handleTextChange} placeholder="What's on your mind, Chirag ?" />
                        <div class='file'>
                            <input id='file'  name='img' type='file' onChange={handleFileChange} hidden />
                            <label for='file' ><i style={{ 'color': 'green' }} class="fas fa-images"></i> Photos</label>
                        </div>

                        <button class='addPost btn btn-primary' type='submit' onClick={handleSubmit}
                        >post</button>
                    </form>
                </div>
                <div class='row'>
                    {error ?
                        <span onClick={()=>{
                            setError(false)
                        }} className='text-danger'>You need to enter either field</span> :
                        null
                    }
                </div>
            </div>
        </>

    )
}