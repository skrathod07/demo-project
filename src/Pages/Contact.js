import React from 'react'

const Contact = () => {
  return (
    <div className='container'>
      <div>
        <h1>Contact Us</h1>
      </div>
      <div className='contact'>
        <div className='contact-address'>
            <img src='./images/hero.jpg' alt='contact img'/>
            <h3>Our address</h3>
            <p>Techsche Pvt. Ltd.
                SMC Junction, Vazhuthacaud,
                Trivandrum, Kerala.</p>

            <h3>Phone</h3>
            <p>+91 9999999999</p>

            <h3>E-mail</h3>
            <p>info@techcode.in</p>

        </div>

        <div className='contact-form'>
          <h3 className='contact-form-heading'>Send us a message</h3>
          <form>
            <label>Name</label>
            <input type='text' placeholder='Your  name here' id='name' required/>
            <label>Email</label>
            <input type='email' placeholder='Your email here' id='email' required/>
            <label>Subject</label>
            <input type='text' placeholder='Your Subject here' id='subject' required/>
            <label>Message</label>
            <textarea placeholder='Your message here' id='message' rows='5' required></textarea>
            <button type='submit' className='submit-button'>Submit</button>
          
          </form>

        </div>

      </div>
    </div>
  )
}

export default Contact
