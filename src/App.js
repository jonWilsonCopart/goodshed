import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Component Imports
import Home from './containers/home/home';
import AboutUs from './containers/aboutUs/aboutUs';
import Header from './containers/header/header';
import ArtWork from './containers/artWork/artWork';
import Admin from './containers/admin/admin';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={AboutUs} />
        <Route path='/good_art' exact component={ArtWork} />
        <Route path='/admin' exact component={Admin} />

      </div>
    );
  }
}

export default App;
