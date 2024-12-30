import React from 'react'

const About = () => {
  return (
    <div className='container about-page'>
        <div className='about-heading'>
          <h1>About Us</h1>
        </div>
        <div className='about'>
          <div className='about-image'>
              <img src='./images/hero.jpg' alt='img'/>
          </div>

          <div className='about-content'>
              <p>Techsche is a digital branding company based in Trivandrum, Kerala, India with over 3 years of experience in helping businesses establish their digital presence. We specialize in providing comprehensive digital branding solutions including website design, search engine optimization, search engine marketing, and social media marketing.</p>

              <p> We focus on serving businesses in the education, hospitality, and healthcare industries and offer our expertise to start-up companies in need of branding support. Our goal is to help our clients achieve their full potential through effective digital branding strategies and tactics</p>
          </div>

        </div>
    </div>
  )
}

export default About
