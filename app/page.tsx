'use client'

import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import AdditionalSkills from './components/AdditionalSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import MobileOptimized from './components/MobileOptimized'
import FloatingActionButton from './components/FloatingActionButton'

export default function Home() {
  return (
    <MobileOptimized>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <AdditionalSkills />
        <Contact />
        <Footer />
        <FloatingActionButton />
      </main>
    </MobileOptimized>
  )
}

