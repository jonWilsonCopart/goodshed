import React from 'react';
import logo from '../../assets/imgs/goodshedLogo.png'

import './logo.css';


export default ((props) => {
  let flexStyle
  if(props.isFlex){
    flexStyle = {
      display: 'flex',
      flex: props.flexValue || 1,
      justifyContent: props.justifyContent || 'flex-start',
      alignItems: props.alignItems || 'flex-start',
      position: 'absolute',
      top: '3%'
    }

  }

  return(
    <div style={flexStyle}>
      <img src={logo} style={props.imageStyle} />
    </div>
  )
});