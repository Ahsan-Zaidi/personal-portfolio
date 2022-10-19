import React from 'react'
import './about.css'
import Me from '../../assets/Me.svg';
import { FaAward } from 'react-icons/fa' 
import { FiUsers } from 'react-icons/fi'
import { AiTwotoneFolderOpen } from 'react-icons/ai'

const About = () => {
    return (
        <section id='about' >
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={Me} alt="About Image" />
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>1 Year</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>5+ Clients</small>
                        </article>
                        <article className='about__card'>
                            <AiTwotoneFolderOpen className='about__icon' />
                            <h5>Projects</h5>
                            <small>15+ Completed Projects</small>
                        </article>
                    </div>

                    <p>
                        Hi, I'm Ahsan, a full-stack web developer. Growing up I always had a passion for art, It forms the way I see things. While most people tend to see programming as a problem to be solved. I like to think of it as a canvas waiting to be painted. By combining standard coding techniques with a touch of refreshing ingenuity, I believe we can achieve outstanding results. 
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About