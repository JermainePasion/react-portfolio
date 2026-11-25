import { Helmet } from 'react-helmet-async';
import { CalendarHeart, MapPin, ShieldCheck } from 'lucide-react';
import aboutPhoto from '../assets/AboutUs.jpg';

const facts = [
  { icon: CalendarHeart, title: 'Since 2024', text: 'Started while we were still in uni' },
  { icon: ShieldCheck, title: 'DTI & BIR registered', text: 'A legit, registered business' },
  { icon: MapPin, title: 'Angeles City pop-ups', text: 'Find us at local events' },
];

export default function About() {
  return (
    <div>
      <Helmet>
        <title>About Squirkle – Student-run printing since 2024</title>
        <meta
          name="description"
          content="Squirkle is a DTI and BIR-registered printing business started in 2024 by two university students. Catch us at pop-up events around Angeles City."
        />
        <link rel="canonical" href="https://squirkle-website.vercel.app/about" />
      </Helmet>

      {/* Story */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-12 pt-8 sm:px-8 md:grid-cols-2 md:gap-14 md:pb-16 md:pt-14">
        <div className="order-2 text-center md:order-1 md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-semibold text-brand">
            <CalendarHeart size={15} aria-hidden="true" /> Printing since 2024
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-brand sm:text-5xl">
            Two broke uni students and a printer
          </h1>

          <div className="mx-auto mt-6 max-w-prose space-y-4 text-lg leading-relaxed text-brand-dark/85 md:mx-0">
            <p>
              While studying, we quickly realized we were broke. So in 2024, we took matters into our own
              hands and started a printing business.
            </p>
            <p>
              We wanted to share our artistic and technical skills with the world, especially with our
              fellow students.
            </p>
            <p>
              Today we make affordable, quality prints for anyone who wants to sell, share, or bring their
              designs to life.
            </p>
          </div>
        </div>

        {/* Photo: same tilted look as the Home hero, shown first on mobile */}
        <figure className="relative isolate order-1 mx-auto w-full max-w-xs sm:max-w-sm md:order-2 md:max-w-md">
          <div aria-hidden="true" className="absolute -inset-3 -z-10 rotate-6 rounded-[2.5rem] bg-brand/15 sm:-inset-5" />
          <img
            src={aboutPhoto}
            alt="Squirkle's two founders taking a selfie at their booth, wearing Mario and Luigi caps"
            className="aspect-square w-full -rotate-2 rounded-[2rem] object-cover shadow-2xl shadow-brand/25 transition-transform duration-500 hover:rotate-0"
          />
          <span className="absolute -right-2 -top-4 rotate-12 rounded-full bg-[#f4c04e] px-4 py-2 text-lg font-bold text-brand-dark shadow-lg sm:-right-4">
            Yay us!
          </span>
        </figure>
      </section>

      {/* Quick facts */}
      <section className="mx-auto max-w-6xl px-4 sm:px-8 mb-25">
        <ul className="grid gap-6 rounded-[2rem] bg-brand px-6 py-8 text-white shadow-lg shadow-brand/20 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/20 sm:px-4">
          {facts.map(({ icon, title, text }) => {
            const Icon = icon;
            return (
              <li key={title} className="flex items-center gap-4 sm:flex-col sm:gap-2 sm:px-4 sm:text-center">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/15">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-lg font-bold">{title}</p>
                  <p className="text-sm text-white/80">{text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
