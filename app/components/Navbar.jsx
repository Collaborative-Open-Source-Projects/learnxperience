'use client'

import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleProfileClick = () => {
        setIsPopoverOpen(!isPopoverOpen);
    };

    return (
        <>
            {/* Main header */}
            <header className="sticky top-0 z-20 bg-gray-50 shadow-md dark:bg-dark">
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
                                >
                                    <ChevronDown className="text-white" size={16} />
                                </button>

                                {isPopoverOpen && (
                                    <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-300 rounded-lg z-10">
                                        <div className="p-4">
                                            <h3 className="font-semibold text-purple-600">User Name</h3>
                                            <p className="text-sm text-gray-500">@username</p>
                                        </div>
                                        <hr className="border-gray-200" />
                                        <hr className="border-gray-200" />
                                        <div className="p-2">
                                            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-100">
                                                Profile
                                            </button>
                                            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-100">
                                                Settings
                                            </button>
                                            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-100">
                                                Support
                                            </button>
                                            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-100">
                                                Sign out
                                            </button>
                                        </div>
                                        <hr className="border-gray-300" />
                                        <div className="p-2 text-center text-xs text-gray-500">
                                            <p>About</p>
                                            <p>Privacy</p>
                                            <p>Terms</p>
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
                        <ThemeToggle />
                    </nav> 
                </div>
                <hr className="border-t border-gray-200" />
            </header>
            <hr className="border-t border-gray-200" />
        </>
    );
};

export default Header;