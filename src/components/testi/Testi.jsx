import React from 'react';
import './testi.css';
import avatar1 from '../../assets/assets/avatar1.jpg';
import avatar2 from '../../assets/assets/avatar2.jpg';
import avatar3 from '../../assets/assets/avatar3.jpg';
import avatar4 from '../../assets/assets/avatar4.jpg';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Testi = () => {
  return (
    <section id='testi' className=' testi'>
      <h5>Review My Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    className='testiCon container'>
        <SwiperSlide className='testimonial'>
          <div className='avatar'>
            <img src={avatar1} alt='avtr'/>
            </div>
            <h5 className='name'>Ernest Achiever</h5>
            <small className='review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis rem veniam pariatur.</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='avatar'>
            <img src={avatar2} alt='avtr'/>
            </div>
            <h5 className='name'>Ernest Achiever</h5>
            <small className='review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis rem veniam pariatur.</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='avatar'>
            <img src={avatar3} alt='avtr'/>
            </div>
            <h5 className='name'>Ernest Achiever</h5>
            <small className='review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis rem veniam pariatur.</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='avatar'>
            <img src={avatar4} alt='avtr'/>
            </div>
            <h5 className='name'>Ernest Achiever</h5>
            <small className='review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis rem veniam pariatur.</small>
        </SwiperSlide>


       





      </Swiper>




    </section>
  )
}

export default Testi