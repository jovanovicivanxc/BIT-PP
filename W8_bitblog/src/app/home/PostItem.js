import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = (props) => {
    return (
        <div className="post">
            <br />
            <h3><Link to={`/PostPage/${props.id}`}> {props.title} </Link></h3>
            <p> {props.body.slice(0, 50)}... </p>
            <hr />
        </div>

    )
}

export default PostItem;