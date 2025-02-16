"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.h1 
          className="text-2xl font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Portfolio
        </motion.h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6">
            {["About", "Projects", "Skills", "Contact"].map((item, index) => (
              <motion.li key={index} whileHover={{ scale: 1.1 }}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-gray-400">{item}</a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden z-50">
          {menuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav 
            className="fixed top-0 left-0 w-full h-full bg-gray-900 flex flex-col items-center justify-center text-white md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          >
            <ul className="flex flex-col gap-6 text-2xl">
              {["About", "Projects", "Skills", "Contact"].map((item, index) => (
                <li key={index}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
