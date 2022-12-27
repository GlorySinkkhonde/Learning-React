import React from 'react'
import '../App.css'
import { AiFillStar } from 'react-icons/ai'

function Card(props) {
  return (
    <div className='Container'>
        <div className="CardSection">
            <div className="Card">
                <img src={props.img} alt="" />
                <p> <span className='Stars'><AiFillStar /></span> <span>{props.rating}</span> 
                <span>({props.reviewCount}) • </span> 
                <span>{props.country}</span></p>
                <p>{props.title}</p>
                <p>
                <span>From ${props.price}</span> / person</p>
            </div>
        </div>
    </div>
  )
}

export default Card