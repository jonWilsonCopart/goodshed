import React, { Component } from 'react';
import Logo from '../../components/logo/logo.js'
import { ReactComponent as ChristianPhoto} from "../../assets/imgs/Christian-BW.svg"
import styles from './middleContent.module.css'


class MiddleContent extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
  render() {

    return (
      <div className={styles["middle-container"]}>
        <div className={styles["picture-border"]}>
          <ChristianPhoto />
        </div>
        <div className={styles["middle-sub-section-container"]}>
          <div className={styles["middle-sub-section"]}>
            <p className={styles["middle-title"]}>All Equipment  <span className={styles.redText}></span></p>
          </div>
        </div>

      </div>
    );
  }
}

export default MiddleContent;
