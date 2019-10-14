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
            <h3>Edit Testimonials</h3>
          </div>
          <div className={`${styles.options}`}>
            <h3>Upload Artwork</h3>
          </div>
          <div className={`${styles.options}`}>
            <h3>Edit Gear List</h3>
          </div>
          <div className={`${styles.options}`}>
            <h3>Edit "About"</h3>
          </div>
          <div className={`${styles.options}`}>
            <h3>Logout</h3>
          </div>
        </div>
        <EditTestimonials />
      </div>
    );
  }
}

export default Admin;
