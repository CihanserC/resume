import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "TypeScript", "Redux", "Next.js"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Python", "Django", "RESTful APIs", "GraphQL"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Linux", "Agile", "CI/CD", "Jest"]
    },
    {
      title: "Other Skills",
      skills: ["Machine Learning", "Data Structures", "Algorithms", "System Design", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category fade-in">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
