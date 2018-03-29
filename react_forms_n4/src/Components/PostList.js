import React from 'react';
import PostListItem from './PostListItem';
import NoItem from './NoItem';

function PostList(props){
    if(props.postsArr.length === 0){
        return <NoItem/>
    } else {
        return (
            <ul>{props.postsArr.map((post, i) => <PostListItem key={i} postToShow={post}/>)}</ul>
        );
    }
}

export default PostList;