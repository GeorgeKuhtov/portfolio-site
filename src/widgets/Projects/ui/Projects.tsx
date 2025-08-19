export function Projects() {
  return (
    <section className="projects">
      <div className="projects__container">
        <div className="section__header">
          <h2 className="projects__header">My Projects</h2>
        </div>
        <div className="projects__content">
          <div className="project">
            <h3 className="project__title">Project Title</h3>
            <p className="project__description">
              Brief description of the project.
            </p>
            <a href="#" className="project__link">
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
