import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='continer services__container'>
      <article className='service'>
          <div className='service__head'>
            <h3>Frontend</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Intuative Navigation for user friendly experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Straightforward file structure for code maintenance.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Regularly commenting code to advocate collaboration.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Use of Handlebars to create immersive user interface.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Using REACT to make compartmentalized front end components.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Technologies</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>GitHub</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Insomnia</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Heroku</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>VS Code</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>JEST</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Backend</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Effecient code focused on rapid response times.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Use MVC framework to create server side data.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Regularly commenting code to advocate collaboration.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Manage relational databases through SQL</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Manage non-relational data objects with NoSQL</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services