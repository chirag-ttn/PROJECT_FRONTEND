import './CreatePost.css'
import Img from '../CircleImg/CircleImg'
import { onTextChangeHandler, onFileChangeHandler } from '../../redux/actions/Posts'
import { useDispatch } from 'react-redux'
import {createPost} from '../../redux/actions/Posts'
import axios from 'axios'
import { useState } from 'react'

export default function CreatePosts(props) {
    let formData = new FormData()
    const dispatch = useDispatch()
    const handleTextChange = (event) => {
    }
    const handleFileChange = (event) => {
        formData.append('image', event.target.files[0])
    }
    const handleSubmit = (event) => {
        formData.append('text', document.getElementById('text').value)
        formData.append('profile_id',props.profile_id)
        document.getElementById('text').value=""
        document.getElementById('file').value=""
        createPost(formData)(dispatch)
    }


    return (
        <>
            <div class="main">

                <Img src={props.picture} />
                <form class="main">
                    <input class='addpost' id='text' name='text' type='text' onChange={handleTextChange} placeholder="What's on your mind, Chirag ?" />
                    <div class='file'>
                        <input id='file' name='image' type='file' onChange={handleFileChange} hidden />
                        <label for='file' ><i style={{ 'color': 'green' }} class="fas fa-images"></i> Photos</label>
                    </div>
                    <button type='submit' onClick={(event) => {
                        event.preventDefault()
                        handleSubmit(event)
                    }
                    }><i class="fas fa-plus-square"></i></button>
                </form>

            </div>
        </>

    )
}