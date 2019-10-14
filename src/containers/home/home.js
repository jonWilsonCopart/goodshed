import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { peaks } from './peaks.js';
import * as _ from "lodash"

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
import logo from '../../assets/imgs/goodshedLogo_v2.png'

import Navbar from '../header/header.js'
import soundwaveIcon from "../../assets/imgs/soundwave_inv.png"
import WaveSurfer from 'wavesurfer.js'

import toplogo from "../../assets/imgs/bg-1.png"
import styles from './home.module.css'
import animations from './animations.module.css'
import instance from "../../axios/instance"

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: false,
      scrollAllowed: true,
      reviews: [],
      equipment: [],
      videos:[],
      activeSong: {},
      autoPlay: false,
      isPlaying: false,
      inactiveLinkColor: 'red',
      activeLinkColor: "#ffa230",
      activeLink: "#home"
    };

    this.closeModal = this.closeModal.bind(this);
    this.renderTestimonials = this.renderTestimonials.bind(this);
    this.renderMicrophones = this.renderMicrophones.bind(this);
    this.renderInstruments = this.renderInstruments.bind(this);
    this.renderOtherGear = this.renderOtherGear.bind(this);
    this.displayAlbumCover = this.displayAlbumCover.bind(this);
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  componentWillMount(){
    instance.get("/reviews/all")
      .then((resp) => this.setState({ reviews: resp && resp.data || []}))
      .catch((err) => console.log(err));
    instance.get("/equipment/all")
      .then((resp) => this.setState({ equipment: resp && resp.data || []}))
      .catch((err) => console.log(err));
    instance.get("/music/all")
      .then((resp) => {
        let newArr = []
        for(let key in resp.data){
          newArr.push(resp.data[key])
        }
        this.setState({ videos: newArr || [], activeSong: newArr[1]}, () => {
          const aud = document.querySelector("#player")
          this.wavesurfer = WaveSurfer.create({
            barWidth: 1,
            cursorWidth: 1,
            container: '#waveform',
            backend: 'MediaElement',
            height: 80,
            progressColor: '#ffa230',
            responsive: true,
            waveColor: '#ccc',
            cursorColor: '#4a74a5',
          });
          console.log(aud)
          this.wavesurfer.load(aud);
        })
      })
      .catch((err) => console.log(err));
  }


  componentDidMount(){
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    document.addEventListener('scroll', _.debounce(this.trackScrolling, 250));
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  closeModal(){
    this.setState({ modalVisible: false, scrollAllowed: true })
  }

  renderMicrophones(){
    const { equipment } = this.state;
    const { microphones } = equipment;
    if(microphones){
      return microphones.map((microphone) => {
        return (
          <li>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", width: "100%"}}>
              <p style={{marginRight: 10}}>{microphone.manufacturer}</p>
              <p style={{marginRight: 10}}> {microphone.model}</p>
              <p style={{marginRight: 10}}> x{microphone.quantity} </p>
            </div>
          </li>
        )
      })

    }
  }

  renderInstruments(){
    const { equipment } = this.state;
    const { instruments } = equipment;
    if(instruments){
      return instruments.map((instrument) => {
        return (
          <li>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", width: "100%"}}>
              <p style={{marginRight: 10}}>{instrument.manufacturer}</p>
              <p style={{marginRight: 10}}> {instrument.model}</p>
              <p style={{marginRight: 10}}> x{instrument.quantity} </p>
            </div>
          </li>
        )
      })

    }
  }

  renderOtherGear(){
    const { equipment } = this.state;
    const { other } = equipment;
    if(other){
      return other.map((item) => {
        return (
          <li>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", width: "100%"}}>
              <p style={{marginRight: 10}}>{item.manufacturer}</p>
              <p style={{marginRight: 10}}> {item.model}</p>
              <p style={{marginRight: 10}}> x{item.quantity} </p>
            </div>
          </li>
        )
      })

    }
  }

  renderTestimonials(){
    const { reviews } = this.state;
    console.log(reviews)
      return (reviews.map((review) => {
        if(review){
          return (
            <div className={styles.testimonial}>
              <p>{review.review}</p>
              <p className={styles.marginLeftLg} style={{marginTop: 5}}>- {review.author}</p>
            </div>
          )

      }
      }))
  }

  displayAlbumCover(cover){
    return <img src={cover} alt={"album_cover"} className={styles.albumCover}/>


  }

  scrollToSection(section){
    this.setState({ activeLink: section, activeLinkColor: "#ffa230"})
    document.querySelector(`${section}`).scrollIntoView({
      behavior: 'smooth'
    });
  }

  isVisible(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight + (window.innerHeight / 2);
  }


  trackScrolling = () => {
    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const gear = document.getElementById('gear');
    const reviews = document.getElementById('reviews');
    const media = document.getElementById('media');
    const contact = document.getElementById('contact');
    const links = [home, about, gear, reviews, media, contact]
    links.some(link => {
      if(this.isVisible(link)){
        this.setState({activeLink: `#${link.id}`})
        return
      }
    })
  };

  render() {
    const { scrollAllowed, isPlaying, activeLink, inactiveLinkColor, activeLinkColor } = this.state;
    let scrollStyle = scrollAllowed ? styles.scrollView : styles.noScrollView;
    let musicURL = this.state.videos && this.state.activeSong && this.state.activeSong.url
    let albumURL = this.state.videos && this.state.activeSong && this.state.activeSong.imageUrl
    let linkColor = activeLink ? activeLinkColor : inactiveLinkColor
    let togglePlay = !isPlaying ? <img onClick={() => {
      document.getElementById('player').play()
      this.setState({ isPlaying: true })
      }} src={require("../../assets/imgs/playIcon-01-01.png")} style={{width: "30px"}} /> :
      <img onClick={() => {
        document.getElementById('player').pause()
        this.setState({isPlaying: false })
      }} src={require("../../assets/imgs/pauseIcon-01.png")} style={{width: "30px"}}/>

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerFixedContent}>
            <div style={{alignItems: "center", justifyContent: "center", display: "flex"}}>
              <p className={styles.headerTitle}>Good<span className={styles.redText}>Shed</span><span className={`${styles['fontXSm']}`}>Studio.com</span></p>
            </div>
            {/*<Logo imageStyle={logoStyle}/>*/}
            <div style={{justifyContent: "center", alignItems: "center", display: "flex"}}>
              <img src={soundwaveIcon} alt={"soundwave"} className={styles.soundbars} />
            </div>
            <div className={styles.navList}>
              <p style={{color: activeLink === "#home" ? activeLinkColor : inactiveLinkColor, cursor: 'pointer' }} onClick={() => this.scrollToSection("#home")}>Home</p>
              <p style={{color: activeLink === "#about" ? activeLinkColor : inactiveLinkColor, cursor: 'pointer' }} onClick={() => this.scrollToSection("#about")}>About</p>
              <p style={{color: activeLink === "#gear" ? activeLinkColor : inactiveLinkColor, cursor: 'pointer' }} onClick={() => this.scrollToSection("#gear")}>Gear</p>
              <p style={{color: activeLink === "#reviews" ? activeLinkColor : inactiveLinkColor, cursor: 'pointer' }} onClick={() => this.scrollToSection("#reviews")}>Testimonials</p>
              <p style={{color: activeLink === "#media" ? activeLinkColor : inactiveLinkColor, cursor: 'pointer' }} onClick={() => this.scrollToSection("#media")}>Media</p>
              <p style={{color: activeLink === "#contact" ? activeLinkColor : inactiveLinkColor, cursor: 'pointer' }} onClick={() => this.scrollToSection("#contact")}>Contact</p>
            </div>
          </div>
        </div>
        {/*<div style={{backgroundColor: "black", flex: 1}}></div>*/}
        <div style={{flex: 1, display: "flex", flexDirection: "column"}}>
          {this.state.modalVisible ? <VideoModal videos={this.state.videos} closeModal={this.closeModal} /> : null}
          <div className={styles.mainContent} id={"home"} >
            <div >
              <img src={logo} style={{width: 50}} />
              {/*<Logo imageStyle={{width: 80}} />*/}
            </div>
            <div style={{ justifyContent: "center"}}>
              <TopContent/>
            </div>
          </div>
          <div className={styles.divider1}></div>
          <div className={styles.mainContent2} id={"about"}>
            {/*<div className={styles.mc2Left}>*/}
              {/*<img src={cphoto} alt={"cphoto"} className={styles.cphoto} />*/}
            {/*</div>*/}
            <div style={{flex: 1, flexDirection: "row", alignItems: 'flex-start', justifyContent: "flex-start", display: "flex", padding: 30, }}>
              <div style={{flex: 0.5, backgroundColor: "rgba(1,1,1,0.5)", borderWidth: 1, borderColor: "#687eff", borderRadius: 5}} className={styles.responsivePaddingLG}>
                <p style={{color: "white", fontSize: "1.2em", marginBottom: 20}}>"You spend time creating new songs and fine-tuning old ones. Eventually you try and record them. No matter the project or caliber of studio you're in, the goal is to give your best performance. Rehearsing helps... a lot.</p>
                <p style={{color: "white", fontSize: "1.2em", marginBottom: 20}}>Feeling comfortable in the studio helps too.</p>
                <p style={{color: "white", fontSize: "1.2em"}}>My goal is to offer a creative environment that brings out your best performance; to help inspire you when it gets discouraging; to remind you that making music is fun, but most importantly, to bring a smile to your face when you hear the final product."</p>
              </div>
            </div>
          </div>
          <div className={styles.divider1}></div>
          <div className={styles.mainContent6} id={"media"}>
            <div className={styles.fullDrkBG}>
              <div style={{flex: 1, display: "flex", justifyContent: "center", color: "white", flexDirection: "column"}}>
                <div style={{flex: 0.15, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <h1>Media</h1>
                </div>
                <div style={{flex: 1, display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center"}}>
                  {/*<div style={{backgroundColor: "transparent", display: "flex", flex: 1, height: "100%", justifyContent: "center", alignItems: "center"}}*/}
                  {/*onClick={(e) => {*/}
                  {/*this.setState({ modalVisible: true, scrollAllowed: false })*/}
                  {/*}}>*/}
                  {/*<h2>Videos</h2>*/}
                  {/*</div>*/}
                  <div style={{backgroundColor: "transparent", display: "flex", flexDirection: "column", flex: 1, height: "100%", justifyContent: "center", alignItems: "center"}}>
                    <div style={{backgroundColor: "transparent", display: "flex", flexDirection: "column", flex: 1, height: "100%", justifyContent: "center", alignItems: "center"}}>
                      {this.state.videos && this.state.videos.map((item) => {
                        return (
                          <div>
                            <p style={{cursor: 'pointer'}} onClick={() => {
                              this.setState({ activeSong: item, isPlaying: false }, () => {
                                let aud = document.querySelector("#player");
                                this.wavesurfer.load(aud);
                              })
                            }}>{item.artist} - {item.trackName}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div style={{backgroundColor: "transparent", display: "flex", flexDirection: "column", flex: 1, height: "100%", justifyContent: "center", alignItems: "center"}}>
                    <div style={{justifyContent: "center", display: "flex", alignItems: "center", flexDirection: "column"}}>
                      <p>Track: {this.state.videos && this.state.activeSong && this.state.activeSong.trackName} | Artist: {this.state.videos && this.state.activeSong && this.state.activeSong.artist}</p>
                      {this.displayAlbumCover(albumURL)}
                      <div id={"waveform"} style={{width: '100%', height: 50, marginBottom: '8%' }}/>
                      <audio id={"player"} autoPlay={this.state.autoPlay} style={{marginTop: 10}} src={musicURL} type="audio/mpeg" onEnded={() => this.setState({ isPlaying: false })}><p>test</p></audio>
                      <div className={styles.audioPlayer}>
                        {togglePlay}
                        <img onClick={() => document.getElementById('player').volume >= 0.1 ? document.getElementById('player').volume-=0.1 : null } src={require("../../assets/imgs/volumeDown-01.png")} style={{width: "30px"}} />
                        <img onClick={() => document.getElementById('player').volume < 1 ? document.getElementById('player').volume+=0.1 : null } src={require("../../assets/imgs/volumeUp-01.png")} style={{width: "30px"}} />
                      </div>
                    </div>
                  </div>
                  <div style={{backgroundColor: "transparent", display: "flex", flexDirection: "column", flex: 1, height: "100%", justifyContent: "center", alignItems: "center"}}>
                    {/*{this.state.videos && this.state.videos.map((item) => {*/}
                    {/*return (*/}
                    {/*<div>*/}
                    {/*<p onClick={() => this.setState({ activeSong: item })}>{item.artist} - {item.trackName}</p>*/}
                    {/*</div>*/}
                    {/*)*/}
                    {/*})}*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divider1}></div>
          <div className={styles.mainContent4} id={"reviews"}>
            {/*<div className={styles.mc2Left}>*/}
            {/*<img src={cphoto} alt={"cphoto"} className={styles.cphoto} />*/}
            {/*</div>*/}
            <div className={styles.testimonialContainer}>
              {this.renderTestimonials()}
            </div>
          </div>
          <div className={styles.divider1}></div>
          <div className={styles.mainContent3} id={"gear"}>
            <div className={styles.fullWidth} style={{flex: 1, padding: 10, alignItems: 'center', justifyContent: "flex-start", display: "flex", flexDirection: "column", backgroundColor: "rgba(1,1,1,0.5)"}}>
              <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <div style={{flex: 1, justifyContent: "center", alignItems: "center", display: "flex"}}>
                  <p style={{color: "red", fontSize: '2em'}}>Microphones</p>
                </div>
                <div style={{flex: 1, justifyContent: "center", alignItems: "center", display: "flex"}}>
                  <p style={{color: "red", fontSize: '2em'}}>Instruments</p>
                </div>
                <div style={{flex: 1, justifyContent: "center", alignItems: "center", display: "flex"}}>
                  <p style={{color: "red", fontSize: '2em', textAlign: "center"}}>Recording Gear</p>
                </div>
              </div>
              <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start"}}>
                <div style={{flex: 1, justifyContent: "center", alignItems: "flex-start", display: "flex"}}>
                  <ul style={{width: "100%"}}>
                    {this.renderMicrophones()}
                  </ul>
                </div>
                <div style={{flex: 1, justifyContent: "center", alignItems: "flex-start", display: "flex"}}>
                  <ul style={{width: "100%"}}>
                    {this.renderInstruments()}
                  </ul>
                </div><div style={{flex: 1, justifyContent: "center", alignItems: "flex-start", display: "flex"}}>
                <ul style={{width: "100%"}}>
                  {this.renderOtherGear()}
                </ul>
              </div>
              </div>
            </div>
          </div>
          <div className={styles.divider1}></div>
          <div className={styles.mainContent5} id={"contact"}>
            {/*<div className={styles.mc2Left}>*/}
            {/*<img src={cphoto} alt={"cphoto"} className={styles.cphoto} />*/}
            {/*</div>*/}
            <div style={{flex: 1, flexDirection: "row", alignItems: 'flex-start', justifyContent: "flex-start", display: "flex"}}>
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
