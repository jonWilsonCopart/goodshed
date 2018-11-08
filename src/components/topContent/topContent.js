import React, { Component } from 'react';
import Logo from '../logo/logo.js'
import './topContent.css'


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

    return (
      <div className="inner-border" style={innerBorder}>
        <Logo />
        <p className="top-title">This is just test text</p>
        <p style={{fontSize: '3rem'}}>Additional extra text to <span id={'redText'}>see the idea...</span></p>
      </div>
    );
  }
}

export default TopContent;
