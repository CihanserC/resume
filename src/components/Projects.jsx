import React from 'react';
import { links, projects } from '../content';
import { useLang } from '../i18n';
import './Projects.css';

const ProjectLinks = ({ project }) => {
  const { t } = useLang();
  return (
    <div className="link-row">
      {project.live && (
        <a href={project.live} target="_blank" rel="noopener noreferrer">{t.projects.live}</a>
      )}
      <a href={project.source} target="_blank" rel="noopener noreferrer">{t.projects.source}</a>
    </div>
  );
};

const Projects = () => {
  const { t } = useLang();

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title" className="section-title">{t.projects.title}</h2>
        <div className="projects-body">
          <ul className="featured">
            {projects.featured.map((project) => (
              <li key={project.id} className="featured-item">
                <h3 className="featured-name">{project.name}</h3>
                <p className="meta">{project.stack}</p>
                <p className="featured-text">{t.projects.featured[project.id]}</p>
                <ProjectLinks project={project} />
              </li>
            ))}
          </ul>

          {projects.groups.map((group) => (
            <div key={group.id} className="project-group">
              <h3 className="subhead">{t.projects.groups[group.id]}</h3>
              <ul className="project-list">
                {group.items.map((project) => (
                  <li key={project.id} className="project">
                    <div className="project-head">
                      <h4 className="project-name">{project.name}</h4>
                      <span className="meta">{project.stack}</span>
                    </div>
                    <p className="project-text">{t.projects.items[project.id]}</p>
                    <ProjectLinks project={project} />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className="link-row projects-more">
            <a href={links.github} target="_blank" rel="noopener noreferrer">{t.projects.more}</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
