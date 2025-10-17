import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Freelance",
      duration: "2022 - Present",
      description: [
        "Developed web applications using React, Node.js, and MongoDB",
        "Implemented RESTful APIs and integrated third-party services",
        "Collaborated with clients to deliver customized solutions",
        "Maintained and optimized existing codebases"
      ]
    },
    {
      title: "Research Assistant",
      company: "Yıldız Technical University",
      duration: "2021 - 2023",
      description: [
        "Conducted research in Computer Engineering and AI",
        "Published papers in IEEE conferences",
        "Assisted in teaching undergraduate courses",
        "Developed educational materials and lab exercises"
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item fade-in">
              <h3 className="job-title">{exp.title}</h3>
              <p className="company">{exp.company}</p>
              <p className="duration">{exp.duration}</p>
              <ul className="job-description">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
