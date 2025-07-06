import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 85 },
  { name: 'React.js', icon: <FaReact />, level: 95 },
  { name: 'Node.js', icon: <FaNodeJs />, level: 80 },
  { name: 'MongoDB', icon: <FaDatabase />, level: 75 },
];

const About = () => {
  return (
    <section className="about-section">
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>
        <p>Who I am & what I do</p>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <p className="about-description">
          I'm a passionate Full Stack Developer focused on creating visually stunning and functional web experiences.
          I love building modern interfaces using technologies like React.js, Three.js, Node, and MongoDB.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={skill.name}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h4>{skill.name}</h4>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
