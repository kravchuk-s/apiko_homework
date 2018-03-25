import React from 'react';
import PostListItem from './PostListItem';

function PostList(props){
    let rows = [];
    for (let i = 0; i < 10; i++) {
        rows.push(<PostListItem index={i}/>);
    }
    return(

        <ul>{rows}</ul>

    );

}

export default PostList;