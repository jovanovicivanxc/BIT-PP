import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import HomePage from './home/HomePage';
import PostPage from './post/PostPage';
import AuthorsPage from './authors/AuthorsPage';
import SingleAuthorPage from './singleAuthor/SingleAuthorPage';
import AboutPage from './about/AboutPage';
import {Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
       <Switch>
         <Route exact path="/" component={HomePage}/>
         <Route path="/PostPage" component={PostPage}/> 
         <Route path="/AuthorsPage" component={AuthorsPage}/> 
         <Route path="/SingleAuthorPage" component={SingleAuthorPage}/>  
         <Route path="/AboutPage" component={AboutPage}/>     
       </Switch>
        <Footer />
        
      </div>
    );
  }
}

export default App;
