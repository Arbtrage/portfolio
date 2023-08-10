"use client";
import React, { useState, useRef } from "react";
import NextLink from "next/link";
import Logo from "./logo";

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };


  return (
    <div className="flex items-center justify-between ">
      <div className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
        <Logo />
      </div>
      <div className="flex ">
        <div className="hidden sm:flex items-center gap-7 text-sm">
          <NextLink legacyBehavior href="/" passHref>
            <a onClick={handleLinkClick} className="text-gray-300">About</a>
          </NextLink>
          <NextLink legacyBehavior href="/projects" passHref>
            <a onClick={handleLinkClick} className="text-gray-300">Projects</a>
          </NextLink>
          <a
            className="text-gray-300 hover:underline"
            href="https://github.com/Arbtrage/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        </div>
      </div>
      <div className="align-right flex items-center gap-5 justify-between">
        <div className="flex justify-center">
        </div>

        <div className="sm:hidden flex items-center justify-between gap-3" ref={menuRef}>
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 text-sm font-medium text-gray-300"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <MenuIcon />
            </button>
            {isMenuOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <NextLink legacyBehavior href="/" passHref>
                    <a onClick={handleLinkClick} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-gray-900" role="menuitem">About</a>
                  </NextLink>
                  <NextLink legacyBehavior href="/projects" passHref>
                    <a onClick={handleLinkClick} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-gray-900" role="menuitem">Projects</a>
                  </NextLink>
                  <a
                    href="https://github.com/Arbtrage/portfolio"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                  >
                    View Source
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
