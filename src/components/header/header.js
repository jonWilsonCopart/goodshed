import React, { Component } from 'react';
// File Imports

import './header.css'


class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
        <p id="header-title">GoodShed</p>
          <div className="navBar">
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