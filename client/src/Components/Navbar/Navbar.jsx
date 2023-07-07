import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-cont'>
      <div className='link-cont'>
        <Link to='/home'>Home</Link>
        <Link to='/form'>Formulario</Link>
      </div>
    </div>
  )
}

export default Navbar