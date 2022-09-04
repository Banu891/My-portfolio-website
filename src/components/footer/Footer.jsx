import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

function Footer() {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>G.I</a>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/gula.iva/"><BsFacebook /></a>
        <a href="https://www.linkedin.com/in/banu-ibadova-310b71245/"><AiFillLinkedin /></a>
        <a href="https://www.instagram.com/gula_ibadova/"><AiOutlineInstagram/></a>
      </div>
      <div className='footer__copyright'>
        <small> &copy; Gula Ibadova Frontend Developer</small>
      </div>
    </footer>
  )
}

export default Footer