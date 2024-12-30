import React from 'react'
import { NavLink } from 'react-router-dom';
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
       
            <div className='footer-section'>
              <h3>about us</h3>
              <p>We are leading tech solutions company offering cutting-edge Services to help bussinesses grow and thrive in the digital era</p>
            </div>

            <div className='footer-section'>

              <h3>Quick links</h3>
              <ul>
                    <li>
                        <NavLink className='footer-link' to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='footer-link' to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink className='footer-link' to='/contact'>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className='footer-link' to='/services'>Services</NavLink>
                    </li>

              </ul>
            </div>

            <div className='footer-section'> 

              <h3>Contact us</h3>
              <p><strong>Address:</strong>
              123 tech street, City , India
              </p>
              <p><strong>Phone:</strong>+999999999</p>
              <p><strong>Email:</strong>info@techcode.in</p>
            </div>

            <div className='footer-section'>
              <h3>Follow us</h3>
              <div className='social-icons'>
                <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'><TiSocialInstagram /></a>
                <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'><TiSocialInstagram /></a>
                <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'><TiSocialInstagram /></a>
                <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'><TiSocialInstagram /></a>
              </div>
            </div>

      </div>

      <div className='footer-bottom'>
            <p>&copy;{new Date().getFullYear()} TechCode Pvt.Ltd.</p>
      </div>

    </footer>
  )
}

export default Footer
