import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // npm install lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-700">
            SkillUpwithPravin
          </Link>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-blue-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-4">
            <NavLinks />
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-blue-100 px-4 py-2 space-y-1">
          <NavLinks isMobile />
        </nav>
      )}
    </header>
  );
};

const NavLinks = ({ isMobile = false }) => {
  const linkClasses = isMobile
    ? "block px-4 py-2 rounded hover:bg-blue-200 text-blue-700"
    : "px-4 py-2 rounded bg-blue-700 text-white hover:bg-blue-600 transition";

  return (
    <>
      <Link to="/" className={linkClasses}>Home</Link>
      <Link to="/about" className={linkClasses}>About</Link>
      <Link to="/courses" className={linkClasses}>Courses</Link>
      <Link to="/blogs" className={linkClasses}>Blogs</Link>
      <Link to="/training" className={linkClasses}>Training</Link>
      <Link to="/internship" className={linkClasses}>Internship</Link>
      <Link to="/contact" className={linkClasses}>Contact</Link>
    </>
  );
};

export default Navbar;
