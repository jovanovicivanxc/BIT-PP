import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import UserList from './UserList';
import Tools from './Tools';
import Header from './Header';
import SearchBox from './SearchBox';
import Counter from './Counter';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: true,
      users: [],
      searchText: "",
      usersLoaded: true,
    }
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.searcherOfText = this.searcherOfText.bind(this);

  }
  componentDidMount() {
    this.loadUsers();
  }

  loadUsers() {
    fetch("https://randomuser.me/api/?results=15").then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data.results,
          usersLoaded: false,
        })
      })
  }

  handleHeaderClick = () => {
    this.setState(prevState => ({
      selected: !prevState.selected
    }))
  }

  searcherOfText = (inputText) => {
    this.setState({
      searchText: inputText
    })
  }

  render() {
    return (
      <div className="App" >
        <Header handler={this.handleHeaderClick} refresher={this.loadUsers.bind(this)} selected={this.state.selected} />
        <SearchBox searcher={this.searcherOfText} />
        <Counter users={this.state.users} />
        <UserList users={this.state.users} selected={this.state.selected} searchText={this.state.searchText} />
        <div className="Footer">2018 Copyright BIT</div>
      </div>
    );
  }

}
export default App;

