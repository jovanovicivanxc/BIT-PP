import React from 'react';

const SinglePostItem = (props) => {
    return (
        <div>
          <h1> {props.post.title}</h1>
        <p> {props.post.body}</p>
        </div>
)
}

export default SinglePostItem;