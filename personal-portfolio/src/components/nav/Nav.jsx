import React from 'react'
import './nav.css'
import { AiFillHome } from 'react-icons/ai'
import { FaUserTie } from 'react-icons/fa'
import { BsBookHalf } from 'react-icons/bs'
import { RiServiceLine } from 'react-icons/ri'
import { AiOutlineContacts } from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <a href='#' className='active'><AiFillHome /></a>
      <a href='#about'><FaUserTie /></a>
      <a href='#experience'><BsBookHalf /></a>
      <a href='#services'><RiServiceLine /></a>
      <a href='#contact'><AiOutlineContacts /></a>
    </nav>
  )
}

export default Nav