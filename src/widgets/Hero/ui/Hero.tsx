import './Hero.scss';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Hello, I`m</h1>
          <h2 className="hero__name">George Kuhtov</h2>
          <h3 className="hero__title">Frontend Developer</h3>
          <div className="hero__actions">
            <button className="hero__button">View Projects</button>
            <button className="hero__button">Contact Me</button>
          </div>
        </div>
        <div className="hero__visual">
          <img
            src="/path/to/your/image.jpg"
            alt="Hero Visual"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
}
