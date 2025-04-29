import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md shadow-black-500/50 text-gray-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <a href="#home">
            <img src="src/assets/logo.png" alt="Logo" className="h-8" />
          </a>
        </div>

        {/* Desktop-Links*/}
        <div className="hidden lg:flex space-x-8">
          <a href="#about" className="hover:text-black">About Us</a>
          <a href="#services" className="hover:text-black">Services</a>
          <a href="#case-studies" className="hover:text-black">Case Studies</a>
          <a href="#blogs" className="hover:text-black">Blogs</a>
          <a href="#how-it-works" className="hover:text-black">How It Works</a>
          <a href="#hire" className="hover:text-black">Hire</a>
        </div>

        {/*Contact Us*/}
        <div className="hidden lg:flex items-center">
          <button className="bg-gradient-to-r from-[#6675F7] to-[#57007B] hover:cursor-pointer text-white py-2 px-4 rounded">
            Contact Us
          </button>
        </div>

        {/*Hamburger-button*/}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/*Hamburger-links*/}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col space-y-4 mt-4 px-4">
          <a href="#about" className="hover:text-black" onClick={toggleMobileMenu}>About Us</a>
          <a href="#services" className="hover:text-black" onClick={toggleMobileMenu}>Services</a>
          <a href="#case-studies" className="hover:text-black" onClick={toggleMobileMenu}>Case Studies</a>
          <a href="#blogs" className="hover:text-black" onClick={toggleMobileMenu}>Blogs</a>
          <a href="#how-it-works" className="hover:text-black" onClick={toggleMobileMenu}>How It Works</a>
          <a href="#hire" className="hover:text-black" onClick={toggleMobileMenu}>Hire</a>
          <button className="bg-gradient-to-r from-[#6675F7] to-[#57007B] text-white py-2 px-4 rounded mt-2" onClick={toggleMobileMenu}>
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
