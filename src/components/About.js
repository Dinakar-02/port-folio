import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-heading">About Me</h2>
        <div className="about-content">
          <p className="about-description">
            Hi, I'm <span className="name-highlight">Dinakara M</span>, a passionate software developer dedicated to building robust, high-performance web applications. With a strong foundation in modern technologies like <span className="tech-highlight">React, Node.js, and JavaScript</span>, I enjoy creating user-friendly interfaces and scalable back-end solutions.
          </p>
          <p className="about-description">
            My focus is always on writing clean, maintainable code and delivering a seamless user experience. Whether working on personal projects or collaborating with a team, I'm always looking to push boundaries and stay updated with the latest industry trends.
          </p>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default About;
