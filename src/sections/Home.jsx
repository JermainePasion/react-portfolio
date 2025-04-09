import React from 'react'
import Header from '../components/Header'
import frontimg from '../assets/placeholder.png'
import PhotoStack from '../components/PhotoStack';
import { useState } from "react";

import ImageGrid from '../components/ImageGrid';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

const Box = ({ children }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    // Only toggle on smaller screens (mobile)
    if (window.innerWidth < 1367) {
      setActive(!active);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`font-Fredoka font-bold uppercase text-xl p-8 text-center rounded-lg min-h-[200px] shadow-none transition-all duration-300 cursor-pointer 
        ${active ? "bg-white text-[#1d6b89] shadow-lg shadow-gray-400" : "bg-[#1d6b89] text-white"}
        hover:bg-white hover:text-[#1d6b89] hover:shadow-lg hover:shadow-gray-400`}>
      {children}
    </div>
  );
};

export default function Home() {
  return (
    
    <div >
    <Header/>
    <div className="flex justify-center px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="w-full max-w-[700px]">
        <img
          src={frontimg} alt="front image" className="w-full h-auto"/>
      </div>
    </div>
      <div>
        <div className="flex flex-col items-center tracking-widest  text-[#1d6b89] font-bold uppercase text-2xl m-10 ">
                <h1 className=''>Why squirkle?</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mt-10">
          <Box><h1 className='text-2xl'>Fast</h1><h1 className='normal-case text-xl'> We pride ourselves in providing our services swiftly!</h1></Box>
          <Box><h1 className='text-2xl'>Affordable</h1><h1 className='normal-case text-xl'> We make sure our prices are affordable especially to students!</h1></Box>
          <Box><h1 className='text-2xl'>Communicative</h1><h1 className='normal-case text-xl'> We make sure to communicate with the clients in every step of the way!</h1></Box>
          <Box><h1 className='text-2xl'>Quality</h1><h1 className='normal-case text-xl'> We believe in providing quality to services to our clients because it's what they deserve!</h1></Box>
        </div>
      </div>
      <div className="flex flex-col items-center tracking-widest  text-[#1d6b89] font-bold uppercase text-2xl m-10 ">
                <h1 className=''>Our Process</h1>
      </div>
      <div className="flex justify-center lg:mr-115 sm:mr-0">
        <PhotoStack />
      </div>

      <div className="flex flex-col items-center tracking-widest  text-[#1d6b89] font-bold uppercase text-2xl m-10 ">
                <h1 className=''>Pricelist</h1>
      </div>

      <div>
      <ImageGrid />
    </div >
    <div className="flex justify-center items-center mt-20 mb-20 ">
      <ContactUs />
    </div >
    <Footer/>
    </div>
  )
}
