import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Engineering",
      university: "Yıldız Technical University",
      duration: "2018 - 2023",
      gpa: "GPA: 3.2/4.0",
      achievements: [
        "Focus on Software Engineering and Artificial Intelligence",
        "Published research papers in IEEE conferences",
        "Participated in various coding competitions"
      ]
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-item fade-in">
              <h3 className="degree">{edu.degree}</h3>
              <p className="university">{edu.university}</p>
              <p className="duration">{edu.duration}</p>
              <p className="gpa">{edu.gpa}</p>
              <ul className="achievements">
                {edu.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
