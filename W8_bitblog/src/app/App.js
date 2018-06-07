import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import HomePage from './home/HomePage';
import {Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
       <Switch>
         <Route path="/" component={HomePage}/>
       </Switch>
        <Footer />
        
      </div>
    );
  }
}

export default App;
