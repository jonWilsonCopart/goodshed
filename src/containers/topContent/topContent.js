import React, { Component } from 'react';
import Logo from '../../components/logo/logo.js'
import styles from './topContent.module.css'

let active = 'active'

let textArr = [
  <p className={`${styles["top-title"]} ${styles["fontMd"]} ${styles['fadeIn']}`}>Good <span className={`${styles['redText']} ${styles['fontXMd']} `}>Music</span></p>,
  <p className={`${styles["top-title"]} ${styles["fontMd"]}`}>Good <span className={`${styles['redText']} ${styles['fontXMd']} ${styles['text-pop-up-top']}`}>Vibes</span></p>,
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1}}>
    <p className={`${styles["top-title"]} ${styles['focus-in-contract-bck']} ${styles['fontXL']}`}>Good<span className={`${styles.redText} ${active}`} >Shed</span></p>
    <p className={`${styles["top-title"]} ${styles['delayed-fadeIn']} ${styles['fontXSm']} ${styles['altFontTeko']}`}>Studio</p>
  </div>
    ]



class TopContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      headLineIndex: 0
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.displayHeadline = this.displayHeadline.bind(this);
    this.nextText = this.nextText.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    this.startTimer();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  nextText(){
    let { headLineIndex } = this.state;
    if(headLineIndex == textArr.length - 1){
      return
    } else {
      this.setState({ headLineIndex: headLineIndex + 1});
    }
  }

  startTimer(){
    let { headLineIndex } = this.state;
    return setInterval(() => {
      if(headLineIndex === textArr.length - 1){
        return
      } else {
        this.nextText()
      }
    }, 3500)
  }

  displayHeadline(){
    let { headLineIndex } = this.state;
    return textArr[headLineIndex]
  }

  render() {
    const innerBorder = {
      maxWidth: this.state.width / 2
    };
    const logoStyle = {
      width: '10%',
      left: '46%',
      top: 30

    };


    return (

        <div className={styles["inner-border"]} style={innerBorder}>
          {this.displayHeadline()}
        </div>
    );
  }
}

export default TopContent;
