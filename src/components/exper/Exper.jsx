import React from 'react';
import './exper.css';
import { BsPatchCheckFill} from 'react-icons/bs'
const Exper = () => {
  return (
    <section id='exper' className='container'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="experCon">
        <div className="experFront">
          <h3>FrontEnd Development</h3>
          <div className="frontCon">
            <article className='details'>
              < BsPatchCheckFill className='icons'/>
              <div>
                <h4>HTML</h4>
              <small className='smallTxt'>Experienced</small>
              </div>
              

            </article>
            <article className='details'>
              < BsPatchCheckFill className='icons'/>
              <div>
                <h4>CSS</h4>
              <small className='smallTxt'>Intermediate</small>
              </div>
              

            </article>
            <article className='details'>
              < BsPatchCheckFill className='icons'/>
              <div>
                <h4>JavaScript</h4>
              <small className='smallTxt'>Experienced</small>
              </div>
              

            </article>
            <article className='details'>
              < BsPatchCheckFill className='icons'/>
              <div>
                <h4>Bootstrap</h4>
              <small className='smallTxt'>Experienced</small>
              </div>
              

            </article>
            <article className='details'>
              < BsPatchCheckFill className='icons'/>
              <div>
                <h4>Tailwind</h4>
              <small className='smallTxt'>Experienced</small>
              </div>
              

            </article>
            <article className='details'>
              < BsPatchCheckFill className='icons'/>
              <div>
                <h4>React</h4>
              <small className='smallTxt'>Experienced</small>
              </div>
              

            </article>
          </div>
        </div>
        <div className="experBack">



        <h3>BackEnd Development</h3>
          <div className="frontCon">
            <article className='details'>
              < BsPatchCheckFill className='icons'/>
              <div><h4>NodeJS</h4>
              <small className='smallTxt'>Experienced</small>
             </div>
              
            </article>
            <article className='details'>
              < BsPatchCheckFill className='icons'/>
              <div>
                <h4>MongoDB</h4>
              <small className='smallTxt'>Intermediate</small>
              </div>
              

            </article>
            <article className='details'>
              < BsPatchCheckFill className='icons'/>
              <div>
                <h4>PHP</h4>
              <small className='smallTxt'>Experienced</small>

              </div>
              
            </article>
            <article className='details'>
              < BsPatchCheckFill className='icons'/>
              <div>
                <h4>ExpressJS</h4>
              <small className='smallTxt'>Experienced</small>
              </div>
              

            </article>
            <article className='details'>
              < BsPatchCheckFill className='icons'/>
              <div>
                <h4>MySQL</h4>
              <small className='smallTxt'>Experienced</small>

              </div>
              
            </article>
            <article className='details'>
              < BsPatchCheckFill className='icons'/>
              <div>
                <h4>Python</h4>
              <small className='smallTxt'>Experienced</small>

              </div>
              
            </article>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Exper