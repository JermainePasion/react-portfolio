import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

/**
 * Full-screen image viewer. Closes on Esc, backdrop click, or the X button.
 * With more than one image, arrow buttons / arrow keys switch between them.
 * `startIndex` picks which image it opens on.
 */
export default function ImageModal({ images, title, onClose, startIndex = 0 }) {
  const [index, setIndex] = useState(startIndex);
  const closeRef = useRef(null);
  const count = images.length;

  useEffect(() => {
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % count);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + count) % count);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [count, onClose]);

  const image = images[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm animate-photo-in"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white text-brand shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
      >
        <X size={22} />
      </button>

      <figure className="flex max-h-full flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className="max-h-[80vh] w-auto max-w-full rounded-2xl bg-white object-contain shadow-2xl animate-photo-in"
        />

        {count > 1 && (
          <div className="flex items-center gap-3 text-white">
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + count) % count)}
              aria-label="Previous"
              className="grid size-10 place-items-center rounded-full bg-white/15 transition-colors hover:bg-white/30"
            >
              <ChevronLeft size={22} />
            </button>
            <figcaption className="min-w-28 text-center text-sm font-semibold">
              {image.alt} ({index + 1}/{count})
            </figcaption>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % count)}
              aria-label="Next"
              className="grid size-10 place-items-center rounded-full bg-white/15 transition-colors hover:bg-white/30"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        )}
      </figure>
    </div>
  );
}
