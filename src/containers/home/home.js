import React, { Component } from 'react';
// File Imports
import TopContent from '../topContent/topContent.js'
import MiddleContent from '../middleContent/middleContent.js';
import LowerContent from '../lowerContent/lowerContent.js';
import VideoModal from "../../components/videoModal/videoModal.js"
import Logo from '../../components/logo/logo.js'
import eqbars2 from "../../assets/imgs/eqbars2.png"
import fb from "../../assets/imgs/facebook_icon.png"
import ig from "../../assets/imgs/instagram_icon.png"
import email from "../../assets/imgs/email_icon.png"

import Navbar from '../header/header.js'

import toplogo from "../../assets/imgs/bg-1.png"
import styles from './home.module.css'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: false,
      scrollAllowed: true,
    }

    this.closeModal = this.closeModal.bind(this)
  }

  closeModal(){
    this.setState({ modalVisible: false, scrollAllowed: true })
  }
  render() {
    const { scrollAllowed } = this.state;
    console.log(scrollAllowed)
    let scrollStyle = scrollAllowed ? styles.scrollView : styles.noScrollView;
    return (
      <div className={styles.container}>
        <div style={{flex: 1}}>
          <Navbar/>
        </div>
        {/*<div style={{backgroundColor: "black", flex: 1}}></div>*/}
        <div className={scrollStyle}>
          {this.state.modalVisible ? <VideoModal closeModal={this.closeModal} /> : null}
          <div className={styles.mainContent} >
            <div style={{position: "absolute", top: 150, left: 525, right: 500}}>
              <Logo imageStyle={{width: 80}} />
            </div>
            <div style={{ justifyContent: "center"}}>
              <TopContent/>
            </div>
          </div>
          <div className={styles.divider1}></div>
          <div className={styles.mainContent2} >
            {/*<div className={styles.mc2Left}>*/}
              {/*<img src={cphoto} alt={"cphoto"} className={styles.cphoto} />*/}
            {/*</div>*/}
            <div style={{flex: 1, flexDirection: "row", alignItems: 'flex-start', justifyContent: "flex-start", display: "flex", padding: 30, }}>
              <div style={{flex: 0.5, padding: 30, backgroundColor: "rgba(1,1,1,0.5)", borderWidth: 1, borderColor: "#687eff", borderRadius: 5}}>
                <p style={{color: "white", fontSize: "1.2em", marginBottom: 20}}>"You spend time creating new songs and fine-tuning old ones. Eventually you try and record them. No matter the project or caliber of studio you're in, the goal is to give your best performance. Rehearsing helps... a lot.</p>
                <p style={{color: "white", fontSize: "1.2em", marginBottom: 20}}>Feeling comfortable in the studio helps too.</p>
                <p style={{color: "white", fontSize: "1.2em"}}>My goal is to offer a creative environment that brings out your best performance; to help inspire you when it gets discouraging; to remind you that making music is fun, but most importantly, to bring a smile to your face when you hear the final product."</p>
              </div>
            </div>
          </div>
          <div className={styles.divider1}></div>
          <div className={styles.mainContent3} >
            <div className={styles.fullWidth} style={{flex: 1, alignItems: 'center', justifyContent: "space-between", display: "flex", flexDirection: "row", backgroundColor: "rgba(1,1,1,0.5)"}}>
              <div style={{flex: 1, justifyContent: "center", alignItems: "flex-start", display: "flex"}}>
                <ul>
                  <li><h1 style={{color: "red"}}>Microphones</h1></li>
                  <li><p>AKG C414B</p></li>
                  <li><p>2x AKG C 1000 S</p></li>
                  <li><p>Audio Technica AT-3035</p></li>
                  <li><p>2x Audio Technica Pro 37</p></li>
                  <li><p>2x Audix D2</p></li>
                  <li><p>Audix D6</p></li>
                  <li><p>Audix i5</p></li>
                  <li><p>MXL 990</p></li>
                  <li><p>More...</p></li>
                </ul>
              </div>
              <div style={{flex: 1, justifyContent: "center", alignItems: "flex-start", display: "flex"}}>
                <ul>
                  <li><h1 style={{color: "red"}}>Instruments</h1></li>
                  <li><p>List Item 1</p></li>
                  <li><p>List Item 2</p></li>
                  <li><p>List Item 3</p></li>
                  <li><p>List Item 4</p></li>
                  <li><p>List Item 5</p></li>
                  <li><p>List Item 6</p></li>
                  <li><p>List Item 7</p></li>
                  <li><p>List Item 8</p></li>
                  <li><p>Etc...</p></li>
                </ul>
              </div>
              <div style={{flex: 1, justifyContent: "center", alignItems: "flex-start", display: "flex"}}>
                <ul>
                  <li><h1 style={{color: "red"}}>Recording Gear</h1></li>
                  <li><p>List Item 1</p></li>
                  <li><p>List Item 2</p></li>
                  <li><p>List Item 3</p></li>
                  <li><p>List Item 4</p></li>
                  <li><p>List Item 5</p></li>
                  <li><p>List Item 6</p></li>
                  <li><p>List Item 7</p></li>
                  <li><p>List Item 8</p></li>
                  <li><p>Etc...</p></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.divider1}></div>
          <div className={styles.mainContent4} >
            {/*<div className={styles.mc2Left}>*/}
            {/*<img src={cphoto} alt={"cphoto"} className={styles.cphoto} />*/}
            {/*</div>*/}
            <div style={{flex: 1, flexDirection: "row", alignItems: 'flex-start', justifyContent: "space-between", display: "flex", padding: 30, }}>
              <div style={{flex: 0.8, display: "flex", flexDirection: "column", display: "flex", marginRight: 20}}>
                <div style={{ display: "flex", flex: 0.5, marginBottom: 10, padding: 30, backgroundColor: "rgba(1,1,1,0.5)", borderWidth: 1, borderColor: "#687eff", borderRadius: 5}}>
                  <p style={{color: "white", fontSize: "1.2em"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."</p>
                </div>
                <div style={{flex: 1.3, display: "flex",marginBottom: 10, padding: 30, backgroundColor: "rgba(1,1,1,0.5)", borderWidth: 1, borderColor: "#687eff", borderRadius: 5}}>
                  <p style={{color: "white", fontSize: "1.2em"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."</p>
                </div>
              </div>
              <div style={{flex: 0.3,display: "flex", padding: 30, marginRight: 20, backgroundColor: "rgba(1,1,1,0.5)", borderWidth: 1, borderColor: "#687eff", borderRadius: 5, height: "100%"}}>
                <p style={{color: "white", fontSize: "1.2em"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
              </div>
              <div style={{flex: 0.5, display: "flex", flexDirection: "column"}}>
                <div style={{flex: 0.5,display: "flex", padding: 30, backgroundColor: "rgba(1,1,1,0.5)", borderWidth: 1, borderColor: "#687eff", borderRadius: 5}}>
                  <p style={{color: "white", fontSize: "1.2em"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."</p>
                </div>
                <div style={{flex: 0.5,display: "flex", padding: 30, marginTop: 20, backgroundColor: "rgba(1,1,1,0.5)", borderWidth: 1, borderColor: "#687eff", borderRadius: 5}}>
                  <p style={{color: "white", fontSize: "1.2em"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."</p>
                </div>
              </div>

            </div>
          </div>
          <div className={styles.divider1}></div>
          <div className={styles.mainContent6} >
              <div className={styles.fullDrkBG}>
                <div style={{flex: 1, display: "flex", justifyContent: "center", color: "white", flexDirection: "column"}}>
                  <div style={{flex: 0.15, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <h1>Media</h1>
                  </div>
                  <div style={{flex: 1, display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center"}}>
                    <div style={{backgroundColor: "transparent", display: "flex", flex: 1, height: "100%", justifyContent: "center", alignItems: "center"}}
                         onClick={(e) => {
                           this.setState({ modalVisible: true, scrollAllowed: false })
                         }}>
                      <h2>Videos</h2>
                    </div>
                    <div style={{backgroundColor: "transparent", display: "flex", flex: 1, height: "100%", justifyContent: "center", alignItems: "center"}}>
                      <h2>Music</h2>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className={styles.divider1}></div>
          <div className={styles.mainContent5} >
            {/*<div className={styles.mc2Left}>*/}
            {/*<img src={cphoto} alt={"cphoto"} className={styles.cphoto} />*/}
            {/*</div>*/}
            <div style={{flex: 1, flexDirection: "row", alignItems: 'flex-start', justifyContent: "flex-start", display: "flex", padding: 30, }}>
              <div style={{flex: 0.5, padding: 30, backgroundColor: "rgba(1,1,1,0.5)", borderWidth: 1, borderColor: "#687eff", borderRadius: 5}}>
                <div className={styles.fullHeightWidth} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                  <ul>
                    <li style={{paddingLeft: 0}}><h1 style={{color: "red"}}>Contact</h1></li>
                    <li style={{paddingLeft: 0}}><p style={{color: "white"}}>Christian Deibert</p></li>
                    <li style={{display: "inline"}}><div style={{flex: 1, display: "flex", flexDirection: "row", alignItems: "flex-end"}}><img src={email} style={{width: 50, height: 50,marginBottom: -5, marginRight: 5, display: "inline"}}/><p style={{color: "white"}}>christian@goodshedstudio.com</p></div></li>
                    <li style={{display: "inline"}}><div style={{flex: 1, display: "flex", flexDirection: "row", alignItems: "flex-end"}}><img src={fb} style={{width: 50, height: 50, display: "inline"}}/><p style={{color: "white"}}>www.facebook.com/GoodShed</p></div></li>
                    <li style={{display: "inline"}}><div style={{flex: 1, display: "flex", flexDirection: "row", alignItems: "flex-end"}}><img src={ig} style={{width: 42, marginLeft: 5, marginRight: 5, height: 42, display: "inline"}}/><p style={{color: "white"}}>@good_shed</p></div></li>
                  </ul>



                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
