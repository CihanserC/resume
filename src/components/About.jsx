import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>cihansercaliskan@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Izmir, Turkey</span>
            </div>
            <div className="contact-item">
              <i className="fab fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/cihanser-caliskan/" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </div>
            <div className="contact-item">
              <i className="fab fa-github"></i>
              <a href="https://github.com/CihanserC" target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </div>
          </div>
          <div className="about-text">
            <p>
              As a Senior Backend Developer at Veripark, I design and maintain robust backend services, 
              optimizing performance for Akbank's banking solutions. With a focus on high-performance, 
              scalable systems, I collaborate closely with cross-functional teams, ensuring secure and 
              efficient solutions aligned with banking industry standards.
            </p>
            <p>
              Previously, I worked as a Senior Software Engineer at Doruk Automation, where I developed 
              cutting-edge Industry 4.0 MES/MOM software to optimize manufacturing processes, ensuring 
              seamless connectivity between machines, sensors, and enterprise systems. I have a strong 
              background in integrating real-time data collection and analysis systems, enabling 
              operational efficiency.
            </p>
            <p>
              My experience includes automating workflows using Azure DevOps Server, ensuring continuous 
              delivery, and managing full project lifecycles. During my time as an Analyst Software 
              Developer at Monovi, I implemented T&T systems for clients like JTI, managing incidents 
              from reporting to resolution while adhering to service level agreements.
            </p>
            <p>
              I hold a Master's degree in Optimization Problems, Heuristic Algorithms, Artificial 
              Intelligence, and Machine Learning from Yasar University, where I also earned my 
              Bachelor's degree in Computer Science.
            </p>
            <p>
              My technical expertise spans C#, .Net Technologies, Python, Java, Unity, SQL, Machine 
              Learning, and AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
