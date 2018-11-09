import React, { Component } from 'react';
// File Imports
import TopContent from '../topContent/topContent.js'
import MiddleContent from '../middleContent/middleContent.js';
import LowerContent from '../lowerContent/lowerContent.js';
import Header from '../header/header.js'
import styles from './home.module.css'

class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.homeBG}>
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
