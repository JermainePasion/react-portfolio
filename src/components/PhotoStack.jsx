import React, { useState } from "react";
import photo1 from "../assets/PhotoStack1.png";
import photo2 from "../assets/PhotoStack2.png";
import photo3 from "../assets/PhotoStack3.png";
import photo4 from "../assets/PhotoStack4.png";

const photos = [
  { src: photo1},
  { src: photo2 },
  { src: photo3 },
  { src: photo4 },
];

const rotations = ["-rotate-6", "-rotate-3", "rotate-0", "rotate-3", "rotate-6"];

export default function PhotoStack() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [photoOrder, setPhotoOrder] = useState(photos);


  const handleClick = (index) => {
    if (window.innerWidth <= 854) { // For mobile screens
      const newOrder = [...photoOrder]; // Create a shallow copy of the photoOrder array
      const movedPhoto = newOrder.shift(); // Remove the first photo (front photo)
      newOrder.push(movedPhoto); // Add the first photo to the back of the array
      setPhotoOrder(newOrder); // Update the state with the new order
    } else { 
      setActiveIndex(index === activeIndex ? null : index); // Toggle active photo (click to select)
    }
  };

  return (
    <div className="relative h-[300px] sm:h-[400px] mt-6 flex justify-center">
      <div className="relative w-[250px] sm:w-[400px]">
        {photoOrder.map((photo, index) => {
          const isMobileOrSmall = window.innerWidth <= 854; // Only stack on smaller screens (up to 768px)
          const topPosition = `${index * (isMobileOrSmall ? 10 : 0)}px`; // Stack photos on mobile and center on desktop

          const leftPosition = isMobileOrSmall
          ? "50%" // center horizontally
          : `${index * 190}px`;

          const transformStyle = isMobileOrSmall
            ? "translateX(-50%)" // apply center correction
            : "none";

          return (
            <div
              key={index}
              onClick={() => handleClick(index)} 
              className={`absolute transition-all duration-500 cursor-pointer
                ${rotations[index % rotations.length]}
                ${activeIndex === index ? "translate-y-[-20px] rotate-0 z-50" : `z-${index + 10}`} 
              `}
              style={{
                top: topPosition,
                left: leftPosition, 
                transform: transformStyle
              }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg w-[250px] sm:w-[280px]">
                <img
                  src={photo.src}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
