import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Left Text Section */}
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="highlight">Abdul Rehman</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          I craft immersive web experiences using React, Three.js, and Node.js.
        </motion.p>

        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a href="#projects" className="btn-glow">
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          className="social-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:abdul@example.com">
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Side Avatar / Animation */}
      <motion.div
        className="hero-avatar"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <img src="https://i.ibb.co/FHxKZDF/avatar1.png" alt="avatar" className="avatar-img" />
      </motion.div>
    </section>
  );
};

export default Hero;
