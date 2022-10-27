import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'
import { FiDribbble } from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/ahsan-zaidi-25641b254/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com' target="_blank"><FiGithub /></a>
        <a href='https://dribbble.com' target="_blank"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials