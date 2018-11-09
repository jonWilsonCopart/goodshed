import React, { Component } from 'react';
// File Imports

import styles from './header.module.css'


class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div>
        <p className={styles.headerTitle}>GoodShed</p>
          <div className={styles.navBar}>
          <ul>
            <li>Home</li>
            <li>Gear</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;