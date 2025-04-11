import React, {useState} from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

import photo1 from "../assets/prices/ArtPrint.png";
import photo2 from "../assets/prices/ButtonPin.png";
import photo3 from "../assets/prices/PhotoCard.png";
import photo4 from "../assets/prices/PhotoBooth.png";



export default function Services() {

  const [isClicked, setIsClicked] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked); 
  };

  
  
  return (
    <div>
      <Header/>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto mt-20 mb-10 relative group"
      onMouseEnter={() => setShowPopover(true)}
      onMouseLeave={() => setShowPopover(false)}>
        
          <div
          onClick={handleClick}
          
          className={`m-5 group flex flex-col justify-center items-center rounded-lg shadow-lg mx-4 overflow-hidden transition-all duration-300 ${isClicked ? ' bg-[#1d6b89] scale-105 shadow-xl' : ''}`}
        >

          <div
          className={` mt-10 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-white text-sm text-gray-600 rounded-xl shadow-md px-5 py-4 transition-opacity duration-300 ${
            showPopover ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <h5 className=" mb-1 text-sm text-[#1d6b89] font-medium text-center">Click for More Details</h5>
        </div>
          <img
            src={photo3}
            alt="Image 3"
            className={`w-full h-auto object-cover rounded-t-lg transition-all duration-300 ${isClicked ? 'scale-110' : ''}`}
          />
          <div
            className={`absolute inset-0 p-4 text-white text-center flex justify-center items-center ${isClicked ? 'opacity-100 bg-[#1d6b89]' : 'opacity-0'}`}
          >
            <ul className='items-center font-bold tracking-widest uppercase'>
              <li>• custom made</li>
              <li>• Kiss-cut</li>
              <li>• die-cut</li>
            </ul>
          </div>
        </div>


        <div
          onClick={handleClick}
          className={`m-5 group flex flex-col justify-center items-center rounded-lg shadow-lg mx-4 overflow-hidden transition-all duration-300 ${isClicked ? 'bg-[#1d6b89] scale-105 shadow-xl' : ''}`}
        >
          <img
            src={photo3}
            alt="Image 3"
            className={`w-full h-auto object-cover rounded-t-lg transition-all duration-300 ${isClicked ? 'scale-110' : ''}`}
          />
          <div
            className={`absolute inset-0 p-4 text-white text-center flex justify-center items-center ${isClicked ? 'opacity-100 bg-[#1d6b89]' : 'opacity-0'}`}
          >
            <ul className='items-center font-bold tracking-widest uppercase'>
              <li>• custom made</li>
              <li>• 1.25</li>
              <li>• 1.75</li>
            </ul>
          </div>
        </div>

                
        <div
          onClick={handleClick}
          className={`m-5 group flex flex-col justify-center items-center rounded-lg shadow-lg mx-4 overflow-hidden transition-all duration-300 ${isClicked ? 'bg-[#1d6b89] scale-105 shadow-xl' : ''}`}
        >
          <img
            src={photo3}
            alt="Image 3"
            className={`w-full h-auto object-cover rounded-t-lg transition-all duration-300 ${isClicked ? 'scale-110' : ''}`}
          />
          <div
            className={`absolute inset-0 p-4 text-white text-center flex justify-center items-center ${isClicked ? 'opacity-100 bg-[#1d6b89]' : 'opacity-0'}`}
          >
            <ul className='items-center font-bold tracking-widest uppercase'>
              <li>• Keychains</li>
              <li>• Headphone CHarms</li>
              <li>• School Projects</li>
            </ul>
          </div>
        </div>
      </div>


      <div className="max-w-full mx-auto p-4 flex justify-center mb-15">
      <div
        className={`bg-[#1d6b89] rounded-xl text-white p-0 flex items-center shadow-lg transition-all duration-500 ease-in-out overflow-hidden ${
          isClicked ? "sm:w-[700px]" : "w-[320px]"
        }`}
      >
        <div
          className={`cursor-pointer transition-all duration-500 ease-in-out ${
            isClicked ? "w-1/2" : "w-full"
          }`}
          onClick={handleClick}
        >
          <img
            src={photo3}
            alt="Service"
            className="rounded-md w-full object-cover "
          />
        </div>

        {/* Sliding content */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden  ${
            isClicked ? "w-1/2 opacity-100 delay-200" : "w-0 opacity-0 delay-0"
          } text-sm`}
        >
          <div className="pl-2 text-center">
            <h2 className="text-xl font-bold  sm:text-3xl md:text-2xl text-center mb-4 justify-center tracking-wider">OTHER SERVICES !</h2>
            <ul className="items-center font-bold tracking-widest uppercase">
              <li>• ART PRINTS</li>
              <li>• PHOTO BOOTH PRINTS</li>
              <li>• INSTAX PRINTS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    
      <Footer />
    </div>
  )
}
