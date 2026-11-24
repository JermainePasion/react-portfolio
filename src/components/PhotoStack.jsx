import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import useMediaQuery from '../hooks/useMediaQuery';
import photo1 from '../assets/PhotoStack1.png';
import photo2 from '../assets/PhotoStack2.png';
import photo3 from '../assets/PhotoStack3.png';
import photo4 from '../assets/PhotoStack4.png';

const steps = [
  { src: photo1, label: 'Step 1: Message us for inquiries' },
  { src: photo2, label: 'Step 2: Layout and price quote' },
  { src: photo3, label: 'Step 3: Production' },
  { src: photo4, label: 'Step 4: Deliver' },
];

// Same tilts as before: -6°, -3°, 0°, 3°
const rotations = [-6, -3, 0, 3];
const LEAVE_MS = 350;

export default function PhotoStack() {
  // Fan layout from Tailwind's `md` breakpoint up, stacked deck below it.
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // Desktop: which step is lifted. Mobile: deck order, order[0] is the card on top.
  const [activeStep, setActiveStep] = useState(null);
  const [order, setOrder] = useState(() => steps.map((_, i) => i));
  const [leaving, setLeaving] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  // Reset state when switching between fan and deck (e.g. rotating a tablet)
  useEffect(() => {
    setActiveStep(null);
    setOrder(steps.map((_, i) => i));
    setLeaving(false);
  }, [isDesktop]);

  // Mobile: slide the top card off to the side, then tuck it at the back of the deck
  const nextCard = () => {
    if (leaving) return;
    setLeaving(true);
    timer.current = setTimeout(() => {
      setOrder((o) => [...o.slice(1), o[0]]);
      setLeaving(false);
    }, LEAVE_MS);
  };

  const jumpTo = (stepIndex) => {
    setOrder(steps.map((_, i) => (stepIndex + i) % steps.length));
  };

  const handleClick = (stepIndex) => {
    if (isDesktop) {
      setActiveStep((current) => (current === stepIndex ? null : stepIndex));
    } else {
      nextCard();
    }
  };

  return (
    <div className="flex flex-col items-center px-4">
      {/*
        --card = photo size, --step = horizontal gap between fanned photos.
        Both scale with the screen, so the fan always fits and stays centered.
      */}
      <div
        className={clsx(
          'relative',
          '[--card:min(72vw,260px)] [--step:0px]',
          'md:[--card:200px] md:[--step:135px]',
          'lg:[--card:250px] lg:[--step:175px]',
          'xl:[--card:280px] xl:[--step:195px]'
        )}
        style={{
          width: `calc(var(--card) + var(--step) * ${steps.length - 1})`,
          height: isDesktop ? 'calc(var(--card) + 3rem)' : 'calc(var(--card) + 2.5rem)',
        }}
      >
        {steps.map((step, stepIndex) => {
          const position = isDesktop ? stepIndex : order.indexOf(stepIndex);
          const isActive = isDesktop && activeStep === stepIndex;
          const isTop = !isDesktop && position === 0;
          const isLeaving = isTop && leaving;

          const rotation = isActive ? 0 : isLeaving ? 14 : rotations[position];

          return (
            <button
              key={step.src}
              type="button"
              onClick={() => handleClick(stepIndex)}
              aria-label={isDesktop ? step.label : `${step.label}. Tap for the next step.`}
              aria-pressed={isDesktop ? isActive : undefined}
              className={clsx(
                'absolute block w-[var(--card)] cursor-pointer rounded-2xl',
                'rotate-[var(--r)] transition-all duration-500 ease-out',
                'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/40',
                // Desktop: hover peek + click to lift
                isDesktop && !isActive && 'hover:-translate-y-3 hover:rotate-0',
                isActive && '-translate-y-5 scale-105',
                // Mobile: top card slides away before going to the back
                isLeaving && 'translate-x-[110%] opacity-0'
              )}
              style={{
                '--r': `${rotation}deg`,
                left: isDesktop ? `calc(var(--step) * ${stepIndex})` : 0,
                top: isDesktop ? '1.5rem' : `${position * 8}px`,
                zIndex: isDesktop ? (isActive ? 50 : 10 + stepIndex) : steps.length - position,
              }}
            >
              <span
                className={clsx(
                  'block overflow-hidden rounded-2xl bg-white p-1.5 ring-1 ring-black/5 transition-shadow duration-500',
                  isActive || isTop ? 'shadow-2xl shadow-brand/30' : 'shadow-lg'
                )}
              >
                <img
                  src={step.src}
                  alt={step.label}
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  className="block aspect-square w-full rounded-xl object-cover"
                />
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile: progress dots (tap to jump to a step) */}
      {!isDesktop && (
        <div className="mt-6 flex items-center gap-2">
          {steps.map((step, i) => (
            <button
              key={step.src}
              type="button"
              onClick={() => jumpTo(i)}
              aria-label={`Show ${step.label}`}
              className={clsx(
                'h-2.5 rounded-full transition-all duration-300',
                order[0] === i ? 'w-7 bg-brand' : 'w-2.5 bg-brand/25 hover:bg-brand/50'
              )}
            />
          ))}
        </div>
      )}


    </div>
  );
}
