import './projects.scss';
import { projectsData } from '../../../entities/project';
export function Projects() {
  return (
    <section className="projects">
      <div className="projects__container">
        <div className="section__header">
          <h2 className="projects__header">My Projects</h2>
        </div>
        <div className="projects__content">
          {projectsData.map((project) => (
            <div key={project.id} className="project">
              <img
                src={project.image}
                alt={project.title}
                className="project__image"
              />
              <div className="project__content">
                <h3 className="project__title">{project.title}</h3>
                <p className="project__description">{project.description}</p>

                <div className="project__tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project__links">
                  {project.links.demo && (
                    <a href={project.links.demo} className="project_link">
                      Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github}>GitHub</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
