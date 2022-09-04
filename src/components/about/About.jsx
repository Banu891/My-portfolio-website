import React from 'react'
import './about.css'
import about from '../../assets/about.JPG'

function About() {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <img className='about__me-image' src={about} alt="me" />
        </div>
        <div className='about__content'>
          <p >
           I've been doing frontend development for over a year.
            I like to develop and learn something new. And this is the main reason why I chose the IT field.
            There is no limit to development in IT.
            </p> 
          <p>
            I love teamwork as well as solo projects!
            I am an extroverted introvert, so I am productive in any work environment.
          </p>
          <a href="#contact" className='btn btn-primary'> Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About