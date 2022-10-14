import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Zaidiahsan.r@gmail.com</h5>
            <a href='mailto:Zaidiahsan.r@gmail.com' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email 2</h4>
            <h5>Ahsanzaidi13@yahoo.com</h5>
            <a href='mailto:Ahsanzaidi13@yahoo.com' target='_blank'>Send a message</a>
          </article>
        </div>
        <form action=''>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact