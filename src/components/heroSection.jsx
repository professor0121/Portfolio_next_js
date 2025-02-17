import React from "react";
import { motion } from "framer-motion";
// import Typical from "react-typical";

const HeroSection = () => {
  return (
    <section className="w-screen h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-6 py-10">
      {/* Image on the Left */}
      <motion.div
        className="md:w-80 md:h-80 w-60 h-60 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="images/profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text on the Right */}
      <motion.div
        className="md:ml-16 mt-6 md:mt-0 text-center md:text-left max-w-xs sm:max-w-md md:max-w-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          {/* <Typical
            steps={["Hello, I am a Developer!", 7000, "I love coding!", 7000]}
            loop={Infinity}
            wrapper="span"
          /> */}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mt-4">
          A Passionate <span className="text-blue-300">Web Developer</span> &{" "}
          <span className="text-blue-300">Designer</span>
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
