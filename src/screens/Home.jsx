import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import frontimg from '../assets/placeholder.png'
import PhotoStack from '../components/PhotoStack';
import { useState } from "react";

import Front from '../assets/Front.png'
import ImageGrid from '../components/ImageGrid';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

const Box = ({ children }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (window.innerWidth < 1367) {
      setActive(!active);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`font-Fredoka font-bold uppercase text-xl p-8 text-center rounded-lg min-h-[200px] shadow-none transition-all duration-300 cursor-pointer mx-2.5
        ${active ? "bg-white text-[#1d6b89] shadow-lg shadow-gray-400" : "bg-[#1d6b89] text-white"}
        hover:bg-white hover:text-[#1d6b89] hover:shadow-lg hover:shadow-gray-400`}>
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Squirkle – Fast, Affordable & Quality Services</title>
        <meta name="description" content="Squirkle offers fast, affordable, and quality services tailored for students and clients. Communicative every step of the way." />
        <meta name="keywords" content="squirkle, affordable services, fast services, quality, student-friendly" />
        <meta name="author" content="Squirkle" />
        <link rel="canonical" href="https://squirkle-website.vercel.app/" />

        {/* Open Graph (Facebook, LinkedIn previews) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://squirkle-website.vercel.app/" />
        <meta property="og:title" content="Squirkle – Fast, Affordable & Quality Services" />
        <meta property="og:description" content="Squirkle offers fast, affordable, and quality services tailored for students and clients." />

        {/* Instagram Card */}
        <meta name="Instagram:card" content="summary_large_image" />
        <meta name="Instagram:url" content="https://www.instagram.com/squirkleph/" />
        <meta name="Instagram:title" content="Squirkle – Fast, Affordable & Quality Services" />
        <meta name="Instagram:description" content="Squirkle offers fast, affordable, and quality services tailored for students and clients." />
      </Helmet>

      <Header/>
      <div className="flex justify-center px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="w-full max-w-[700px]">
          <img src={Front} alt="Squirkle front banner" className="w-full h-auto"/>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center tracking-widest text-[#1d6b89] font-bold uppercase text-2xl m-10">
          <h1>Why Squirkle?</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mt-10">
          <Box><h2 className='text-2xl'>Fast</h2><p className='normal-case text-xl'>We pride ourselves in providing our services swiftly!</p></Box>
          <Box><h2 className='text-2xl'>Affordable</h2><p className='normal-case text-xl'>We make sure our prices are affordable especially to students!</p></Box>
          <Box><h2 className='text-2xl'>Communicative</h2><p className='normal-case text-xl'>We make sure to communicate with the clients in every step of the way!</p></Box>
          <Box><h2 className='text-2xl'>Quality</h2><p className='normal-case text-xl'>We believe in providing quality services to our clients because it's what they deserve!</p></Box>
        </div>
      </div>

      <div className="flex flex-col items-center tracking-widest text-[#1d6b89] font-bold uppercase text-2xl m-10">
        <h2>Our Process</h2>
      </div>
      <div className="flex justify-center lg:mr-115 sm:mr-0">
        <PhotoStack />
      </div>

      <div className="flex flex-col items-center tracking-widest text-[#1d6b89] font-bold uppercase text-2xl m-10">
        <h2>Pricelist</h2>
      </div>
      <div>
        <ImageGrid />
      </div>

      <div className="flex justify-center items-center mt-20 mb-20">
        <ContactUs />
      </div>

      <Footer/>
    </div>
  )
}