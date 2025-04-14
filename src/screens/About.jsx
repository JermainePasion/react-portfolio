import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutUs from '../assets/AboutUs.png'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
    <Header />

    <div className="flex-grow flex justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-10">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row items-start justify-between gap-7 bg-[#1d6b89] text-white p-6 sm:p-10 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"> 
          <div className="flex-1 w-full">
            <h1 className=" font-bold uppercase text-2xl sm:text-3xl md:text-4xl text-center mb-4 justify-center">
              Uni students with a dream!
            </h1>
            <h1 className='text-center font-Fredoka  mt-10 '>
              
              WHILE STUDYING, WE QUICKLY REALIZED WE WERE BROKE. SO WE DECIDED TO TAKE MATTERS IN OUR OWN HANDS, AND START A PRINTING BUSINESS!<br></br><br></br>

              WE REALIZED WE WANTED TO SHARE OUR ARTISTIC AND TECHINCAL SKILLS TO THE WORLD - ESPECIALLY TO OUR FELLOW STUDENTS!  <br></br><br></br>

              WROVIDING AFFORDABLE AND QUALIIY SERVICES FOR ANYONE WHO WANTS TO SELL, SHARE, OR MATERIALIZE THEIR DESIGNS!<br></br><br></br>

              WE ARE DTI AND BIR-REGISTERED BUSINESS AS WELL! 
            </h1>

            <h1 className='text-center font-Fredoka  mt-10 font-bold uppercase text-2xl sm:text-2xl md:text-2xl'>
            
              YAY US!
            </h1>
          </div>
          <img src={AboutUs} alt="imoburat" className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg object-cover"/> 
        </div>
      </div>
    </div>
    <Footer />
  </div>
    
    
    
  )
}
