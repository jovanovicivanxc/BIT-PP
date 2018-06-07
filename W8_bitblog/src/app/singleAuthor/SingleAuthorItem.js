import React from 'react';

const SingleAuthorItem = (props) => {
    return (
        <div>
          <h1> {props.author.name}</h1>
        <p> {props.author.username}</p>
        <p> {props.author.city}</p>
        
        </div>
)
}

export default SingleAuthorItem;