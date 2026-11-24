import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Logo() {
  return (
    <Link
      to="/"
      className="block shrink-0 transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30 rounded-lg"
    >
      <img src={logo} alt="Squirkle Printing — home" className="h-10 w-auto sm:h-12" />
    </Link>
  );
}
