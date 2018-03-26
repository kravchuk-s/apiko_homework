import React from 'react';


class MoreButton extends React.Component {

    render() {
        return <button id="moreBtn" className="moreButton" onClick = {this.props.handler}>More</button>
    }
}

export default MoreButton;