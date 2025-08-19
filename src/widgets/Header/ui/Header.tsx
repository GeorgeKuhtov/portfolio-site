import './Header.scss';
import { useNavigation } from '../../../shared/hooks/useNavigation';

export function Header() {
  const { activeSection, handleNavClick } = useNavigation();
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <h1>GK</h1>
        </div>

        <nav className="header__nav">
          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
          >
            About
          </a>
          <a
            href="#skills"
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('skills');
            }}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('projects');
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
