import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import usersData from './data/users';
import UserList from './UserList';
import Tools from './Tools';



const App = () => {
  return (
    <div className="App">
      <h1 className="App-title">React Users</h1>
      <UserList users={usersData} />    
      <div className="Footer">2018 Copyright BIT</div>

    </div>
  );
}


export default App;

