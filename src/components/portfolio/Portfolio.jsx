import React from 'react'
import './portfolio.css'
import Image1 from '../../assets/image1.jpg'
import Image2 from '../../assets/image2.jpg'
import Image3 from '../../assets/image3.jpg'
import Image4 from '../../assets/image4.jpg'
import Image5 from '../../assets/image5.jpg'
import Image6 from '../../assets/image6.jpg'
import Image7 from '../../assets/image7.jpg'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Image1} alt=""></img>
          </div>
          <h3>Password Generator</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Ahsan-Zaidi/Password-Generator' className='btn' target='_blank'>GitHub</a>
            <a href='https://ahsan-zaidi.github.io/Password-Generator/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Image2} alt=""></img>
          </div>
          <h3>Weather Dashboard</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Ahsan-Zaidi/weather-dashboard' className='btn' target='_blank'>GitHub</a>
            <a href='https://ahsan-zaidi.github.io/weather-dashboard/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Image3} alt=""></img>
          </div>
          <h3>Code Quiz</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Ahsan-Zaidi/code-quiz' className='btn' target='_blank'>GitHub</a>
            <a href='https://ahsan-zaidi.github.io/code-quiz/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Image4} alt=""></img>
          </div>
          <h3>Work Day Scheduler</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Ahsan-Zaidi/Work-Day-Scheduler' className='btn' target='_blank'>GitHub</a>
            <a href='https://ahsan-zaidi.github.io/Work-Day-Scheduler/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Image5} alt=""></img>
          </div>
          <h3>Tech Blog</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Ahsan-Zaidi/Tech-blog' className='btn' target='_blank'>GitHub</a>
            <a href='https://tech-blog-96.herokuapp.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Image6} alt=""></img>
          </div>
          <h3>Note Taker</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Ahsan-Zaidi/note-taker' className='btn' target='_blank'>GitHub</a>
            <a href='https://note-takers01.herokuapp.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Image7} alt=""></img>
          </div>
          <h3>Hook-Em-Up</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/danielxgoldin/Hook-em-Up' className='btn' target='_blank'>GitHub</a>
            <a href='https://comfy-bubblegum-771910.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default portfolio