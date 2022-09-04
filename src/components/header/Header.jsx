import React from 'react'
import './header.css'
import Cta from './CTA'
import me from '../../assets/me.png'
import Socials from './Socials'
function Header() {
  return (
   <header>
     <div className="container header__container">
       <h5>Hello I'am</h5>
       <h1>Gula Ibadova</h1>
       <h5 className="text-light">Frontend Developer</h5>
       <Cta/>
       <Socials/>
       <div className='me'>
         <img src={me} alt='me' className='my'/>
       </div>

       <a href="#contact" className='scroll_down'>Scroll Down</a>
     </div>
   </header>
  )
}

export default Header