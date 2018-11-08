import React, { Component } from 'react';
// File Imports
import TopContent from '../topContent/topContent.js'
import MiddleContent from '../middleContent/middleContent.js';
import LowerContent from '../lowerContent/lowerContent.js';
import Header from '../header/header.js'
import './home.css'

class Home extends Component {
  render() {
    return (
      <div style={{width: '100%', position: 'relative'}}>
        <div className="home-bg">
            <Header />
            <TopContent/>
        </div>
        <MiddleContent/>
        <LowerContent/>
      </div>
    );
  }
}

export default Home;
