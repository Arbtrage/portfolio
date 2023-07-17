"use client"
import { useState } from 'react';

  import NextLink from 'next/link'
  import DarkModeToggle from './toggle';
import React from 'react'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <div className="flex items-center justify-between">
      <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Sayantan
        </span>
      {/* Layout when the window size is large */}
      
      <DarkModeToggle/>
      
      {/* Hamburger style menu when window style is small */}
      <div className="sm:hidden">
      
        <button
          className="focus:outline-none"
          onClick={toggleMenu}
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 transition-transform duration-300 ease-in-out transform"
            >
            {showMenu ? (
              <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
                )}
          </svg>
        </button>
      </div>
      <div
        className={`sm:hidden absolute top-12 right-0 w-48 rounded-lg shadow transition-opacity duration-300 ease-in-out ${
          showMenu ? 'opacity-100' : 'opacity-0'
        }`}
      >
      </div>
    </div>
    </div>
  )
}

export default Navbar
