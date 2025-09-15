"use client"
import { useState } from "react";
import Link from "next/link";
import { SiBmw } from "react-icons/si";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-black via-red-900 to-red-700 shadow-xl fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white font-extrabold text-2xl">
          <SiBmw className="text-blue-400 text-3xl animate-pulse" />
          BMW
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-white hover:text-red-400 font-semibold transition">Home</Link>
          <Link href="/dashboard/mseries" className="text-white hover:text-red-400 font-semibold transition">M Series</Link>
          <Link href="/dashboard/xseries" className="text-white hover:text-red-400 font-semibold transition">X Series</Link>
          <Link href="/dashboard/showroom" className="text-white hover:text-red-400 font-semibold transition">Showroom</Link>
          <Link href="/dashboard/aboutus" className="text-white hover:text-red-400 font-semibold transition">About Us</Link>
        </div>
        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-8 h-1 bg-white rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-8 h-1 bg-white rounded my-1 transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
          <span className={`block w-8 h-1 bg-white rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>
      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-black bg-opacity-90 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
          open ? "max-h-60 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="text-white hover:text-red-400 font-semibold transition" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/dashboard/mseries" className="text-white hover:text-red-400 font-semibold transition" onClick={() => setOpen(false)}>M Series</Link>
          <Link href="/dashboard/xseries" className="text-white hover:text-red-400 font-semibold transition" onClick={() => setOpen(false)}>X Series</Link>
          <Link href="/dashboard/showroom" className="text-white hover:text-red-400 font-semibold transition" onClick={() => setOpen(false)}>Showroom</Link>
          <Link href="/dashboard/aboutus" className="text-white hover:text-red-400 font-semibold transition" onClick={() => setOpen(false)}>About Us</Link>
        </div>
      </div>
    </nav>
  );
}