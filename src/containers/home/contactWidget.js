import React, { Component } from 'react';
import styles from './home.module.css'
import fb from "../../assets/imgs/facebook_icon.png"
import ig from "../../assets/imgs/instagram_icon.png"
import email from "../../assets/imgs/email_icon.png"
class ContactWidget extends Component {
  constructor(props){
    super(props);
    this.state = {
      igContactShow: false,
      fbContactShow: false,
      emailContactShow: false,
    };
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover(type){
    switch(type){
      case "ig":
        this.setState(prevState => ({
          igContactShow: !prevState.igContactShow
        }));
        break;
      case "fb":
        this.setState(prevState => ({
          fbContactShow: !prevState.fbContactShow
        }));
        break;
      case "email":
        this.setState(prevState => ({
          emailContactShow: !prevState.emailContactShow
        }));
        break;
      default:
        break;
    }
  }
  render(){
    const { igContactShow, fbContactShow, emailContactShow } = this.state;
    return (
      <div style={{width: "50px", height: "250px", backgroundColor: "rgba(0,0,0,8)", position: "fixed", right: 0, top: 80, zIndex: 10000, borderRadius: 50, overflow: 'visible', display: 'flex', alignItems: "center", justifyContent: "space-around", flexDirection: "column"}} >
        <div style={{backgroundColor: "rgba(0,0,0,1)"}} onMouseEnter={() => this.toggleHover("ig")} onMouseLeave={() => this.toggleHover("ig")}>
          <img src={ig} style={{width: 30, height: 30, zIndex: 10000}}/>
        </div>
        {igContactShow ?
          <div className={`${styles["fade-in-right"]} ${styles.socialIGView}`}><p style={{color: "white", fontFamily: "Montserrat", fontWeight: "bold"}}>@good_shed</p> </div>
          : null }
        <div style={{backgroundColor: "rgba(0,0,0,1)"}} onMouseEnter={() => this.toggleHover("fb")} onMouseLeave={() => this.toggleHover("fb")}>
          <img src={fb} style={{width: 38, height: 38, zIndex: 10000}}/>
        </div>
        {fbContactShow ?
          <div className={`${styles["fade-in-right"]} ${styles.socialFBView}`}><p style={{color: "white", fontFamily: "Montserrat", fontWeight: "bold"}}>fb.com/GoodShed</p> </div>
        : null }
        <div style={{backgroundColor: "rgba(0,0,0,1)"}} onMouseEnter={() => this.toggleHover("email")} onMouseLeave={() => this.toggleHover("email")}>
          <img src={email} style={{width: 30, height: 30}}/>
        </div>
        {emailContactShow ?
          <div className={`${styles["fade-in-right"]} ${styles.socialEmailView}`}><p style={{color: "white", fontFamily: "Montserrat", fontWeight: "bold"}}>christian@goodshedstudios.com</p> </div>
        : null }
      </div>
    )
  }

}

export default ContactWidget