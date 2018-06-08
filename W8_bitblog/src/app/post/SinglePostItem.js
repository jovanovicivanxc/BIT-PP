import React from 'react';
import { Link } from 'react-router-dom';


const SinglePostItem = (props) => {
  return (
    <div>
      <h1> {props.post.title}</h1>
      <h3> <Link to={`/SingleAuthorPage/${props.id}`}> {props.post.userId} </Link> </h3>
      <p> {props.post.body}</p>
    </div>
  )
}

export default SinglePostItem;