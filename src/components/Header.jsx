import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Logo from './Logo';
import Nav from './Nav';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={clsx(
        'sticky top-0 z-40 border-b bg-cream/80 backdrop-blur-md transition-all duration-300',
        scrolled ? 'border-brand/10 shadow-md shadow-brand/5' : 'border-transparent'
      )}
    >
      {/* Mobile: logo left, menu button right. Desktop: 3 columns so the nav sits truly centered. */}
      <div
        className={clsx(
          'flex w-full items-center justify-between px-4 transition-all duration-300 sm:px-8',
          'md:grid md:grid-cols-[1fr_auto_1fr]',
          scrolled ? 'py-2' : 'py-4'
        )}
      >
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
