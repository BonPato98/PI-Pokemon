import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  
  let location = useLocation();
  
  if (location.pathname === "/") return null
  return (
    <div className='navbar-cont'>
      <div className='circle'></div>
      <div className='border-circle'></div>
      <div className='link-cont'>
        <Link to='/home' className="link-style">
          <div className='navbar-home-button'>
            <h2>Inicio</h2>
          </div>
        </Link>
        <Link to='/form' className="link-style">
          <div className='navbar-form-button'>
          <h2>Crear Pokemon</h2>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar