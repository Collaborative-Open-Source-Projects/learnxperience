'use client';

import { HomeIcon } from 'lucide-react';
import React, { useState } from 'react';

const menuItems = [
    { name: 'Home', icon: <HomeIcon className="text-gray-600" /> },
    { name: 'About', icon: <HomeIcon className="text-gray-600" /> },
    { name: 'Services', icon: <HomeIcon className="text-gray-600" /> },
    { name: 'Contact', icon: <HomeIcon className="text-gray-600" /> },
    { name: 'Settings', icon: <HomeIcon className="text-gray-600" /> },
];

export default function SideBar() {
    const [isHover, setIsHover] = useState(false);

    return (
        <aside
            className="flex flex-col items-start h-full space-y-6 p-5 transition-width duration-300 ease-in-out hover:w-64 min-w-24 bg-white text-gray-800 border-r border-gray-300"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {menuItems.map((item, index) => (
                <div
                    key={index}
                    className="flex opacity-100 items-center space-x-2 w-full p-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-200"
                >
                    {item.icon}
                    {isHover ? (
                        <span className={`text-gray-800 text-md font-medium transition-opacity duration-300 ease-in-out ${isHover ? 'opacity-100' : 'opacity-0'}`}>
                            {item.name}
                        </span>
                    ) : (
                        ''
                    )}
                </div>
            ))}
        </aside>
    );
}