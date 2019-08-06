import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// File Imports
import logo from '../../assets/imgs/christian_portrait.jpg';
import goodShed from '../../assets/imgs/DSCF2552.jpg';
import randompic from '../../assets/imgs/DSCF2560.jpg'
import styles from './admin.module.css'

// Component Imports
import EditTestimonials from './_testimonials/_testimonials'

class Admin extends Component {
  constructor(props){
    super(props)
    this.state= {
      photos: [logo, goodShed, randompic]
    }
  }
  render() {
    return (
      <div className={`${styles.container}`}>
        <div className={`${styles.aPanel}`}>
          <div className={`${styles.options}`}>
            <h1>Edit Testimonials</h1>
          </div>
          <div className={`${styles.options}`}>
            <h1>Upload Artwork</h1>
          </div>
          <div className={`${styles.options}`}>
            <h1>Edit Gear List</h1>
          </div>
          <div className={`${styles.options}`}>
            <h1>Edit "About"</h1>
          </div>
          <div className={`${styles.options}`}>
            <h1>Logout</h1>
          </div>
        </div>
        <EditTestimonials />
      </div>
    );
  }
}

export default Admin;
