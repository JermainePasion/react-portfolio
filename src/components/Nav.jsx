import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the page changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close on Esc
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <nav aria-label="Main" className="md:justify-self-center">
      {/* Desktop: pill nav with active state */}
      <ul className="hidden items-center gap-1 rounded-full bg-brand p-1.5 shadow-md md:flex">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                clsx(
                  'block rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide transition-colors duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70',
                  isActive ? 'bg-white text-brand shadow-sm' : 'text-white hover:bg-white/15'
                )
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile: menu button */}
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="rounded-full bg-brand p-2.5 text-white shadow-md transition-transform duration-200 active:scale-95 md:hidden"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile: dropdown panel (positioned against the sticky header) */}
      <div
        id="mobile-menu"
        className={clsx(
          'absolute inset-x-0 top-full border-b border-brand/10 bg-cream/95 shadow-lg backdrop-blur-md md:hidden',
          'origin-top transition-all duration-300 ease-out',
          isOpen ? 'visible translate-y-0 opacity-100' : 'pointer-events-none invisible -translate-y-2 opacity-0'
        )}
      >
        <ul className="flex flex-col gap-1 p-4">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  clsx(
                    'block rounded-xl px-4 py-3 text-base font-bold uppercase tracking-wide transition-colors duration-200',
                    isActive ? 'bg-brand text-white' : 'text-brand hover:bg-brand/10'
                  )
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
