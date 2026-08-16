


import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-purple-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500"></div>

      <div className="container px-4 py-12 mx-auto">
        {/* Navigation Links */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-8 font-medium text-gray-600 dark:text-gray-300">
            <li><a href="#home" className="hover:text-teal-500 dark:hover:text-teal-400">Home</a></li>
            <li><a href="#about" className="hover:text-teal-500 dark:hover:text-teal-400">About</a></li>
            <li><a href="#skills" className="hover:text-teal-500 dark:hover:text-teal-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-teal-500 dark:hover:text-teal-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-teal-500 dark:hover:text-teal-400">Contact</a></li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://github.com/hasanRafi2002" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 transition-colors bg-gray-200 rounded-lg dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            <FaGithub className="text-xl text-gray-700 dark:text-gray-300" />
          </a>
          <a 
            href="https://www.linkedin.com/in/serock01/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 transition-colors rounded-lg bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-800/30"
          >
            <FaLinkedin className="text-xl text-blue-500" />
          </a>
          <a 
            href="https://x.com/rafi_hasan_03" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
            className="p-3 transition-colors rounded-lg bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-800/30"
          >
            <FaTwitter className="text-xl text-blue-400" />
          </a>
        </div>

        {/* Copyright & Role */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            Made with <FaHeart className="text-red-500 animate-pulse" /> by Md Tawhid Hasan Rafi
          </p>
          <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            iOS Software Engineer
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
