import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Component Imports
import Logo from '../../components/logo/logo.js';

// File Imports
import soundwaveIcon from "../../assets/imgs/soundwave_inv.png"
import styles from './header.module.css'


class Navbar extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className={styles.header} style={this.props.style}>
        <div className={styles.marginTop30}>
          <div style={{alignItems: "center", flex: 1, justifyContent: "center", display: "flex"}}>
          <p className={styles.headerTitle}>Good<span className={styles.redText}>Shed</span><span className={`${styles['fontXSm']}`}>Studio.com</span></p>
          </div>
            {/*<Logo imageStyle={logoStyle}/>*/}
          <div style={{justifyContent: "center", alignItems: "center", display: "flex"}}>
            <img src={soundwaveIcon} alt={"soundwave"} className={styles.soundbars} />
          </div>
          <div style={{justifyContent: "center", alignItems: "center", textAlign: "center", display: "flex"}}>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li>Gear</li>
            <li>Testimonials</li>
            <li>Media</li>
            <li>Contact</li>
          </ul>
          </div>
      </div>
      </div>
    );
  }
}

export default Navbar;