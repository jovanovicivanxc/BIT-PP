import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import List from './List';
import Loading from './Loading';

class UserList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* <Loading/> */}
                <br />
                {this.props.usersLoaded ? <Loading/> : (
                     this.props.users
                    .filter(user => user.name.first.includes(this.props.searchText) || user.name.last.includes(this.props.searchText))
                    .map((user, i) => {
                        return ((this.props.selected) ? <List user={user} key={i} /> : <Card user={user} key={i} />) 
                }))}
            </div>
        );
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserList;