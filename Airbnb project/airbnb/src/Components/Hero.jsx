import React from 'react'
import PhotoGrid from './images/photogrid.png'
import '../App.css'

function Hero() {
  return (
    <div className='HeroSection'>
        <div className="image">
        <img src={PhotoGrid} alt="" />
        </div>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
    </div>
  )
}

export default Hero