import React from 'react';
import PostListItem from './PostListItem';
import NoItem from './NoItem';
import Loading from './Loading';

function PostList(props){
    if (props.isLoading) {
        return <Loading/>
    } else if(props.postsArr.length === 0){
        return <NoItem/>
    } else {
        return (
            <ul>{props.postsArr.map((post, i) => <PostListItem key={i} postToShow={post}/>)}</ul>
        );
    }
}

export default PostList;