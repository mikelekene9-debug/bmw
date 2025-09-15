import { SiBmw } from "react-icons/si";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-red-900 to-red-700 text-white py-8 mt-16 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <SiBmw className="text-blue-400 text-3xl animate-pulse" />
          <span className="font-extrabold text-2xl tracking-wide">BMW</span>
        </div>
        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaYoutube className="text-xl" />
          </a>
        </div>
        {/* Copyright */}
        <div className="text-sm text-gray-300 text-center md:text-right">
          &copy; {new Date().getFullYear()} BMW. All rights reserved.
          <br />
          Crafted with passion for German engineering.
        </div>
      </div>
    </footer>
  );
}