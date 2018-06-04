import React, { Component } from 'react';

const UserList = (props) => {
    return (
        <div>
            {props.users.map((user, i) => {
                return (
                    <div className="user">
                        <div className="pic">
                            <img src={user.picture.thumbnail} className="pic" />
                        </div>
                        <div className="data">
                            <p key={i}> name: {user.name.first}</p>
                            <p> email: {user.email}</p>
                            <p> date of birth: {user.dob.slice(0, 10)}</p>
                        </div>

                    </div>
                )
            }
            )}
        </div>
    );
}

export default UserList;
