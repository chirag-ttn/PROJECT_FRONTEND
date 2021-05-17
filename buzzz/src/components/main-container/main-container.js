import React from 'react';

function mainContainer(props){
    return(
        <div className="main-container">
            {props.child}
        </div>
    )
}
export default mainContainer;