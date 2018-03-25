import React from 'react';
import data from '../data.js';


function PostListItem(props) {
    console.log(props.index);
    const {userId, id, title, body} = data[props.index];
    return(
        <li>
            <p>UserID: {userId} || ID of Post: {id}</p>
            <p>Title: {title}</p>
            <p>Post: <br/>{body}</p>
        </li>
    );
}

export default PostListItem;