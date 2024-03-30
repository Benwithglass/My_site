// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Hero.css";
import hinh from "./../../assets/pictures/hinh2-removebg-preview.png"

function Hero() {
  return (
    <body className='hero' id='hero'>
      <img src={hinh} alt="chan_dung" />
    </body>
  )
}

export default Hero