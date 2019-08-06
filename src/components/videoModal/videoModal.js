import React, { Component } from 'react';
// File Imports
import { Player } from 'video-react';
import close_icon from "../../assets/imgs/close_icon.png"

import styles from './videoModal.module.css'

class VideoModal extends Component {

  render() {
    const { closeModal } = this.props;
    return (
      <div style={{position: "fixed"}} className={styles.background}>
        <div className={styles.background} style={{position: "relative"}}>
            <div className={styles.container}>
              <div className={styles.playerContainer}>
                <div style={{height: "100%", width: "50vw"}}>
                  <Player playsInline>
                    <source src={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"} />
                  </Player>
                </div>
              </div>
            </div>
        <div
          style={{position: "absolute", top: 30, right: 30, height: "50px", width: "50px", backgroundColor: "transparent"}}
          onClick={() => closeModal() }>
          <img src={close_icon} style={{width: "40%", height: "40%"}} alt={"cphoto"} />
        </div>
        </div>
        <div className={styles.queueContainer}>
          <div className={styles.tool}><span style={{color: "whitesmoke", }}>- Tool -</span></div>
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
