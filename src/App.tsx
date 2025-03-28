import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Courses from './components/Courses';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VoiceflowChat from './components/VoiceflowChat';

function App() {
  return (
    <div className="min-h-screen bg-base-100" data-theme="light">
      <Header />
      <main className="relative">
        <Hero />
        
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="relative">
          <div className="absolute inset-0 bg-base-200/50" />
          <About />
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-base-200/50 to-transparent" />
          <Features />
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-base-200/30" />
          <Courses />
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-200/50 to-transparent" />
          <Pricing />
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-base-200/30" />
          <FAQ />
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-base-200/30 to-transparent" />
          <Contact />
        </div>
      </main>
      <Footer />
      <VoiceflowChat />
    </div>
  );
}

export default App;