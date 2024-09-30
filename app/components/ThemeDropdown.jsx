'use client';
import { useState, useEffect } from 'react';

const themes = [
  { name: 'light', cssClass: 'theme-light', colorBoxClass: 'theme-light-box', bgColor: '#ffffff' },
  { name: 'dark', cssClass: 'theme-dark', colorBoxClass: 'theme-dark-box', bgColor: '#000000' },
  // { name: 'ocean', cssClass: 'theme-ocean', colorBoxClass: 'theme-ocean-box', bgColor: '#2e8b57' },
  // { name: 'desert', cssClass: 'theme-desert', colorBoxClass: 'theme-desert-box', bgColor: '#edc9af' },
];

export default function ThemeDropdown() {
  const [theme, setTheme] = useState(() => localStorage.getItem('selectedTheme') || 'light');

  // Apply theme when component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme') || 'light';
    setTheme(savedTheme);
    document.body.className = themes.find(t => t.name === savedTheme).cssClass;
  }, []);
  
  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem('selectedTheme', selectedTheme);
    const themeCssClass = themes.find(t => t.name === selectedTheme).cssClass;
    document.body.className = themeCssClass;
  };

  const currentTheme = themes.find(t => t.name === theme);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  return (
    <div className="relative">
      {/* Button showing active theme color */}
      <button
        className="w-10 h-10 rounded-full border border-gray-300 focus:outline-none"
        style={{ backgroundColor: currentTheme.bgColor }}
        aria-label="Current theme color"
        onClick={toggleDropdown} // Toggle dropdown on click
      ></button>

      {/* Dropdown menu */}
      {dropdownOpen && (
        <div className="absolute  -ml-3  bg-white shadow-lg border border-gray-300 mt-2 rounded-md w-16">
          {themes.map((t) => (
            <div
              key={t.name}
              onClick={() => {
                handleThemeChange(t.name);
                setDropdownOpen(false); // Close dropdown after selection
              }}
              className="flex items-center justify-center cursor-pointer  py-2 hover:bg-gray-100"
            >
              <span className={`theme-color-box ${t.colorBoxClass} mr-2`}></span>
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
