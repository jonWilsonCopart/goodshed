import React, { Component } from 'react';
import Logo from '../logo/logo.js'
import styles from './topContent.module.css'


class TopContent extends Component {
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
    const innerBorder = {
      width: this.state.width / 2,
      height: this.state.width / 3.5
    };
    const logoStyle = {
      width: '25%',
      position: 'absolute',
      top: '2',
      left: '36.5%'
    };

    return (
      <div className={styles["inner-border"]} style={innerBorder}>
        <Logo imageStyle={logoStyle}/>
        <p className={styles["top-title"]}>This is just test text</p>
        <p style={{fontSize: '3rem'}}>Additional extra text to <span id={'redText'}>see the idea...</span></p>
      </div>
    );
  }
}

export default TopContent;
