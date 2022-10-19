import React from 'react'
import './testimonials.css'
import Avatar1 from '../../assets/Avatar1.png'
import Avatar2 from '../../assets/Avatar2.png'
import Avatar3 from '../../assets/Avatar3.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Referances</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={Avatar1} alt='Avatar'></img>
          </div>
          <h5 className='client__name'>Jessica Harris</h5>
            <small className='client__review'>
              "We worked in collaboration to get my e-commerce app up and running. He was very helpful and overall a joy to work with." 
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={Avatar2} alt='Avatar'></img>
          </div>
          <h5 className='client__name'>Kyle Emordi</h5>
            <small className='client__review'>
              "5/5 stars! Ahsan was great. He helped get my website up and running; now I can sell beats without having to worry about my work being stolen online."
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={Avatar3} alt='Avatar'></img>
          </div>
          <h5 className='client__name'>Ricky Chan</h5>
            <small className='client__review'>
              "He transformed my old website giving it a whole new look. It also works on mobile! I love it!"
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials