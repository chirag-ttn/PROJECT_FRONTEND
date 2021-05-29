import Classes from './displayProfile.module.css'
const DisplayProfile = (props) => {
    return (
        <>
            <div className={Classes.mainBox}>

                {/* <button className={[Classes.inputBtn, Classes.upload].join()} id='input_btn'><i clas    s="fa fa-camera cam"></i></button> */}
                <img className={Classes.cover} id="blah" src={props.profile.cover_image} />
                <div>
                    <img class={Classes.dp} src={props.profile.profile_image} />
                </div>
                {/* <button className={[Classes.penBtn, Classes.upload].join()}><i class="fa fa-pencil pen"></i></button> */}


                <div className={Classes.box}>
                    <div className={Classes.mainContent}>
                        <h3 className={Classes.name}>{props.profile.firstname +' '+ props.profile.lastname}</h3>
                        <h5 className={Classes.designation}>{props.profile.designation}</h5>
                        <div className={Classes.content}>
                            <h5 className={Classes.addr}>{props.profile.city+', '+props.profile.state}</h5>
                        </div>
                        <ul className={Classes.content}>
                            <li><span>{props.profile.friends.length} Friends</span></li>
                            <li><span></span></li>
                        </ul>
                        <div className={Classes.btnContainer}>
                        <button className={Classes.but}><i class="fa fa-user-plus"></i>
                            <p>Add friend</p>
                        </button>

                        <button className={Classes.but}><i class="fas fa-external-link-square-alt"></i>
                            <p>visit Website</p>
                        </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default DisplayProfile;