import React from 'react';
import './Home.css';
import profilePhoto from '../assets/images/profile-photo.jpg';  // Adjust the path based on your folder structure

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="content-wrapper">
        {/* Displaying the profile photo */}
        <div className="profile-photo-container">
          <img src={profilePhoto} alt="Dinakara M" className="profile-photo" />
        </div>
        <h1 className="main-heading">Hello, I'm <span className="name-highlight">Dinakara M</span></h1>
        <p className="intro-text">A passionate Web Developer dedicated to crafting stunning user experiences.</p>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>

      <div className="social-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:email@example.com" className="social-icon">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
