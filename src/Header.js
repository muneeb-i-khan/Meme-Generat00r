import React from 'react'
import doge from './Doge.png'
const Header = () => {
  return (
    <div className='head'>
      <img src={doge} width='70px'></img>
      <span>Memes Generator</span>
    </div>
  )
}

export default Header
