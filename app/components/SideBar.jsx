'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { menuItems } from '../constants/sideMenu';

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed">
      <aside
        className={`
          flex flex-col
          transition-all duration-300 ease-in-out min-h-screen
          ${isExpanded ? 'w-64' : 'w-20'}
          bg-gray-900 text-white
        `}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <nav className="mt-10">
          {menuItems.map((item, index) => (
            <Link
              href={item.route}
              key={index}
              className={`
                flex items-center w-full p-4
                transition-colors duration-200
                hover:bg-gray-700
                ${isExpanded ? 'justify-start' : 'justify-center'}
              `}
            >
              <span className="text-xl">{item.icon}</span>
              {isExpanded && (
                <span className="ml-4 text-sm font-medium">{item.name}</span>
              )}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
};
export default SideBar;