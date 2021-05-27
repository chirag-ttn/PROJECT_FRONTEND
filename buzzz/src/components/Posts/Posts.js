import axios from 'axios'
import { useEffect, useState } from 'react'
import './Posts.css'
export default function Posts(props) {
    useEffect(()=>{
        setlike(props.islike)
        setdislike(props.isdislike)
    },[props.islike,props.isdislike])
    // console.log('posts===>', props.val)
    const profile_id = props.val.author_id._id
    const post_id = props.val._id
    const [like,setlike] = useState(false)
    const [dislike,setdislike] = useState(false)
    const likeHandler = () => {
        setlike(true)
        setdislike(false)
        axios.post('http://localhost:4444/posts/likePost',{
            user_profile_id:profile_id,
            post_id:post_id
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    const unlikeHandler = () => {
        setlike(false)
        axios.post('http://localhost:4444/posts/unlikePost',{
            user_profile_id:profile_id,
            post_id:post_id
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        
    }
    const dislikeHandler = () => {
        setdislike(true)
        setlike(false)
        axios.post('http://localhost:4444/posts/dislikePost',{
            user_profile_id:profile_id,
            post_id:post_id
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    const undislikeHandler = () => {
        setdislike(false)
        axios.post('http://localhost:4444/posts/undislikePost',{
            user_profile_id:profile_id,
            post_id:post_id
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    const commentHandler = () => {

    }
    return (
        <>

            <div class="card post-container">
                <div class='d-flex flex-column col-md-11'>
                    <div class="d-flex justify-content-between p-2 px-3">
                        <div class="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/UXdKE3o.jpg" width="50" class="rounded-circle" />
                            <div class="d-flex flex-column ml-2"> <span class="font-weight-bold">{props.val.author_id.firstname + ' ' + props.val.author_id.lastname}</span> <small class="text-primary">Collegues</small>
                            </div>
                        </div>
                        <div class="d-flex flex-row mt-1 ellipsis"> <small class="mr-2">{props.val.date}</small> <i class="fa fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <img src={props.val.imageUrl} />

                    <div class="p-2">
                        <p class="text-justify">{props.val.description}</p>
                        <hr />
                        <div class="container-fluid">
                            <div class="row">
                            <div class='btn-container'>
                                    {console.log(like)}
                                    {like
                                    ?<button className="clickedBtns" type="button" onClick={unlikeHandler} ><span><i class="fas fa-thumbs-up"></i></span></button>
                                    :<button className="styledBtns" type="button" onClick={likeHandler} ><span><i class="far fa-thumbs-up"></i></span></button>
                                    }
                                    {dislike
                                    ?<button className="clickedBtns" type="button" onClick={undislikeHandler} ><span><i class="fas fa-thumbs-down"></i></span></button>
                                    :<button className="styledBtns" type="button" onClick={dislikeHandler} ><span><i class="far fa-thumbs-down"></i></span></button>
                                    }
                            </div>
                            </div>
                            <hr />

                            <div class="comments">
                                <div class="d-flex flex-row mb-2"> <img src="https://i.imgur.com/9AZ2QX1.jpg" width="40" class="rounded-image" />
                                    <div class="d-flex flex-column ml-2"> <span class="name">Daniel Frozer</span> <small class="comment-text">I like this alot! thanks alot</small>
                                        <div class="d-flex flex-row align-items-center status"> <small>Like</small> <small>Reply</small> <small>Translate</small> <small>18 mins</small> \
                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-row mb-2"> <img src="https://i.imgur.com/1YrCKa1.jpg" width="40" class="rounded-image" />
                                    <div class="d-flex flex-column ml-2"> <span class="name">Elizabeth goodmen</span> <small class="comment-text">Thanks for sharing!</small>
                                        <div class="d-flex flex-row align-items-center status"> <small>Like</small> <small>Reply</small> <small>Translate</small> <small>8 mins</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="comment-input"> <input type="text" class="form-control" />
                                    <div class="fonts"> <i class="fa fa-camera"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
        </>
    )
}