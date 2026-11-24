import { useState } from 'react';
import clsx from 'clsx';
import { Zap, Wallet, MessageCircle, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';

/*
  Each reason is a button pin. Front = the printed face, back = the metal
  backing with its pin needle. Hover (desktop) or tap (any device) flips it.
  `fit` is the word's size relative to the pin, so long words still fit.
*/
const pins = [
  {
    icon: Zap,
    word: 'Fast',
    fit: '17cqw',
    text: 'We get your orders done quickly.',
    face: '#f4c04e',
    ink: '#1d5f80',
    tilt: -8,
    lift: 'md:translate-y-3',
  },
  {
    icon: Wallet,
    word: 'Affordable',
    fit: '11.5cqw',
    text: 'Student-friendly prices on every order.',
    face: '#1d6b89',
    ink: '#ffffff',
    tilt: 5,
    lift: 'md:-translate-y-2',
  },
  {
    icon: MessageCircle,
    word: 'Communicative',
    fit: '8.8cqw',
    text: 'We keep you posted from layout to delivery.',
    face: '#f29bb5',
    ink: '#1d5f80',
    tilt: -4,
    lift: 'md:translate-y-5',
  },
  {
    icon: Sparkles,
    word: 'Quality',
    fit: '13cqw',
    text: "Quality work, because that's what you deserve.",
    face: '#8fcfae',
    ink: '#1d5f80',
    tilt: 7,
    lift: 'md:-translate-y-1',
  },
];

function Pin({ pin, index }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = pin.icon;
  const rimId = `pin-rim-${index}`;

  return (
    <div className={clsx('flex justify-center', pin.lift)}>
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        className="group @container size-[min(40vw,190px)] cursor-pointer rounded-full [perspective:900px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/40 md:size-[200px]"
        style={{ rotate: `${pin.tilt}deg` }}
      >
        <span
          className={clsx(
            'relative block size-full rounded-full transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] [transform-style:preserve-3d] motion-reduce:transition-none',
            'md:group-hover:[transform:rotateY(180deg)]',
            flipped && '[transform:rotateY(180deg)]'
          )}
        >
          {/* Front: printed face */}
          <span
            className="absolute inset-0 flex flex-col items-center justify-center gap-[3cqw] rounded-full [backface-visibility:hidden]"
            style={{
              color: pin.ink,
              backgroundColor: pin.face,
              backgroundImage:
                'radial-gradient(circle at 32% 24%, rgba(255,255,255,.6), rgba(255,255,255,0) 42%), radial-gradient(circle, rgba(0,0,0,0) 64%, rgba(0,0,0,.16) 100%)',
              boxShadow:
                '0 14px 22px -10px rgba(29,95,128,.55), inset 0 -5px 10px rgba(0,0,0,.14), inset 0 4px 8px rgba(255,255,255,.45)',
            }}
          >
            {/* Rim print, like a real pin */}
            <svg viewBox="0 0 200 200" aria-hidden="true" className="absolute inset-0 size-full opacity-60">
              <defs>
                <path id={rimId} d="M 22 100 A 78 78 0 0 1 178 100" />
              </defs>
              <text fill="currentColor" fontSize="11" fontWeight="600" letterSpacing="2.5">
                <textPath href={`#${rimId}`} startOffset="50%" textAnchor="middle">
                  squirkle prints &apos;n things
                </textPath>
              </text>
            </svg>

            <Icon aria-hidden="true" className="size-[20cqw]" strokeWidth={2.4} />
            <span className="font-bold leading-none" style={{ fontSize: pin.fit }}>
              {pin.word}
            </span>
          </span>

          {/* Back: metal backing with the pin needle */}
          <span
            className="absolute inset-0 flex items-center justify-center rounded-full [backface-visibility:hidden] [transform:rotateY(180deg)]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 36% 28%, #ffffff, #d4d9de 48%, #a3abb3 100%)',
              boxShadow:
                '0 14px 22px -10px rgba(29,95,128,.55), inset 0 0 0 4cqw rgba(255,255,255,.35), inset 0 -4px 10px rgba(0,0,0,.18)',
            }}
          >
            {/* needle + clasp */}
            <span aria-hidden="true" className="absolute left-[20%] right-[20%] top-[24%] h-[1.6cqw] rounded-full bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-500 shadow-sm" />
            <span aria-hidden="true" className="absolute left-[16%] top-[21%] size-[7cqw] rounded-full bg-zinc-400 ring-2 ring-zinc-300" />
            <span aria-hidden="true" className="absolute right-[15%] top-[20.5%] h-[8cqw] w-[6cqw] rounded-[2cqw] bg-zinc-400 ring-2 ring-zinc-300" />

            <span className="mt-[10cqw] max-w-[68%] text-center text-[8.2cqw] font-semibold leading-snug text-brand-dark">
              {pin.text}
            </span>
          </span>
        </span>
      </button>
    </div>
  );
}

export default function WhySquirkle() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
      <SectionHeading>Why Squirkle?</SectionHeading>

      <div className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
        {pins.map((pin, i) => (
          <Pin key={pin.word} pin={pin} index={i} />
        ))}
      </div>
    </section>
  );
}
