import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import List from './List';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = { selected: true }
    }
    onClick = () => {
        this.setState({ selected: false }) //!prevState.selected
    }

    componentDidMount() {
        fetch("https://api.github.com/users").then((response) => response.json())
            .then((data) => {
                this.setState({
                    users: data
                })
                console.log(data);
            })
    }

    render() {
        return (
            <div>
                <input type="button" value="Switch view" onClick={this.onClick} />
                <br />
                {this.props.users.map((user, i) => {
                    return (this.state.selected) ? <Card user={user} key={i} /> : <List user={user} key={i} />
                })}
            </div>
        );
    }



}



UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserList;