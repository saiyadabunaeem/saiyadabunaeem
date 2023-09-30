import React from 'react';
import './port.css';
import img1 from '../../assets/assets/disney.png';
import img2 from '../../assets/assets/portfolio2.jpg';
import img3 from '../../assets/assets/portfolio3.jpg';
import img4 from '../../assets/assets/portfolio4.jpg';
import img5 from '../../assets/assets/portfolio5.png';
import img6 from '../../assets/assets/portfolio6.jpg';

const Port = () => {
  return (
    <section className='container'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='portCon'>
        <article className='portItem'>
          <div className='portImg'>
              <img src={img1}></img>
          </div>
          <h3>Disney+ Clone</h3>
          <div className="portCTA">
            <a href='https://github.com/saiyadabunaeem/disneypc' className='btn'>Github</a>
          <a href='https://saiyadabunaeem.github.io/disneypc' className='btn btn-primary'>Live Demo</a>
          </div>
          
        </article>

        <article className='portItem'>
          <div className='portImg'>
              <img src={img2}></img>
          </div>
          <h3>YummEat</h3>
          <div className="portCTA">
            <a href='https://github.comsaiyadabunaeem/yumm' className='btn'>Github</a>
          <a href='https://saiyadabunaeem.github.io/yumm' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portItem'>
          <div className='portImg'>
              <img src={img3}></img>
          </div>
          <h3>GPT-3</h3>
          <div className="portCTA">
            <a href='https://github.com/saiyadabunaeem' className='btn'>Github</a>
          <a href='https://saiyadabunaeem.github.io/gptnew' className='btn btn-primary'>Live Demo</a>
          </div>
          
        </article>



        {/*gitthub*/}



        
        

      </div>


    </section>
  )
}

export default Port