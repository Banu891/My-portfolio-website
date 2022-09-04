import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'

function Socials() {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target='blank'><BsLinkedin/></a>
        <a href="https://github.com" target='blank'><AiFillGithub/></a>
        <a href="https://www.facebook.com" target='blank'><AiFillFacebook/></a>
    </div>
  )
}

export default Socials