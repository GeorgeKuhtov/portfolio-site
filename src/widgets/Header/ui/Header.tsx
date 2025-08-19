import './Header.scss';

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <h1>George Kuhtov</h1>
        </div>

        <nav className="header__nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
