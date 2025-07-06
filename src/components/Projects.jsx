import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Example project data
const projects = [
  {
    title: '3D Portfolio Website',
    description: 'A stunning 3D React portfolio with interactive Three.js background and animated UI.',
    technologies: ['React', 'Three.js', 'Framer Motion'],
    github: 'https://github.com/yourusername/3d-portfolio',
    demo: 'https://3d-portfolio.vercel.app',
    image: 'https://i.ibb.co/F0ZLskN/3d-project.png',
  },
  {
    title: 'AI Learning Platform',
    description: 'An AI-powered educational platform built with Node.js and React.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/ai-learn',
    demo: 'https://ai-learn.vercel.app',
    image: 'https://i.ibb.co/0MXtPRF/ai-learn.png',
  },
  {
    title: 'Crypto Dashboard',
    description: 'A real-time dashboard tracking cryptocurrency prices and charts.',
    technologies: ['React', 'Chart.js', 'REST API'],
    github: 'https://github.com/yourusername/crypto-dash',
    demo: 'https://crypto-dash.vercel.app',
    image: 'https://i.ibb.co/z2nNMnT/crypto-dash.png',
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>My Projects</h2>
        <p>Some of the work I'm proud of</p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Code
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
