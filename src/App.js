import React, { useEffect } from 'react';
import './App.css';

// ✅ Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import BackgroundScene from './components/BackgroundScene';

// ✅ Smooth Scroll Helper
const smoothScrollTo = (target) => {
  document.querySelector(target)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

function App() {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.currentTarget.getAttribute('href');
      if (target && target.startsWith('#')) {
        e.preventDefault();
        smoothScrollTo(target);
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener('click', handleSmoothScroll));

    return () => {
      links.forEach((link) => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  return (
    <div className="App">
      {/* 🔄 Preloader Animation */}
      <Loader />

      {/* ✨ Animated Three.js Background */}
      <BackgroundScene />

      {/* 🔝 Sticky Navbar */}
      <Navbar />

      {/* 🦸 Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* 🧠 About Section */}
      <section id="about">
        <About />
      </section>

      {/* 💼 Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* 📬 Contact */}
      <section id="contact">
        <Contact />
      </section>

      {/* 🔚 Footer */}
      <Footer />
    </div>
  );
}

export default App;
