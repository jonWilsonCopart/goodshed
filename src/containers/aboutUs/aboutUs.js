import React, { Component } from 'react';
// File Imports
import logo from '../../assets/imgs/christian_portrait.jpg';
import goodShed from '../../assets/imgs/goodshedLogo_v2.png';
import flourish from '../../assets/imgs/flourish1.png';

import styles from './aboutUs.module.css'

class AboutUs extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.customOuter}>
          <div className={styles.customInner}>
            <div className={styles["lower-middle-testimonial"]}>
              <h1>You spend time creating new songs and fine-tuning old ones. Eventually you try and record them. No matter the project or caliber of studio you're in, the goal is to give your best performance. Rehearsing helps... a lot. Feeling comfortable in the studio helps too.</h1>
              <img src={goodShed} style={{width: '14%', height: '64px', marginTop: '5%', marginBottom: '5%'}} />
              <h1>Our goal is to offer a creative environment that brings out your best performance; to help inspire you when it gets discouraging; to remind you that making music is fun, but most importantly, to bring a smile to your face when you hear the final product.</h1>
            </div>
            <div className={styles["lower-middle-portrait"]}>
              <img src={logo} alt={"profile"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
