import React from 'react';
import PostItem from './PostItem';

const PostsList = ( props ) => {
    return (
    <div>
        {props.posts.map((post) => <PostItem {...post}/>)}
    </div>        
    );
}

export default PostsList;