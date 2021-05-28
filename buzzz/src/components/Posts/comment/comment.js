export default Comment = (props) => {
    return (
    <div class="d-flex flex-row mb-2"> <img width="40" class="rounded-image" />
        <div class="d-flex flex-column ml-2"> <span class="name">{props.val.profile_id.firstname+' '+props.val.profile_id.lastname}</span> <small class="comment-text">{props.val.comment}</small>
        </div>
    </div>)
}