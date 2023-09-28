import React from 'react';
import './footer.css';
import {FaFacebookF } from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footerLogo'>Egator</a>


      <ul className='links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#exper'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#port'>Portfolio</a></li>
        <li><a href='#testi'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footerS'>
          <a href='https://facebook.com'><FaFacebookF/></a>
          <a href='https://facebook.com'><FiInstagram/></a>
          <a href='https://facebook.com'><IoLogoTwitter/></a>


      </div>
      <div className='copy'>
        <small>&copy; Saiyad Abu Naeem. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer