import React, { useState } from 'react';  // Import useState
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';  // Import icons

const NavLinks = ({ variant = "desktop" }) => {
    const baseClasses = "text-white font-bold uppercase text-sm";
    const linkClasses = "hover:underline";
  
    if (variant === "desktop") {
      return (
        <div className="flex gap-8 px-8 py-4 rounded-full bg-[#1d6b89] text-white font-bold uppercase text-sm shadow-md mr-30 ">
      <NavLink to="/" className="no-underline">Home</NavLink>
      <NavLink to="/about" className="no-underline">About</NavLink>
      <NavLink to="/services" className="no-underline">Services</NavLink>
      <NavLink to="/products" className="no-underline">Products</NavLink>
    </div>
      );
    }
  
    // Mobile: Plain stacked
    return (
      <div className="flex flex-col items-center gap-4 text-[#1d6b89] font-bold uppercase text-sm">
        <NavLink to="/" className={linkClasses}>Home</NavLink>
        <NavLink to="/about" className={linkClasses}>About</NavLink>
        <NavLink to="/services" className={linkClasses}>Services</NavLink>
        <NavLink to="/products" className={linkClasses}>Products</NavLink>
      </div>
    );
  };
  

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);  

  const toggleNavbar = () => {
    setIsOpen(!isOpen);  
  };

  return (
    <nav className="relative w-full  px-6 py-4 flex items-center justify-between">
      {/* Desktop: Centered pill nav */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
        <NavLinks variant="desktop" />
      </div>
  
      {/* Mobile: Hamburger menu button */}
      <div className="md:hidden ml-auto">
        <button onClick={toggleNavbar} className="p-2 text-[#1d6b89]">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
  
      {/* Mobile: Plain links below */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 z-10 md:hidden">
          <NavLinks variant="mobile" />
        </div>
      )}
    </nav>
  );
};

export default Nav;
