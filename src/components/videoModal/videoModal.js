import React, { Component } from 'react';
// File Imports
import { Player } from 'video-react';
import close_icon from "../../assets/imgs/close_icon.png"

import styles from './videoModal.module.css'

class VideoModal extends Component {

  render() {
    const { closeModal, videos } = this.props;
    console.log(videos[0])
    return (
      <div style={{position: "fixed"}} className={styles.background}>
        <div className={styles.background} style={{position: "relative"}}>
            <div className={styles.container}>
              <div className={styles.playerContainer}>
                    <iframe width="560" height="315" src={videos[0].url} frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
              </div>
            </div>
        <div
          style={{position: "absolute", top: 30, right: 30, height: "50px", width: "50px", backgroundColor: "transparent"}}
          onClick={() => closeModal() }>
          <img src={close_icon} style={{width: "40%", height: "40%"}} alt={"cphoto"} />
        </div>
        </div>
        <div className={styles.queueContainer}>
          <div><span style={{color: "whitesmoke", }}><img src={videos[0].thumbnail[0]} />- Tool -</span></div>
          <div className={styles.tool}><span style={{color: "whitesmoke", }}>- Tool -</span></div>
          <div className={styles.tool}><span style={{color: "whitesmoke", }}>- Tool -</span></div>
          <div className={styles.tool}><span style={{color: "whitesmoke", }}>- Tool -</span></div>
          <div className={styles.tool}><span style={{color: "whitesmoke", }}>- Tool -</span></div>
          <div className={styles.tool}><span style={{color: "whitesmoke", }}>- Tool -</span></div>
          <div className={styles.tool}><span style={{color: "whitesmoke", }}>- Tool -</span></div>
          <div className={styles.tool}><span style={{color: "whitesmoke", }}>- Tool -</span></div>
          <div className={styles.tool}><span style={{color: "whitesmoke", }}>- Tool -</span></div>
          <div className={styles.tool}><span style={{color: "whitesmoke", }}>- Tool -</span></div>
        </div>
      </div>
    );
  }
}

export default VideoModal;
