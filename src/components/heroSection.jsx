import React from 'react'
import { motion } from "framer-motion";

const heroSection = () => {
    return (
        <section className="w-screen h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white p-6">
          <motion.div 
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src="images/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
          </motion.div>
          
          <motion.div 
            className="mt-6 md:mt-0 md:ml-12 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold">Hello, I'm <span className="text-blue-400">Abhishek Kushwaha</span></h1>
            <p className="text-lg md:text-xl mt-4">A Passionate <span className="text-blue-300">Web Developer</span> & <span className="text-blue-300">Designer</span></p>
          </motion.div>
        </section>
      );
}

export default heroSection