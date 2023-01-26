import React from 'react'
import '../App.css'
import { IoEarthSharp } from 'react-icons/io5'

function Header() {
  return (
    <div className='header'>
      <span className='earth-icon'><IoEarthSharp /></span>
      <span className='header-text'>my travel journal</span>
    </div>
  )
}

export default Header