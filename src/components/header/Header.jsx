import React from 'react';
import './header.css';
import CTA from './CTA';
import Me from '../../assets/assets/se.png';
import Socials from './HeaderC';

const Header = () => {
  return (
    <header>
        <div className="container headerCon">
          <div className='mcdf'>
            <div className='ac'>
            <h4>Hello I'm</h4>
            <h1>Saiyad Abu Naeem</h1>
            <h4 className="text-light">Front-End Developer</h4>
            </div>
            <div className='sc'>
            <CTA/>
            <Socials/>
            </div>
            
            
          </div>
            
            
            <div className='me'>
            
                <img src={Me} alt='me'/>
                

            </div>
        </div>




    </header>
  )
}

export default Header