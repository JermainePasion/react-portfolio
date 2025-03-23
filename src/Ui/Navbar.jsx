import React from 'react'
import Logo from './Logo'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z- bg[rgba(10,10,10,0.8]
    backdrop-blur-lg px-10 border-b border-white/10 shadow-xl">
        <div className = "max-w-5xl mx-auto px-4">
            <div className = "flex justify-between items-center font-mono h-16">
                <Logo/>
            </div>
        </div>
    </nav>
  )
}
