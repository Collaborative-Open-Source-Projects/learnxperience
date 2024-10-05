'use client';

import React, { useState, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import ThemeDropdown from './ThemeDropdown';
import Image from 'next/image';
import placeholderImage from '../public/images/testimonialIcon-01.jpg'

const themes = [
    { name: 'light', label: 'Light Theme' },
    { name: 'dark', label: 'Dark Theme' },
    { name: 'blue', label: 'Blue Theme' },
    { name: 'green', label: 'Green Theme' },
];

const Header = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 30);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleProfileClick = () => {
        setIsPopoverOpen(prev => !prev);
    };

    return (
        <>
            {/* Main header */}
            <header className={`sticky top-0 z-20 bg-gray-50 theme-dark:bg-slate-800 ${isSticky ? 'shadow-md' : ''}`}>
                <div className="p-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-purple-600">LearnXperience</h1>
                    <nav className="flex items-center space-x-4">
                        {/* Search Box */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-300 text-sm h-10"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        </div>
                        {isLoggedIn ? (
                            // Profile Dropdown
                            <div className="relative">
                                <button
                                    className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center cursor-pointer"
                                    onClick={handleProfileClick}
                                    aria-haspopup="true"
                                    aria-expanded={isPopoverOpen}
                                >
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <Image
                                            src={placeholderImage}
                                            alt="Profile"
                                            className="object-cover"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                </button>
                                {isPopoverOpen && (
                                    <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-300 rounded-lg z-10">
                                        <div className="p-4">
                                            <h3 className="font-semibold text-purple-600">User Name</h3>
                                            <p className="text-sm text-gray-500">@username</p>
                                        </div>
                                        <hr className="border-gray-200" />
                                        <div className="p-2">
                                            {['Profile', 'Settings', 'Support', 'Sign out'].map(item => (
                                                <button key={item} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-100">
                                                    {item}
                                                </button>
                                            ))}
                                        </div>
                                        <hr className="border-gray-300" />
                                        <div className="p-2 text-center text-xs text-gray-500">
                                            {['About', 'Privacy', 'Terms'].map(item => (
                                                <p key={item}>{item}</p>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className='flex gap-5'>
                                <button className='bg-gray-200 text-gray-800 p-3 rounded-lg font-medium hover:bg-gray-300 transition-all duration-200 ease-in h-10 flex justify-center items-center'>
                                    Sign in
                                </button>
                                <button className='bg-purple-500 p-3 rounded-lg font-semibold hover:bg-purple-600 text-white transition-all duration-200 ease-in h-10 flex justify-center items-center'>
                                    Create Account
                                </button>
                            </div>
                        )}
                        <ThemeDropdown />
                    </nav>
                </div>
                <hr className="border-t border-gray-200" />
            </header>
            <hr className="border-t border-gray-200" />
        </>
    );
};

export default Header;
