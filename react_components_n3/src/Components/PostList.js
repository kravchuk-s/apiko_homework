import React from 'react';
import PostListItem from './PostListItem';

function PostList(props){
    return(
        <ul>{props.postsArr.map((post, i) => <PostListItem key={i} postToShow={post} />)}</ul>
    );
}

export default PostList;