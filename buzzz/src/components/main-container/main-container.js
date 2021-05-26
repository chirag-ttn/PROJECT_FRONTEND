import React from 'react';

function mainContainer(props){
    return(
        <div class="main-container">
            {props.child}
        </div>
    )
}
export default mainContainer;