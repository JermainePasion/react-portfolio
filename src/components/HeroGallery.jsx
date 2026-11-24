import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Images } from 'lucide-react';
import front from '../assets/Front.png';
import pic1 from '../assets/hero/pic1.jpg';
import pic2 from '../assets/hero/pic2.jpg';
import pic3 from '../assets/hero/pic3.jpg';
import pic4 from '../assets/hero/pic4.png';
import pic5 from '../assets/hero/pic5.png';
import pic6 from '../assets/hero/pic6.jpg';
import pic7 from '../assets/hero/pic7.jpg';
import pic8 from '../assets/hero/pic8.jpg';
import pic9 from '../assets/hero/pic9.jpg';

// First photo is the one shown on load. Click/tap cycles through the rest.
const photos = [
  { src: front, alt: 'Custom photo button pins from Squirkle held in a hand' },
  { src: pic1, alt: 'Bags of custom stickers and button pins packed for an order' },
  { src: pic2, alt: 'Packed button pins and die-cut stickers with the Squirkle logo' },
  { src: pic3, alt: 'Die-cut character stickers laid out in rows' },
  { src: pic4, alt: 'Yellow star headphone charm on white headphones' },
  { src: pic5, alt: 'Pink bow headphone charm on white headphones' },
  { src: pic6, alt: 'Pile of glossy die-cut character stickers' },
  { src: pic7, alt: 'Pink lily headphone charm on white headphones' },
  { src: pic8, alt: 'Blue and pink butterfly wing headphone charm' },
  { src: pic9, alt: 'Art prints in clear sleeves' },
];

// Each photo lands at a slightly different angle, like prints tossed on a table
const tilts = [-2, 3, -3, 2, -1, 3, -2, 1, -3, 2];

export default function HeroGallery() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(null);
  const [loaded, setLoaded] = useState(true); // first photo shows immediately

  // Preload the next photo so it's ready before the click
  useEffect(() => {
    const img = new Image();
    img.src = photos[(index + 1) % photos.length].src;
  }, [index]);

  const showNext = () => {
    setPrev(index);
    setLoaded(false);
    setIndex((i) => (i + 1) % photos.length);
  };

  const current = photos[index];

  return (
    <button
      type="button"
      onClick={showNext}
      aria-label={`Photo ${index + 1} of ${photos.length}: ${current.alt}. Show next photo.`}
      className={clsx(
        'group relative block aspect-square w-full cursor-pointer overflow-hidden rounded-[2rem] bg-white',
        'shadow-2xl shadow-brand/25 rotate-[var(--tilt)] transition-[rotate,scale] duration-500 ease-out',
        'hover:rotate-0 active:scale-[0.98]',
        'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/40'
      )}
      style={{ '--tilt': `${tilts[index]}deg` }}
    >
      {/* Previous photo stays underneath while the new one fades in */}
      {prev !== null && (
        <img
          key={`prev-${prev}`}
          src={photos[prev].src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover"
        />
      )}
      <img
        key={index}
        src={current.src}
        alt={current.alt}
        onLoad={() => setLoaded(true)}
        className={clsx(
          'absolute inset-0 size-full object-cover',
          // Wait until the photo has downloaded, then fade it in over the previous one
          !loaded && 'opacity-0',
          loaded && prev !== null && 'animate-photo-in motion-reduce:animate-none'
        )}
      />

      <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-brand shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
        <Images size={14} aria-hidden="true" />
        {index + 1}/{photos.length}
      </span>
    </button>
  );
}
