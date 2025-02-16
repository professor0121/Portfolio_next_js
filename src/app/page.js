'use client' 
 
 import React from 'react'
 import Header from '../components/Header/header'
 import HeroSection from '../components/heroSection'
 import About from '../components/About'
 import Project from '../components/Project'
 import Skills from '@/components/Skills'
 import Contact from '@/components/Contact'
import Achievements from '@/components/Achievements'
 
 const Home = () => {
   return (
     <div>
      <Header/>
      <HeroSection/>
      <About/>
      <Project/>
      <Achievements/>
      <Skills/>
      <Contact/>
     </div>
   )
 }
 
 export default Home