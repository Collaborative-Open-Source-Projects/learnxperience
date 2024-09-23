"use client"

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        }
        else
        {
            document.documentElement.classList.remove('dark');
        }
    })

    return (
        <div
            className="relative w-16 h-8 flex items-center dark: bg-gray-900 bg-purple-600 cursor-pointer rounded-full p-1"
            onClick={() => setDarkMode(!darkMode)}
            >
                <FaMoon className="text-white" size={18} />
                <div 
                    className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
                    style={darkMode ? {left: "2px"} : {right: "2px"}}
                ></div> 
        </div>
    );
};

export default ThemeToggle;