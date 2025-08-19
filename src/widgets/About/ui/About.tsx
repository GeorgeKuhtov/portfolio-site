import './about.scss';
export function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="section__header">
          <h2 className="about__header">About Me</h2>
        </div>
        <div className="about__content">
          <div className="about__me">
            {' '}
            Описать что я и кто я, так же софт скилы
          </div>
          <div className="skills-section"> Tech Stack</div>
        </div>
      </div>
    </section>
  );
}
