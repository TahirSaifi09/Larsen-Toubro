'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (menu) =>
    setDropdown(dropdown === menu ? null : menu);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Larsen & Toubro
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <div className="relative">
              <button
                onClick={() => toggleDropdown('about')}
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                About L&T Group <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdown === 'about' && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                  <Link href="/overview" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Overview</Link>
                  <Link href="/leadership" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Leadership</Link>
                  <Link href="/vision" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Vision</Link>
                  {/* Add more submenu items as needed */}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('businesses')}
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                Our Businesses <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdown === 'businesses' && (
                <div className="absolute mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-10">
                  <Link href="/construction" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Construction</Link>
                  <Link href="/hydrocarbon" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Hydrocarbon</Link>
                  <Link href="/heavy-engineering" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Heavy Engineering</Link>
                  {/* Add more submenu items as needed */}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('careers')}
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                Careers <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdown === 'careers' && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                  <Link href="/current-openings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Current Openings</Link>
                  <Link href="/learning-development" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Learning & Development</Link>
                  <Link href="/diversity-inclusion" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Diversity & Inclusion</Link>
                  {/* Add more submenu items as needed */}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('media')}
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                Media <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdown === 'media' && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                  <Link href="/press-releases" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Press Releases</Link>
                  <Link href="/events" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Events</Link>
                  <Link href="/gallery" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Gallery</Link>
                  {/* Add more submenu items as needed */}
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact Us</Link>
            <Link href="/investors" className="text-gray-700 hover:text-blue-600">Investors</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/about" className="block text-gray-700 hover:text-blue-600">About L&T Group</Link>
          <Link href="/businesses" className="block text-gray-700 hover:text-blue-600">Our Businesses</Link>
          <Link href="/careers" className="block text-gray-700 hover:text-blue-600">Careers</Link>
          <Link href="/media" className="block text-gray-700 hover:text-blue-600">Media</Link>
          <Link href="/contact" className="block text-gray-700 hover:text-blue-600">Contact Us</Link>
          <Link href="/investors" className="block text-gray-700 hover:text-blue-600">Investors</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
