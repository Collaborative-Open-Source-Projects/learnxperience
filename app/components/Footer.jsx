import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 theme-dark:bg-slate-800 border-t-2 w-full py-5 px-10 h-full grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Quick Links Section */}
            <div className='flex flex-col gap-2'>
                <h1 className='text-lg font-bold'>Quick Links</h1>
                <ul>
                    <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-all duration-200 ease-in">About Us</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-all duration-200 ease-in">Contact Us</a></li>
                </ul>
            </div>

            {/* Social Media Links */}
            <div className='flex flex-col gap-2'>
                <h1 className='text-lg font-bold'>Follow Us</h1>
                <ul>
                    <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-all duration-200 ease-in">Facebook</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-all duration-200 ease-in">LinkedIn</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-all duration-200 ease-in">Instagram</a></li>
                </ul>
            </div>

            {/* Policies Section */}
            <div className='flex flex-col gap-2'>
                <h1 className='text-lg font-bold'>Policies</h1>
                <ul>
                    <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-all duration-200 ease-in">Privacy Policy</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-all duration-200 ease-in">Cookie Policy</a></li>
                </ul>
            </div>

            {/* Newsletter Sign-up Form */}
            <div className='flex flex-col'>
                <h1 className='text-lg font-bold'>Sign-up for Newsletter</h1>
                <form className='flex flex-col'>
                    <label htmlFor="newsletter" className="mb-2 font-medium">Stay updated with new courses</label>
                    <input
                        type="email"
                        id="newsletter"
                        placeholder="Enter your email"
                        className="p-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-1 focus:ring-purple-300"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-purple-500 text-white rounded-lg p-2 hover:bg-purple-600 transition-all duration-200 ease-in"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </footer>
    );
}