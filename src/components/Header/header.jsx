"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.h1 
          className="text-2xl font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Portfolio
        </motion.h1>
        
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>
        
        <nav className="hidden md:flex">
          <ul className="flex gap-6">
            <motion.li whileHover={{ scale: 1.1 }}><a href="#about" className="hover:text-gray-400">About</a></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><a href="#projects" className="hover:text-gray-400">Projects</a></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><a href="#contact" className="hover:text-gray-400">Contact</a></motion.li>
          </ul>
        </nav>
      </div>
      
      {menuOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-gray-900 p-4 shadow-lg">
          <ul className="flex flex-col gap-4 text-center">
            <li><a href="#about" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#projects" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;