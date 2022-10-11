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
                            <small>2+ Years Working</small>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et libero quod exercitationem modi rerum suscipit iure, perspiciatis aliquid sit culpa amet eligendi id quia neque obcaecati, minus vel similique.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About