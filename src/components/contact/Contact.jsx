import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form= useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k8x5q5n', 'template_bt2sz0e', form.current, 'llTs5GkzbKlK6r75i')
    e.target.reset();
      }
  return (
    <section id='contact' >
      <h5>Get in Touch</h5>
      <h2>Contact ME</h2>
      <div className='container contact'>
        <div className="contactOptions">
        <article className='contactOption'>
                <MdOutlineEmail className='aboutIcon'/>
                <h4>Email</h4>
                <h5>saiyadabunaeem@gmail.com</h5>
                <a href='saiyadabunaeem@gmail.com'>Send a Message</a>
            </article>
            <article className='contactOption'>
                <RiMessengerLine className='aboutIcon'/>
                <h4>Messenger</h4>
                <h5>Saiyad Abu Naeem</h5>
                <a href='m.me/soyodabu.naim'>Send a Message</a>
            </article>
            <article className='contactOption'>
                <BsWhatsapp className='aboutIcon'/>
                <h4>WhatsApp</h4>
                <h5>+8801770579002</h5>
                <a href='whatsapp.com/saiyadabunaeem'>Send a Message</a>
            </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>

      </div>
      </section>
  )
}

export default Contact