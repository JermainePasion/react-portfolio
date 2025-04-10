import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import frontimg from '../assets/imomaine.jpg'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
    <Header />

    <div className="flex-grow flex justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-10">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row items-start justify-between gap-7 bg-[#1d6b89] text-white p-6 sm:p-10 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"> 
          <div className="flex-1 w-full">
            <h1 className="font-Fredoka font-bold uppercase text-2xl sm:text-3xl md:text-4xl text-center mb-4 justify-center">
              Uni students with a dream!
            </h1>
            <h1 className='text-justify '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
          </div>
          <img src={frontimg} alt="imoburat" className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg object-cover"/> 
        </div>
      </div>
    </div>
    <Footer />
  </div>
    
    
    
  )
}
