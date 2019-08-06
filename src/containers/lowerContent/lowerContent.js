import React, { Component } from 'react';
import styles from './lowerContent.module.css'

import rightArrow from '../../assets/imgs/rightArrow.png';
import leftArrow from '../../assets/imgs/leftArrow.png';
import GuitarPick from '../../components/guitarPick/guitarPick';


let testimonials = ['Testimonial 1', 'Testimonial 2', 'Testimonial 3'];
let clientPhotos = ['Client Photo 1', 'Client Photo 2', 'Client Photo 3'];

class LowerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      tIndex: 0
    };



    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.displayText = this.displayText.bind(this);
    this.displayPhoto = this.displayPhoto.bind(this);
    this.nextText = this.nextText.bind(this);
    this.prevText = this.prevText.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }


  displayText() {
    let { tIndex } = this.state;
    return testimonials[tIndex];
  }

  displayPhoto(){
    let { tIndex } = this.state;
    return clientPhotos[tIndex];
  }

  nextText(){
    let { tIndex } = this.state;
    if(tIndex == testimonials.length - 1){
      this.setState({ tIndex: 0 });
    } else {
      this.setState({ tIndex: tIndex + 1});
    }
  }

  prevText(){
    let { tIndex } = this.state;
    if(tIndex === 0){
      this.setState({ tIndex: testimonials.length - 1 });
    } else {
      this.setState({ tIndex: tIndex - 1});
    }
  }


  render() {

    return (
      <div className={styles["lower-container-new"]}>
        <div>
          <h1> Hello </h1>
          <h1> Hello </h1>
          <h1> Hello </h1>
          <h1> Hello </h1>
          <h1> Hello </h1>
          <h1> Hello </h1>
          <h1> Hello </h1>
          <h1> Hello </h1>
        </div>

      </div>
    );
  }
}

export default LowerContent;

{/*<GuitarPick*/}
  {/*width={'400px'}*/}
  {/*height={'400px'}*/}
  {/*color={"#FFFFFF"}*/}
  {/*text={"Idea 1"}*/}
  {/*isFlex={true}*/}
{/*/>*/}
{/*<GuitarPick width={'400px'} height={'400px'} text={"Idea 2"} isFlex={true}/>*/}
{/*<GuitarPick width={'400px'} height={'400px'} color={"#FFFFFF"} text={"Idea 3"} isFlex={true}/>*/}


{/*<div className={styles["lower-container"]}>*/}
{/*<div className={styles["lower-middle"]}>*/}
{/*<div className={styles["lower-middle-inner"]}>*/}
{/*<div className={styles["left-arrow"]} onClick={this.prevText}>*/}
{/*<img src={leftArrow} style={{width: '50%'}} onClick={this.prevText}/>*/}
{/*</div>*/}
{/*<div className={styles["lower-middle-portrait"]}>*/}
{/*<h1>{this.displayPhoto()}</h1>*/}
{/*</div>*/}
{/*<div className={styles["lower-middle-testimonial"]}>*/}
{/*<h1>{this.displayText()} </h1>*/}
{/*</div>*/}
{/*<div className={styles["right-arrow"]} onClick={this.nextText}>*/}
{/*<img*/}
{/*src={rightArrow}*/}
{/*onClick={this.nextText}*/}
{/*style={{width: '50%'}}/>*/}
{/*</div>*/}
{/*</div>*/}
{/*</div>*/}
{/*<div className={styles["lower-right"]}>*/}
{/*<p style={{}}>Test</p>*/}
{/*</div>*/}
