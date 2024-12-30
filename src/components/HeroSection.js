import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSection = () => {
  return (
        <section className='container'>
                <div className='hero'>
                    <div className='hero-content'>
                        <p className='tech-world' >Tech World</p>
                        <h1>TECH HUB</h1>
                        <p>The Random Paragraph Generator is a free online tool to generate random paragraphs to help writers
                        </p>
                        <NavLink className='hero-btn' to='/contact'>Contact Us</NavLink>
                    </div>
                    
                    <div className='hero-image'>
                        <img src='./images/hero.jpg' alt='img'/>
                    </div>

                </div>
        </section>

  )
}

export default HeroSection
