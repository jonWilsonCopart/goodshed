import React, { Component } from 'react';
// File Imports
import logo from '../../assets/imgs/christian_portrait.jpg';
import goodShed from '../../assets/imgs/DSCF2552.jpg';
import randompic from '../../assets/imgs/DSCF2560.jpg'

import styles from './artwork.module.css'

class ArtWork extends Component {
  constructor(props){
    super(props)
    this.state= {
      photos: [logo, goodShed, randompic]
    }
  }
  render() {
    return (
      <div className={`${styles.container}`}>
        <div className={`${styles.slideShow}`}>
            <h1>Artwork</h1>
            <div className={`${styles.photoRail}`}>
              {this.state.photos.map(photo => {
                return <div><img src={photo} className={styles.slideItem}/></div>
              })}
            </div>
        </div>
      </div>
    );
  }
}

export default ArtWork;
