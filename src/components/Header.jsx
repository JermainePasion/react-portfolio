import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

export default function Header() {
  return (
    <header className="bg-dark-bckground sticky top-0 z-[20] flex mx-auto w-full items-center justify-between border-gray-500 p-8">
      <Logo/>
      <Nav/>
    
    </header>   
  )
}
