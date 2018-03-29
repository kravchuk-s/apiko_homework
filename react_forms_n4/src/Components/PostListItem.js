import React from 'react';

function PostListItem(props) {
    const {userId, id, title, body} = props.postToShow;
    return(
        <li>
            <p>UserID: {userId} || ID of Post: {id}</p>
            <p>Title: {title}</p>
            <p>Post: <br/>{body}</p>
        </li>
    );
}

export default PostListItem;