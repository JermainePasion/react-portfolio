import React from 'react'
import logo from '../assets/logo.svg'

export default function Logo() {
  return (
    <div className='logo h-16 w-45'>
      <a href='/'>
      <img src={logo} />
      </a>
    </div>
  )
}
