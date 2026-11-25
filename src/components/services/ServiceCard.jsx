import { useState } from 'react';
import clsx from 'clsx';
import { ChevronDown, Images, ReceiptText } from 'lucide-react';
import Button from '../Button';
import PinSizeCompare from './PinSizeCompare';

export default function ServiceCard({ service, onShowPrices }) {
  const { variants, photos = [], options = [] } = service;
  const [selected, setSelected] = useState(variants?.initial);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const variant = variants?.items.find((v) => v.value === selected);
  const image = variant ? { src: variant.photo, alt: variant.alt } : photos[photoIndex];
  const canCycle = !variant && photos.length > 1;

  const detailsId = `details-${service.id}`;
  const note = variant?.note || service.note;
  const hasDetails = Boolean(variant?.text || variant?.size || note);

  const photoEl = (
    <img
      key={image.src}
      src={image.src}
      alt={image.alt}
      loading="lazy"
      className="aspect-[5/4] w-full object-cover animate-photo-in motion-reduce:animate-none"
    />
  );

  return (
    <article className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-brand/10">
      {canCycle ? (
        // Several photos: tap to see the next one
        <button
          type="button"
          onClick={() => setPhotoIndex((i) => (i + 1) % photos.length)}
          aria-label={`Photo ${photoIndex + 1} of ${photos.length}: ${image.alt}. Show next photo.`}
          className="relative block w-full cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-brand/40"
        >
          {photoEl}
          <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-brand shadow-md">
            <Images size={14} aria-hidden="true" />
            {photoIndex + 1}/{photos.length}
          </span>
        </button>
      ) : (
        photoEl
      )}

      <div className="p-6">
        <h2 className="text-2xl font-bold text-brand">{service.label}</h2>
        <p className="mt-2 text-brand-dark/80">{service.blurb}</p>

        {variant ? (
          // Clickable chips: pick a type/size to see its photo
          <div role="radiogroup" aria-label={variants.label} className="mt-4 flex flex-wrap gap-2">
            {variants.items.map((item) => {
              const active = item.value === selected;
              return (
                <button
                  key={item.value}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setSelected(item.value)}
                  className={clsx(
                    'rounded-full px-3 py-1 text-sm font-semibold transition-colors duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40',
                    active ? 'bg-brand text-white' : 'bg-brand/8 text-brand hover:bg-brand/15'
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        ) : (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${service.label} options`}>
            {options.map((option) => (
              <li key={option} className="rounded-full bg-brand/8 px-3 py-1 text-sm font-semibold text-brand">
                {option}
              </li>
            ))}
          </ul>
        )}

        {/* Extra info stays tucked away until asked for */}
        {hasDetails && (
          <div
            id={detailsId}
            className={clsx(
              'grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none',
              open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            )}
          >
            <div className="overflow-hidden" inert={!open}>
              <div className="mt-5 space-y-4 border-t border-brand/10 pt-5">
                {variant?.text && <p className="text-brand-dark/85">{variant.text}</p>}
                {variant?.size && <PinSizeCompare size={variant.size} shape={variant.shape} />}
                {note && <p className="text-sm text-brand-dark/70">{note}</p>}
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => onShowPrices(variant?.priceIndex ?? 0)}>
            <ReceiptText size={16} aria-hidden="true" /> See prices
          </Button>
          {hasDetails && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls={detailsId}
            >
              {open ? 'Less details' : 'More details'}
              <ChevronDown
                size={16}
                aria-hidden="true"
                className={clsx('transition-transform duration-300', open && 'rotate-180')}
              />
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
