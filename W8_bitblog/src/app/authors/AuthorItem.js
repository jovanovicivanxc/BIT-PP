import React from 'react';
import { Link } from 'react-router-dom';

const AuthorItem = (props) => {
    return (
        <div className="authorItem">
            <h3><Link to={`/SingleAuthorPage/${props.id}`}> {props.name} </Link></h3>
            <p> </p>
            <hr />
        </div>

    )
}

export default AuthorItem;