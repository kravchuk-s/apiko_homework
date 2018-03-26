import React from 'react';
import PostListItem from './PostListItem';
import MoreButton from './MoreButton';

function PostList(props){
    let postIndex = 0;
    let posts = [];
    if (typeof props.index !== 'undefined'){
        postIndex += props.index;
    }
    for (let i = 0; i < postIndex; i++) {
        posts.push(<PostListItem index={i}/>);
    }
    return(
        <ul>{posts}</ul>

    );
}

export default PostList;