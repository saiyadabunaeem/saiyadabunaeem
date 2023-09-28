import React from 'react';
import './about.css';
import Me from '../../assets/assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about' className='container aboutt'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="aboutCon">
        <div className="aboutMe">
          <div className="aboutMeImg">
            <img src={Me} alt='me'/>
          </div>
        </div>
        <div className="aboutC">
          <div className="aboutCards">
            <article className='aboutCard'>
                <FaAward className='aboutIcon'/>
                <h5>Expoerience</h5>
                <small>1+ Year Working</small>
            </article>
            <article className='aboutCard'>
                <FiUsers className='aboutIcon'/>
                <h5>Clients</h5>
                <small>20+ Worldwide</small>
            </article>
            <article className='aboutCard'>
                <VscFolderLibrary className='aboutIcon'/>
                <h5>Projects</h5>
                <small>50+ Completed Projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, iusto laudantium quo expedita nam autem ipsa illo molestiae, explicabo ad dolores, at minima commodi animi quae dignissimos quidem consequatur. Modi.</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About