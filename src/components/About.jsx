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
              I am a Site Reliability Engineer at VBT Software Inc., currently assigned to the Garanti BBVA project.
              My focus is on maintaining the reliability, scalability, and performance of banking infrastructure
              through automation and system optimization.
            </p>
            <p>
              I have over five years of experience in software engineering. Previously, I served as a Senior
              Backend Developer at Veripark for Akbank, where I designed scalable banking solutions. My
              background also includes working as a Senior Software Engineer at Doruk Automation, focusing on
              Industry 4.0 software, and as an Analyst Software Developer at Monovi. My experience spans
              managing full project lifecycles, integrating real-time data, and automating workflows using Azure
              DevOps.
            </p>
            <p>
              I hold a Master’s degree in Computer Engineering from Yasar University, specializing in
              Optimization Problems, Heuristic Algorithms, and AI. I apply this academic foundation to address
              complex technical challenges and streamline development pipelines.
            </p>

            <h3 className="about-subtitle">Technical Expertise</h3>
            <ul className="about-list">
              <li>
                <strong>SRE &amp; Backend:</strong> Site Reliability Engineering, C#, .NET, Java Spring Boot, SQL.
              </li>
              <li>
                <strong>Infrastructure &amp; DevOps:</strong> CI/CD, Azure DevOps, Infrastructure Automation.
              </li>
              <li>
                <strong>Advanced Research:</strong> Machine Learning, AI, and Optimization Algorithms.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
