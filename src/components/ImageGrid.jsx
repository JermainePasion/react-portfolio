import React from 'react';

import photo1 from "../assets/prices/ArtPrint.png";
import photo2 from "../assets/prices/ButtonPin.png";
import photo3 from "../assets/prices/PhotoCard.png";
import photo4 from "../assets/prices/PhotoBooth.png";
import photo5 from "../assets/prices/3dPrint.png";
import photo6 from "../assets/prices/Stickers.png";


const ImageGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto mt-10 ">
      <div className="flex justify-center items-center bg-gray-200 rounded-lg shadow-lg mx-4">
        <img src={photo1} alt="Image 1" className="w-full h-auto object-cover rounded-lg " />
      </div>
      <div className="flex justify-center items-center bg-gray-200 rounded-lg shadow-lg mx-4">
        <img src={photo2} alt="Image 2" className="w-full h-auto object-cover rounded-lg" />
      </div>
      <div className="flex justify-center items-center bg-gray-200 rounded-lg shadow-lg mx-4">
        <img src={photo3} alt="Image 3" className="w-full h-auto object-cover rounded-lg" />
      </div>
      <div className="flex justify-center items-center bg-gray-200 rounded-lg shadow-lg mx-4 ">
        <img src={photo4} alt="Image 4" className="w-full h-auto object-cover rounded-lg" />
      </div>
      <div className="flex justify-center items-center bg-gray-200 rounded-lg shadow-lg mx-4 ">
        <img src={photo5} alt="Image 5" className="w-full h-auto object-cover rounded-lg" />
      </div>
      <div className="flex justify-center items-center bg-gray-200 rounded-lg shadow-lg mx-4 ">
        <img src={photo6} alt="Image 6" className="w-full h-auto object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default ImageGrid;
