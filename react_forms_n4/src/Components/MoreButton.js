import React from 'react';

function MoreButton(props) {
    return(
        <button className="moreButton" onClick = {props.handler} hidden={props.hidden}>More</button>
    );
}

export default MoreButton;