import React from 'react';




class MoreButton extends React.Component {

    countPost = 0;



    render() {
        return <button className="moreButton" onClick = {this.props.handler}>More</button>
    }
}

export default MoreButton;