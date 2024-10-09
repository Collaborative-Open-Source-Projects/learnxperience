'use client';

import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import ThemeDropdown from './ThemeDropdown';
import placeholderImage from '../../public/images/testimonialIcon-01.jpg';
import Link from 'next/link';
import Image from 'next/image';

const themes = [
  { name: 'light', label: 'Light Theme' },
  { name: 'dark', label: 'Dark Theme' },
  { name: 'blue', label: 'Blue Theme' },
  { name: 'green', label: 'Green Theme' },
];

// Placeholder function for fetching user data
const getUserFromCollection = async () => {
  return {
    name: 'John Doe',
    username: 'johndoe',
  };
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default: not logged in
  const [user, setUser] = useState(null); // Store user data
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Simulate fetching user data
  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserFromCollection();
      setUser(userData);
      setIsLoggedIn(!!userData);
    };
    fetchUser();
  }, []);

  const toggleSearchBar = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleProfileClick = () => {
    setIsPopoverOpen((prev) => !prev);
  };

  const handleLogOut = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  const ProfileButton = () => (
    <button
      className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center cursor-pointer"
      onClick={handleProfileClick}
      aria-haspopup="true"
      aria-expanded={isPopoverOpen}
    >
      <div className="w-full h-full rounded-full overflow-hidden">
        <Image src={placeholderImage} alt="User Avatar" width={40} height={40} />
      </div>
    </button>
  );

  const ProfileDropdownMenu = () => (
    <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-300 rounded-lg z-10 shadow-lg">
      <div className="p-4">
        <h3 className="font-semibold text-purple-600">{user?.name || 'User Name'}</h3>
        <p className="text-sm text-gray-500">@{user?.username || 'username'}</p>
      </div>
      <hr className="border-gray-200" />
      <div className="p-2">
        {['Profile', 'Settings', 'Support', isLoggedIn ? 'Logout' : 'Login/Register'].map((item) => (
          <button
            key={item}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-100"
            onClick={item === 'Logout' ? handleLogOut : undefined}
          >
            {item}
          </button>
        ))}
      </div>
      <hr className="border-gray-300" />
      <div className="p-2 text-center text-xs text-gray-500">
        {['About', 'Privacy', 'Terms'].map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );

  const ProfileDropdown = () => (
    <div
      className="relative"
      onMouseEnter={() => setIsPopoverOpen(true)}
      onMouseLeave={() => setIsPopoverOpen(false)}
    >
      <ProfileButton />
      {isPopoverOpen && <ProfileDropdownMenu />}
    </div>
  );

  return (
    <header className={`sticky top-0 z-20 bg-gray-50 theme-dark:bg-slate-800 ${isSticky ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <h1 className="text-xl font-bold text-purple-600">LearnXperience</h1>
        </Link>

        {/* Search Box */}
        <div className={`relative flex-1 mx-4 ${isSearchOpen ? 'block' : 'hidden md:block'}`}>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-300 text-sm h-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
        </div>

        {/* Icons and Menu */}
        <div className="flex items-center space-x-4">
          {/* Search Icon for small screens */}
          <button className="md:hidden bg-transparent p-2" onClick={toggleSearchBar} aria-label="Toggle search bar">
            <Search size={24} className="text-gray-500" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition">About</Link>
            <Link href="/features" className="text-gray-700 hover:text-purple-600 transition">Features</Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition">Contact</Link>
            {isLoggedIn ? (
              <ProfileDropdown />
            ) : (
              <>
                <Link
                  href="/login"
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-all duration-200 ease-in h-10 flex items-center"
                >
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  className="bg-purple-500 px-4 py-2 rounded-lg font-semibold hover:bg-purple-600 text-white transition-all duration-200 ease-in h-10 flex items-center"
                >
                  Create Account
                </Link>
              </>
            )}
          </nav>

          {/* Theme switcher */}
          <ThemeDropdown />

          {/* Profile Icon for mobile */}
          {isLoggedIn && (
            <div className="md:hidden relative">
              <ProfileButton />
              {isPopoverOpen && <ProfileDropdownMenu />}
            </div>
          )}

          {/* Mobile Menu Icon */}
          <button onClick={toggleMenu} className="md:hidden bg-transparent p-2" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 theme-dark:bg-slate-800">
          <nav className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
              About
            </Link>
            <Link href="/features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
              Features
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
              Contact
            </Link>
            {!isLoggedIn && (
              <>
                <Link href="/login" className="block bg-gray-200 text-gray-800 px-3 py-2 rounded-md font-medium mt-1">
                  Sign in
                </Link>
                <Link href="/signup" className="block bg-purple-500 text-white px-3 py-2 rounded-md font-semibold mt-1">
                  Create Account
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
      <hr className="border-t border-gray-200" />
    </header>
  );
};

export default Header;