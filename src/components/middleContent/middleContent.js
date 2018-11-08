import React, { Component } from 'react';
import Logo from '../logo/logo.js'
import './middleContent.css'


class MiddleContent extends Component {
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
      <div className={"middle-container"}>
        <div className={"middle-bg"}>
        </div>
        <div className={"middle-sub-section"}>
          <p className={"middle-title"}>This is just test text</p>
          <p style={{fontSize: '3rem'}}>Additional extra text to <span id={'redText'}>see the idea...</span></p>
        </div>

      </div>
    );
  }
}

export default MiddleContent;
