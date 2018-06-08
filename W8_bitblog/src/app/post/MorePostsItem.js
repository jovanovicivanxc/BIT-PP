import React from 'react';
import { Link } from 'react-router-dom';

const MorePostsItem = (props) => {
    return (
        <div className="post">
            
            <p><Link to={`/PostPage/${props.id}`}> {props.title} </Link></p>

        </div>

    )
}

export default MorePostsItem;