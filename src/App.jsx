import React from 'react'
import Header from './components/Header'
import frontimg from './assets/placeholder.png'


const Box = ({ children }) => {
  return (
    <div className="font-Fredoka font-bold uppercase text-xl bg-[#1d6b89] text-white p-8 text-center rounded-lg min-h-[200px] shadow-none transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 hover:bg-white hover:text-[#1d6b89]">
      {children}
    </div>
  );
};

export default function App() {
  return (
    <div >
    <Header/>
      <div className="flex justify-center px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="w-full max-w-[700px]">
          <img
            src={frontimg}
            alt="front image"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center tracking-widest  text-[#1d6b89] font-bold uppercase text-2xl m-10 ">
                <h1 className=''>Why squirkle?</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mt-13">
      <Box>FAST <br></br><h1> We pride ourselves in providing our services swiftly! </h1></Box>
      <Box>AFFORDABLE</Box>
      <Box>COMMUNICATIVE</Box>
      <Box>QUALITY</Box>
    </div>

      </div>
    </div>
  )
}
