import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import frontimg1 from '../assets/imomaine.jpg';
import frontimg2 from '../assets/imomaine.jpg';
import frontimg3 from '../assets/imomaine.jpg';
import frontimg4 from '../assets/imomaine.jpg';
import frontimg5 from '../assets/imomaine.jpg';
import frontimg6 from '../assets/imomaine.jpg';
export default function Products() {
  const [openIndex, setOpenIndex] = useState(null);

  const products = [
    {
      title: "CHARMS",
      cover: frontimg1,
      images: [frontimg1, frontimg1, frontimg1, frontimg1, frontimg1, frontimg1, frontimg1],
      bgColor: "bg-[#f1f0ee]",
      expandedColor: "bg-[#1d5f80]"
    },
    {
      title: "STICKERS",
      cover: frontimg2,
      images: [frontimg2, frontimg2, frontimg2, frontimg1, frontimg1, frontimg1],
      bgColor: "bg-[#f1f0ee]",
      expandedColor: "bg-[#1d5f80]"
    },
    {
      title: "HAIR CLIPS",
      cover: frontimg3,
      images: [frontimg3, frontimg3, frontimg1, frontimg1, frontimg1, frontimg1],
      bgColor: "bg-[#f1f0ee]",
      expandedColor: "bg-[#1d5f80]"
    },
  ];

  const toggleSlider = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow  py-10 px-4 space-y-5">
        {products.map((product, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`w-full flex justify-center p-6 rounded-lg transition-all duration-300 ${
              isOpen ? product.expandedColor : product.bgColor
              }`}>
              {isOpen ? (
                <div className="w-full overflow-x-auto">
                  <div className="flex space-x-4 px-4 py-6">
                    {product.images.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt={`Slide ${idx}`}
                        className="w-60 h-60 object-cover rounded shadow flex-shrink-0"
                      />
                    ))}
                    <button
                      className="text-red-600 font-bold text-xl ml-4"
                      onClick={() => setOpenIndex(null)}
                    >
                      X
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className="cursor-pointer text-center"
                  onClick={() => toggleSlider(index)}
                >
                  <img
                    src={product.cover}
                    alt={product.title}
                    className="w-60 h-60 object-cover rounded shadow-lg mx-auto"
                  />
                  <p className="mt-2 text-lg font-semibold text-[#1d5f80]">
                    {product.title}
                  </p>
                </div>
                      )}
            </div>
            );
          })}
      </div>

      <Footer />
    </div>
  );
}
