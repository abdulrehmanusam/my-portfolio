import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="footer-top">
        <h3 onClick={scrollToTop} className="footer-logo">
          Abdul Rehman
        </h3>
        <div className="footer-social">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:abdul@example.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Abdul Rehman. All rights reserved.</p>
        <p>Made with ❤️ using React & Three.js</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
