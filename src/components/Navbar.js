import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import{FaBars,FaTimes} from 'react-icons/fa';

const Navbar = () => {

    const [menuOpen,setMenuOpen] = useState(false);

    const toggleMenu =()=>{
        setMenuOpen((prev) => !prev);
    };

    const closeMenu= ()=>{
        setMenuOpen(false);
    }
    
  return (
    <nav className='nav-bar'>
        {/* <div className='menuIcon'> */}
            <ul className={`navbar-list ${menuOpen ? "active" : ""}`}>
                <li>
                    <NavLink className='nav-link' onClick={closeMenu} to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' onClick={closeMenu} to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' onClick={closeMenu} to='/contact'>Contact</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' onClick={closeMenu} to='/services'>Services</NavLink>
                </li>

            </ul>
        {/* </div> */}
            <div className='displayMenu' onClick={toggleMenu}>
                
                {menuOpen ? <FaTimes/> : <FaBars/>}
            </div>
    </nav>

  )
}

export default Navbar;
