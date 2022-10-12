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
          <h5 className='client__name'>Linda Barnes</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum libero, minima eos autem, molestias corrupti nisi, optio eveniet obcaecati maxime mollitia quis? Sunt quibusdam harum recusandae eius unde consequuntur? Ad.
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={Avatar2} alt='Avatar'></img>
          </div>
          <h5 className='client__name'>Chris Good</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum libero, minima eos autem, molestias corrupti nisi, optio eveniet obcaecati maxime mollitia quis? Sunt quibusdam harum recusandae eius unde consequuntur? Ad.
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={Avatar3} alt='Avatar'></img>
          </div>
          <h5 className='client__name'>Ricky Chan</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum libero, minima eos autem, molestias corrupti nisi, optio eveniet obcaecati maxime mollitia quis? Sunt quibusdam harum recusandae eius unde consequuntur? Ad.
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials