import '../App.css'
import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'

function Entries(props) {
  return (
    <div className='entries-wrapper'>
        <div className='japan-entry'>
            <div className='image-section'>
            <img src={props.img} alt="" className='image-1'/>
            </div>
          
          <div className='text-section'>
              <div className='section-one'>
                  <span className='location'> <IoLocationSharp /> {props.location}</span>
                  <span><a href="maps">{props.link}</a></span>
              </div>
  
              <h1>{props.title}</h1>
              <h3>{props.date}</h3>
              <p>{props.description}</p>
          </div>
        </div>

        <hr />
    </div>
  )
}

export default Entries