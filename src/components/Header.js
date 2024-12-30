import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'


const Header = () => {
  return (
    <header className='Main-header'>
        <NavLink to='/'>
            <h3>TechHub</h3>
        </NavLink>

         <Navbar/>
    </header>
  )
}

export default Header
