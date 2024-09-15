import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce website with product browsing, shopping cart, and payment integration.',
      link: 'https://github.com/yourusername/ecommerce-platform',
      image: 'path/to/ecommerce-image.jpg',
    },
    {
      title: 'Personal Portfolio',
      description: 'A personal portfolio showcasing my projects, skills, and experience in web development.',
      link: 'https://github.com/yourusername/personal-portfolio',
      image: 'path/to/portfolio-image.jpg',
    },
    {
      title: 'Weather App',
      description: 'A weather forecast app using OpenWeather API, providing real-time data for any location.',
      link: 'https://github.com/yourusername/weather-app',
      image: 'path/to/weather-image.jpg',
    },
    {
      title: 'Task Manager',
      description: 'A task management tool built with React and Node.js for organizing tasks and setting deadlines.',
      link: 'https://github.com/yourusername/task-manager',
      image: 'path/to/task-manager-image.jpg',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
