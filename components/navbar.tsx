"use client";
import { useState } from "react";
import NextLink from "next/link";
import DarkModeToggle from "./toggle";
import React from "react";
import { Page } from "@/types/Page";

type Props={
  pages:Page[];
}

interface Pag {
  _id: string;
  title: string;
  slug: string;
}
const Navbar:React.FC<Props> = ({ pages })  => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(pages);
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
        <div className="hidden sm:flex  items-center gap-5 text-sm">
            {pages.map((page:Pag) => {
              return (
                <NextLink
                  key={page._id}
                  href={`/${page.slug}`}
                  className="hover:underline"
                >
                  {page.title}
                </NextLink>
              );
            })}
          </div>
        <DarkModeToggle />

        {/* Hamburger style menu when window style is small */}
        <div className="sm:hidden">
          <button className="focus:outline-none" onClick={toggleMenu}>
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
          className={`sm:hidden absolute mx-auto top-12 right-0 w-48 rounded-lg shadow transition-opacity duration-300 ease-in-out ${
            showMenu ? "opacity-100" : "opacity-0"
          }`}
        >
          
          {pages.map((page:Pag) => {
              return (
                <NextLink
                  key={page._id}
                  href={`/${page.slug}`}
                  className="hover:underline flex"
                >
                  {page.title}
                </NextLink>
              );
            })}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
