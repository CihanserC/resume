import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      link: "#"
    },
    {
      title: "Real-Time Chat Application",
      description: "Real-time messaging application using Socket.io. Supports group chats, private messaging, and file sharing.",
      technologies: ["React", "Socket.io", "Node.js", "Redis"],
      link: "#"
    },
    {
      title: "Task Management System",
      description: "Project management tool with drag-and-drop functionality, user roles, and real-time updates.",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts, historical data visualization, and responsive design.",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      link: "#"
    },
    {
      title: "IEEE Conference Paper",
      description: "Published research paper on Computer Engineering and AI applications.",
      technologies: ["Research", "AI", "Machine Learning"],
      link: "https://ieeexplore.ieee.org/document/10298702"
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects & Publications</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card fade-in">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              {project.link !== "#" && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
