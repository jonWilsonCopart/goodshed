import React, { Component } from 'react';
import styles from  './lowerContent.module.css'
import GuitarPick from '../guitarPick/guitarPick';


class LowerContent extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    console.log(this.state)
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {

    return (
      <div className={styles["lower-container"]}>
          <GuitarPick
            width={'400px'}
            height={'400px'}
            color={"#FFFFFF"}
            text={"Idea 1"}
            isFlex={true}
          />
          <GuitarPick width={'400px'} height={'400px'} text={"Idea 2"} isFlex={true}/>
          <GuitarPick width={'400px'} height={'400px'} color={"#FFFFFF"} text={"Idea 3"} isFlex={true}/>


      </div>
    );
  }
}

export default LowerContent;
