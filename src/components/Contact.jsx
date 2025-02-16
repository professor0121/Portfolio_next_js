'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="w-screen h-screen bg-gray-900     flex flex-col items-center justify-center text-white p-6">
      <h2 className="text-5xl font-bold text-blue-400 mb-8">Get in Touch</h2>
      <motion.form 
        className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-300">Name</label>
          <input 
            type="text" 
            name="name" 
            className="w-full p-3 mt-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Email</label>
          <input 
            type="email" 
            name="email" 
            className="w-full p-3 mt-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Message</label>
          <textarea 
            name="message" 
            rows="4" 
            className="w-full p-3 mt-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange} 
            required
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </motion.form>
      <div className="mt-8 flex gap-6 text-2xl">
        <a href="#" className="text-blue-400 hover:text-blue-500 transition duration-300"><FaFacebook /></a>
        <a href="#" className="text-blue-400 hover:text-blue-500 transition duration-300"><FaTwitter /></a>
        <a href="#" className="text-blue-400 hover:text-blue-500 transition duration-300"><FaLinkedin /></a>
        <a href="#" className="text-blue-400 hover:text-blue-500 transition duration-300"><FaInstagram /></a>
      </div>
    </section>
  );
};

export default Contact;
