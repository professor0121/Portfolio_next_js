'use client' 
 
 import React from 'react'
 import Header from '../components/Header/header'
 import HeroSection from '../components/heroSection'
 import About from '../components/About'
 import Project from '../components/Project'
 import Skills from '@/components/Skills'
 import Contact from '@/components/Contact'
 
 const Home = () => {
   return (
     <div>
      <Header/>
      <HeroSection/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
     </div>
   )
 }
 
 export default Home