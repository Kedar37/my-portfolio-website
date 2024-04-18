import React from 'react'
import '../styles/nav.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav'>
        <div className='logo'>
          <img src='/Images/mylogo2.png' alt='logo'/>
        </div>
        <div className='links'>
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <div className='lang'>
            <button className='eng'>Eng</button>
            <button className='jp'>日本語</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar