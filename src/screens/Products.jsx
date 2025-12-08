import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import frontimg1 from '../assets/imomaine.jpg';
import frontimg2 from '../assets/imomaine.jpg';
import frontimg3 from '../assets/imomaine.jpg';
import charm1 from '../assets/charms/8-bit/clock1.png';
import charm2 from '../assets/charms/8-bit/heart2.png';
import charm3 from '../assets/charms/8-bit/key2.png';
import charm4 from '../assets/charms/8-bit/skeleton1.png';
import charm5 from '../assets/charms/8-bit/Star1.png';

import csmStickers from '../assets/CSMStickers.png'
import charmFront from '../assets/3dPrint.png';
import StickersFront from '../assets/StickersFront.png';

import charm6 from '../assets/charms/Nature/leaf1.png';
import charm7 from '../assets/charms/Nature/moon1.png';
import charm8 from '../assets/charms/Nature/moon2 1.png';
import charm9 from '../assets/charms/Nature/Rose1.png';
import charm10 from '../assets/charms/Nature/wings.png';

import comingSoon from '../assets/ComingSoon.png'
export default function Products() {
  const [openIndex, setOpenIndex] = useState(null);

  const products = [
    {
      title: "CHARMS",
      cover: charmFront,
      images: [
        { src: charm1, link: "https://shopee.ph/Headphone-Charms-8-bit-Set-i.648980465.28983710398" },
        { src: charm2, link: "https://shopee.ph/Headphone-Charms-8-bit-Set-i.648980465.28983710398" },
        { src: charm3, link: "https://shopee.ph/Headphone-Charms-8-bit-Set-i.648980465.28983710398" },
        { src: charm4, link: "https://shopee.ph/Headphone-Charms-8-bit-Set-i.648980465.28983710398" },
        { src: charm5, link: "https://shopee.ph/Headphone-Charms-8-bit-Set-i.648980465.28983710398" },
        { src: charm6, link: "https://shopee.ph/Headphone-Charms-Nature-Set-i.648980465.24044099074" },
        { src: charm7, link: "https://shopee.ph/Headphone-Charms-Nature-Set-i.648980465.24044099074" },
        { src: charm8, link: "https://shopee.ph/Headphone-Charms-Nature-Set-i.648980465.24044099074" },
        { src: charm9, link: "https://shopee.ph/Headphone-Charms-Nature-Set-i.648980465.24044099074" },
        { src: charm10, link: "https://shopee.ph/Headphone-Charms-Nature-Set-i.648980465.24044099074" },
      ],
      bgColor: "bg-[#f1f0ee]",
      expandedColor: "bg-[#1d5f80]",
      
      
    },
    {
      title: "STICKERS",
      cover: StickersFront,
      images: [{ src: csmStickers, link: "https://shopee.ph/Chainsawman-Anime-%E2%80%A2-Waterproof-Matte-Stickers-%E2%80%A2-1mo6en-i.648980465.56401740578?extraParams=%7B%22display_model_id%22%3A365160970335%7D" }],
      bgColor: "bg-[#f1f0ee]",
      expandedColor: "bg-[#1d5f80]"
    },
    {
      title: "HAIR CLIPS",
      cover: comingSoon,
      images: [{ src: comingSoon }],
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
                <div className="w-full overflow-x-auto flex justify-center">
                  <div className="flex space-x-4 px-4 py-6">
                    {product.images.map((image, idx) => (
                      <a
                      key={idx}
                      href={image.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block flex-shrink-0"
                    >
                      <img
                        src={image.src}
                        alt={`Slide ${idx}`}
                        className="w-60 h-60 object-cover rounded shadow flex-shrink-0"
                      />
                    </a>
                    ))}
                    <button
                      className="text-white font-bold text-2xl ml-4"
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
