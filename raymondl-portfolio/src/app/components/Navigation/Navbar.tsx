"use client";

import { useState } from "react";
import Link from 'next/link';
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    return (
        <nav className="w-screen bg-gray-900 text-white py-4 px-10 fixed top-0 left-0">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-2xl font-bold text-blue-500">Raymond Lee</h1>
            <ul className="flex space-x-8 text-lg">
              <li className="hover:text-blue-400 transition">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-blue-400 transition">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-blue-400 transition">
                <Link href="#work">Work</Link>
              </li>
              <li className="hover:text-blue-400 transition">
                <Link href="#portfolio">Portfolio</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }