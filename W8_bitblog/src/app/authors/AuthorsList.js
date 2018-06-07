import React from 'react';
import AuthorItem from './AuthorItem';

const AuthorsList = ( props ) => {
    return (
    <div>
         {props.authors.map((author) => <AuthorItem {...author}/>)}
    </div>        
    );
}

export default AuthorsList;