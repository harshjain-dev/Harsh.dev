import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import { useEffect } from 'react';
import { initGA, logPageView } from './utils/analytics';

function App() {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);
  return (
    <div className="antialiased selection:bg-btn-dark selection:text-surface-1 font-sans">
      <Navbar />
      <main className="pt-24 pb-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;