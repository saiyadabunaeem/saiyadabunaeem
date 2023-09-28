import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';
import './header.css';

const HeaderC = () => {
  return (
    <div className='HeaderC'>
        <a href='https://linkedin.com' target='_blank'><BsLinkedin className='icon' size={20}/></a>
        <a href='https://github.com' target='_blank'><FaGithub className='icon' size={20}/></a>
        <a href='https://dribble.com' target='_blank'><FiDribbble className='icon' size={20}/></a>
    </div>
  )
}

export default HeaderC