import React, { Component } from 'react';

const List = ({ user }) => (
    <div className="user-list">
        <div className="pic">
            <img src={user.picture.thumbnail} className="pic" />
        </div>
        <div className="data">
            <p> name: {user.name.first}</p>
            <p> email: {user.email}</p>
            <p> date of birth: {user.dob.slice(0, 10)}</p>
        </div>

    </div>)

export default List;