import { ArrowRight, BadgeCheck, ShoppingBag, Sparkles } from 'lucide-react';
import Button from './Button';
import heroImage from '../assets/Front.png';

const SHOPEE_URL = 'https://shopee.ph/squirkleprintsnthings';

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-12 pt-8 sm:px-8 md:grid-cols-2 md:pb-20 md:pt-14">
      {/* Copy */}
      <div className="text-center md:text-left">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
          <BadgeCheck size={14} />DTI &amp; BIR registered
        </span>

        <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-brand sm:text-5xl lg:text-6xl">
          Custom prints, pins <span className="text-brand-dark/70">&amp;</span> 3D prints
        </h1>

        <p className="mx-auto mt-5 max-w-md text-lg text-brand-dark/80 md:mx-0">
          Stickers, button pins, art prints and 3D printing. Fast, affordable, and made with care by two
          university students.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
          <Button href="#contact" size="lg">
            Get a quote <ArrowRight size={18} />
          </Button>
          <Button href={SHOPEE_URL} variant="shopee" size="lg">
            <ShoppingBag size={18} /> Shop on Shopee
          </Button>
        </div>
      </div>

      {/* Image */}
      <div className="relative isolate mx-auto w-full max-w-sm sm:max-w-md">
        <div aria-hidden="true" className="absolute -inset-3 -z-10 rotate-6 rounded-[2.5rem] bg-brand/15 sm:-inset-5" />
        <img
          src={heroImage}
          alt="Custom photo button pins from Squirkle held in a hand"
          className="w-full -rotate-2 rounded-[2rem] shadow-2xl shadow-brand/25 transition-transform duration-500 hover:rotate-0"
        />
        <div className="absolute -bottom-6 left-1/2 flex w-max -translate-x-1/2 items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg sm:left-0 sm:-translate-x-6">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white">
            <Sparkles size={18} />
          </span>
          <div className="text-left">
            <p className="text-sm font-bold text-brand">Student-friendly prices</p>
            <p className="text-xs text-brand-dark/70">Stickers · Pins · Prints · 3D</p>
          </div>
        </div>
      </div>
    </section>
  );
}
