import React from 'react';
import MorePostsItem from './MorePostsItem';

const MorePostsList = ( props ) => {
    return (
    <div>
        {props.morePosts.map((post) => <MorePostsItem {...post}/>)}
    </div>        
    );
}

export default MorePostsList;