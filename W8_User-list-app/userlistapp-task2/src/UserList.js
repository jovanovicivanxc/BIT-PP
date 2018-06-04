import React, { Component } from 'react';
import { dob, shorten } from './Tools';
import PropTypes from 'prop-types';
import Card from './Card';

class UserList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {props.users.map((user, i) => {
                    return <Card users={user} />
                })}
            </div>
        );
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserList;