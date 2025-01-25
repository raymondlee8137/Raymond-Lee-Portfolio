"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  
    return (
        <nav className="w-screen bg-white text-black py-4 px-10 fixed top-0 left-0">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-2xl font-bold ">Raymond Lee</h1>

            <button
            className="md:hidden"
            onClick={toggleMenu}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

            <ul
          className={`absolute top-16 right-6 bg-gray-100 rounded-lg shadow-lg transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          } md:relative md:top-0 md:right-0 md:bg-transparent md:shadow-none md:flex md:space-x-8 md:items-center`}
              >
              <li className="hover:text-blue-400 transition py-2 px-4 border-b border-gray-700 md:border-none">
                <Link href="/"onClick={closeMenu}>Home</Link>
              </li>
              <li className="hover:text-blue-400 transition py-2 px-4 border-b border-gray-700 md:border-none">
                <Link href="/about"onClick={closeMenu}>About</Link>
              </li>
              <li className="hover:text-blue-400 transition py-2 px-4 border-b border-gray-700 md:border-none">
                <Link href="#work"onClick={closeMenu}>Work</Link>
              </li>
              <li className="hover:text-blue-400 transition py-2 px-4 md:border-none">
                <Link href="#portfolio"onClick={closeMenu}>Portfolio</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }