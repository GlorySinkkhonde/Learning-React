import React from 'react'
import '../App.css'
import SportsPhoto from '../images/sports.png'
import WeddingPhoto from '../images/wedding-photography.png'
import MountainBike from '../images/mountain-bike.png'
import { AiFillStar } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'

function Card() {
  return (
    <div className='Container'>
        <div className="CardSection">
            <div className="Card">
                <img src={SportsPhoto} alt="" />
                <p> <span className='Stars'><AiFillStar /></span> <span>5.0</span> <span>(6) <BsDot className='Dot'/> </span> <span>USA</span></p>
                <p>Life lessons with Katie Zaferes</p>
                <p><span>From $136</span> / person</p>
            </div>
            <div className="Card">
                <img src={WeddingPhoto} alt="" />
                <p> <span className='Stars'><AiFillStar /></span> 5.0 <span>(6)  <BsDot className='Dot'/> </span> <span>USA</span></p>
                <p>Learn wedding photography</p>
                <p><span>From $125</span> / person</p>
            </div>
            <div className="Card">
                <img src={MountainBike} alt="" />
                <p> <span className='Stars'><AiFillStar /></span> 5.0 <span>(6) <BsDot className='Dot' /> </span> <span>USA</span></p>
                <p>Group Mountain Biking</p>
                <p><span>From $50</span> / person</p>
            </div>
        </div>
    </div>
  )
}

export default Card