import React from 'react';
import logo from '../../assets/imgs/goodshedLogo_v2.png'

import './logo.css';


export default ((props) => {
  let logoStyle
  if(props.isFlex){
    logoStyle = {
      display: 'flex',
      flex: props.flexValue || 1,
      justifyContent: props.justifyContent || 'flex-start',
      alignItems: props.alignItems || 'flex-start',

    }

  } else {
  logoStyle = props.logoStyle;
}

  return(
    <div style={logoStyle}>
      <img src={logo} style={props.imageStyle} />
    </div>
  )
});