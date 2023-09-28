import React, {useState} from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';


const Nav = () => {
  const [active, setActive]= useState('#');
  return (
    <nav>
      <a href='#' className={active === '#' ? 'active' : ''} onClick={()=>{
        setActive('#');
      }}><AiOutlineHome/></a>
      <a href='#about' className={active === '#about' ? 'active' : ''} onClick={()=>{
        setActive('#about');
      }}><AiOutlineUser/></a>
      <a href='#exper' className={active === '#exper' ? 'active' : ''} onClick={()=>{
        setActive('#exper');
      }}><BiBook/></a>
      <a href='#services'className={active === '#services' ? 'active' : ''} onClick={()=>{
        setActive('#services');
      }} ><RiServiceLine/></a>
      <a href='#contact' className={active === '#contact' ? 'active' : ''} onClick={()=>{
        setActive('#contact');
      }}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav