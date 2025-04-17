import React, {useState} from 'react';

import photo1 from "../assets/prices/ArtPrint.png";
import photo2 from "../assets/prices/ButtonPin.png";
import photo3 from "../assets/prices/PhotoCard.png";
import photo4 from "../assets/prices/PhotoBooth.png";
import photo5 from "../assets/prices/3dPrint.png";
import photo6 from "../assets/prices/Stickers.png";

const images = [
  {src: photo1},
  {src: photo2},
  {src: photo3},
  {src: photo4},
  {src: photo5},
  {src: photo6}
]


const ImageGrid = () => {

  const [modalImage, setModalImage] = useState(null);

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto mt-10">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="flex justify-center items-center bg-gray-200 rounded-lg shadow-lg mx-4 cursor-pointer"
            onClick={() => openModal(img)}
          >
            <img src={img.src} alt={img.alt} className="w-full h-auto object-cover rounded-lg" />
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-5xl font-bold z-50"
            >
              &times;
            </button>
          <div className="relative">
            <img
              src={modalImage.src}
              alt={modalImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGrid;
