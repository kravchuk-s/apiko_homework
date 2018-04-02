import React from 'react';

class PostListItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {isCrashed: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isCrashed: true
        })
    }

    shouldComponentUpdate(nextProps) {
        return (
            this.props.postToShow.title !== nextProps.postToShow.title
        );
    }

    render(){
        const {userId, id, title, body} = this.props.postToShow;

        if(this.state.isCrashed){
            throw new Error('I crashed!')
        }

        return(
            <li>
                <p onClick={this.handleClick}>UserID: {userId} || ID of Post: {id}</p>
                <p>Title: {title}</p>
                <p>Post: <br/>{body}</p>
            </li>
        );
}

}

export default PostListItem;