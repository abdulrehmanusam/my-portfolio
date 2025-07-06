import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('light-mode', !darkMode);
  };

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : 'light'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-container">
        <motion.h1 className="logo" whileHover={{ scale: 1.05, rotate: 2 }}>
          My<span>Portfolio</span>
        </motion.h1>
        <div className="desktop-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? '🌙' : '☀️'}
          </button>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          </div>
        </div>
      </div>

      <motion.div
        className="mobile-menu"
        animate={menuOpen ? 'open' : 'closed'}
        variants={menuVariants}
        transition={{ duration: 0.4 }}
      >
        <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
