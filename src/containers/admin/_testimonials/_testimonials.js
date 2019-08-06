import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Component Import

import FileUpload from '../../../components/fileUpload/fileUpload'

// File Imports
import styles from './_testimonials.module.css'

class EditTestimonials extends Component {
  constructor(props){
    super(props)
    this.state= {
      photos: []
    }
  }
  render() {
    return (
      <div className={`${styles.container}`}>
        <div className={`${styles.aPanel}`}>
        <FileUpload />

        </div>
      </div>
    );
  }
}

export default EditTestimonials;
